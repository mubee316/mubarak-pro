// // 


// 'use client'
// import React from 'react';
// import { useState } from 'react';
// import axios from 'axios';
// import { Loader } from 'lucide-react';
// import { Button } from '@/app/components/ui/button';
// import background from '../../public/background.png';
// import { Input } from '@/app/components/ui/input';
// import Header from '@/app/components/Header';

// export const handleSubmit = async (
//   event: React.FormEvent,
//   longUrl: string,
//   setShortUrl: React.Dispatch<React.SetStateAction<string>>,
//   setQrCodeUrl: React.Dispatch<React.SetStateAction<string>>,
//   setError: React.Dispatch<React.SetStateAction<string>>,
//   setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
// ) => {
//   setIsLoading(true);
//   event.preventDefault();
//   setError('');
//   setShortUrl('');
//   setQrCodeUrl('');

//   try {
//     const response = await axios.post('/api/shorten', { longUrl });
//     setShortUrl(response.data.shortUrl);
//     setQrCodeUrl(response.data.qrCodeUrl);
//   } catch (error: any) {
//     setError(error.message);
//   } finally {
//     setIsLoading(false);
//   }
// };

// const Dashboard = () => {
//   const [longUrl, setLongUrl] = useState('');
//   const [shortUrl, setShortUrl] = useState('');
//   const [qrCodeUrl, setQrCodeUrl] = useState('');
//   const [error, setError] = useState('');
//   const [isLoading, setIsLoading] = useState<boolean>(false);

//   const handleSubmitWrapper = async (event: React.FormEvent) => {
//     await handleSubmit(event, longUrl, setShortUrl, setQrCodeUrl, setError, setIsLoading);
//   };

//   return (
//     <section>
//       <Header/>
//       <div className='flex justify-center items-center text-center flex-col gap-4' style={{ backgroundImage: `url(${background.src})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', height: '100vh' }}>
//         <h1>URL Shortener</h1>
//         <form onSubmit={handleSubmitWrapper} className='flex gap-4'>
//           <Input
//             className='w-96 h-20 rounded-full'
//             type="text"
//             value={longUrl}
//             onChange={(e: React.ChangeEvent<HTMLInputElement>) => setLongUrl(e.target.value)}
//             placeholder="Enter your URL"
//             required
//           />
//           <div>
//             <Button disabled={isLoading} className={`rounded-full ml-3 p-6 h-20 bg-blue-400 text-white absolute right-[33em] ${isLoading ? "bg-black" : ""}`} type="submit">
//               {isLoading ? (
//                 <svg className='!text-white' width="38" height="38" viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg" stroke="#fff">
//                   <g fill="none" fillRule="evenodd">
//                     <g transform="translate(1 1)" strokeWidth="2">
//                       <circle strokeOpacity=".5" cx="18" cy="18" r="18" className='!text-white' />
//                       <path d="M36 18c0-9.94-8.06-18-18-18">
//                         <animateTransform
//                           attributeName="transform"
//                           type="rotate"
//                           from="0 18 18"
//                           to="360 18 18"
//                           dur="1s"
//                           repeatCount="indefinite"
//                         />
//                       </path>
//                     </g>
//                   </g>
//                 </svg>
//               ) : "Get Url"}
//             </Button>
//           </div>
//         </form>
//         {shortUrl && <p>Shortened URL: <a href={shortUrl}>{shortUrl}</a></p>}
//         {error && <p>{error}</p>}
//         {qrCodeUrl && <div>
//           <p>QR Code:</p>
//           <img src={qrCodeUrl} alt="QR Code" />
//         </div>}
//       </div>
//     </section>
//   );
// };

// export default Dashboard;


'use client'
import React, { useState } from 'react';
import axios from 'axios';
import { Loader } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import background from '../../public/background.png';
import { Input } from '@/app/components/ui/input';
import Header from '@/app/components/Header';
import Image from 'next/image';

const Dashboard = () => {
  const [longUrl, setLongUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  const [qrCodeUrl, setQrCodeUrl] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = async (
    event: React.FormEvent
  ) => {
    setIsLoading(true);
    event.preventDefault();
    setError('');
    setShortUrl('');
    setQrCodeUrl('');

    try {
      const response = await axios.post('/api/shorten', { longUrl });
      setShortUrl(response.data.shortUrl);
      setQrCodeUrl(response.data.qrCodeUrl);
    } catch (error: any) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Header/>
      <div className="flex justify-center items-center text-center flex-col gap-4" style={{ backgroundImage: `url(${background.src})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', height: '100vh' }}>
        <h1>URL Shortener</h1>
        <form onSubmit={handleSubmit} className='flex gap-4'>
          <Input
            className='w-96 h-20 rounded-full'
            type="text"
            value={longUrl}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setLongUrl(e.target.value)}
            placeholder="Enter your URL"
            required
          />
          <div>
            <Button disabled={isLoading} className={`rounded-full ml-3 p-6 h-20 bg-blue-400 text-white absolute right-[33em] ${isLoading ? "bg-black" : ""}`} type="submit">
              {isLoading ? (
                <svg className='!text-white' width="38" height="38" viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg" stroke="#fff">
                  <g fill="none" fillRule="evenodd">
                    <g transform="translate(1 1)" strokeWidth="2">
                      <circle strokeOpacity=".5" cx="18" cy="18" r="18" className='!text-white' />
                      <path d="M36 18c0-9.94-8.06-18-18-18">
                        <animateTransform
                          attributeName="transform"
                          type="rotate"
                          from="0 18 18"
                          to="360 18 18"
                          dur="1s"
                          repeatCount="indefinite"
                        />
                      </path>
                    </g>
                  </g>
                </svg>
              ) : "Get Url"}
            </Button>
          </div>
        </form>
        {shortUrl && <p>Shortened URL: <a href={shortUrl}>{shortUrl}</a></p>}
        {error && <p>{error}</p>}
        {qrCodeUrl && <div>
          <p>QR Code:</p>
          <Image src={qrCodeUrl} width={350} height={350} alt="QR Code" />
        </div>}
      </div>
      </>
  );
};

export default Dashboard;
