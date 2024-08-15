import {render , screen } from "@testing-library/react";
import user from "@testing-library/user-event"
import axios from "axios";
import {handleSubmit} from "../app/dashboard/page"
import { describe } from "node:test";

jest.mock('axios')
describe('handleSubmit', () => {
  it('should process the URL correctly', async () => {
    const setShortUrl = jest.fn();
    const setQrCodeUrl = jest.fn();
    const setError = jest.fn();
    const setIsLoading = jest.fn();
    const mockEvent = {
      preventDefault: jest.fn(),
      target: {
        elements: {
          namedItem: jest.fn().mockReturnValue({ value: 'https://example.com' })
        }
      }
    } as unknown as React.FormEvent<HTMLFormElement>;

    axios.post = jest.fn().mockResolvedValue({
      data: {
        shortUrl: 'https://short.url',
        qrCodeUrl: 'https://qr.code.url'
      }
    });

    await handleSubmit(mockEvent, 'https://example.com', setShortUrl, setQrCodeUrl, setError, setIsLoading);

    expect(mockEvent.preventDefault).toHaveBeenCalled();
    expect(setIsLoading).toHaveBeenCalledWith(true);
    expect(setShortUrl).toHaveBeenCalledWith('https://short.url');
    expect(setQrCodeUrl).toHaveBeenCalledWith('https://qr.code.url');
    expect(setIsLoading).toHaveBeenCalledWith(false);
    expect(setError).not.toHaveBeenCalled();
  });

  it('should handle errors gracefully', async () => {
    const setShortUrl = jest.fn();
    const setQrCodeUrl = jest.fn();
    const setError = jest.fn();
    const setIsLoading = jest.fn();
    const mockEvent = {
      preventDefault: jest.fn(),
      target: {
        elements: {
          namedItem: jest.fn().mockReturnValue({ value: 'invalid-url' })
        }
      }
    } as unknown as React.FormEvent<HTMLFormElement>;

    axios.post = jest.fn().mockRejectedValue(new Error('Error occurred'));

    await handleSubmit(mockEvent, 'invalid-url', setShortUrl, setQrCodeUrl, setError, setIsLoading);

    expect(mockEvent.preventDefault).toHaveBeenCalled();
    expect(setIsLoading).toHaveBeenCalledWith(true);
    expect(setError).toHaveBeenCalledWith('Error occurred');
    expect(setIsLoading).toHaveBeenCalledWith(false);
  });
});
