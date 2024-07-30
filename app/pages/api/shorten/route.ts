// pages/api/shorten.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

const BITLY_API_URL = 'https://api-ssl.bitly.com/v4/shorten';

type Data = {
  shortUrl?: string;
  error?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === 'POST') {
    const { longUrl } = req.body;
    console.log(longUrl)

    try {
      const response = await axios.post(
        BITLY_API_URL,
        { long_url: longUrl },
        {
          headers: {
            Authorization: `Bearer ${process.env.BITLY_ACCESS_TOKEN}`,
            'Content-Type': 'application/json',
          },
        }
      );

      res.status(200).json({ shortUrl: response.data.link });
    } catch (error) {
      res.status(500).json({ error: 'Failed to shorten URL' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
console.log(process.env.BITLY_ACCESS_TOKEN)
}
