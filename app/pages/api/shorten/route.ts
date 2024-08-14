// // // pages/api/shorten.ts
// // import type { NextApiRequest, NextApiResponse } from 'next';
// // import axios from 'axios';

// // const BITLY_API_URL = 'https://api-ssl.bitly.com/v4';

// // type Data = {
// //   shortUrl?: string;
// //   error?: string;
// // };

// // export default async function handler(
// //   req: NextApiRequest,
// //   res: NextApiResponse<Data>
// // ) {
// //   if (req.method === 'POST') {
// //     const { longUrl } = req.body;
// //     console.log(longUrl)

// //     try {
// //       const response = await axios.post(
// //         BITLY_API_URL,
// //         { long_url: longUrl },
// //         {
// //           headers: {
// //             Authorization: `Bearer ${process.env.BITLY_ACCESS_TOKEN}`,
// //             'Content-Type': 'application/json',
// //           },
// //         }
// //       );

// //       res.status(200).json({ shortUrl: response.data.link });
// //     } catch (error) {
// //       res.status(500).json({ error: 'Failed to shorten URL' });
// //     }
// //   } else {
// //     res.status(405).json({ error: 'Method not allowed' });
// //   }
// // console.log(process.env.BITLY_ACCESS_TOKEN)
// // }



// import type { NextApiRequest, NextApiResponse } from 'next';
// import axios from 'axios';

// const BITLY_API_URL = 'https://api-ssl.bitly.com/v4/shorten';

// type Data = {
//   shortUrl?: string;
//   error?: string;
// };

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<Data>
// ) {
//   if (req.method !== 'POST') {
//     return res.status(405).json({ error: 'Method not allowed' });
//   }

//   const { longUrl } = req.body;

//   try {
//     const response = await axios.post(
//       BITLY_API_URL,
//       { long_url: longUrl },
//       {
//         headers: {
//           Authorization: `Bearer ${process.env.BITLY_ACCESS_TOKEN}`,
//           'Content-Type': 'application/json',
//         },
//       }
//     );

//     return res.status(200).json({ shortUrl: response.data.link });
//   } catch (error) {
//     console.error('Error shortening URL:', error);
//     return res.status(500).json({ error: 'Failed to shorten URL' });
//   }
// }



import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

const BITLY_API_URL = 'https://api-ssl.bitly.com/v4/shorten';

type Data = {
  shortUrl?: string;
  error?: string;
};

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { longUrl } = req.body;

  if (!longUrl || typeof longUrl !== 'string' || !isValidUrl(longUrl)) {
    return res.status(400).json({ error: 'Invalid URL' });
  }

  if (!process.env.BITLY_ACCESS_TOKEN) {
    console.error('BITLY_ACCESS_TOKEN is not defined');
    return res.status(500).json({ error: 'Server configuration error' });
  }

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

    return res.status(200).json({ shortUrl: response.data.link });
  } catch (error: any) {
    console.error('Error shortening URL:', error);
    if (error.response) {
      console.error('Response data:', error.response.data);
      console.error('Response status:', error.response.status);
      return res.status(error.response.status).json({ error: error.response.data.message });
    } else if (error.request) {
      console.error('Request data:', error.request);
      return res.status(500).json({ error: 'No response received from Bitly API' });
    } else {
      console.error('Error message:', error.message);
      return res.status(500).json({ error: 'Error setting up request to Bitly API' });
    }
  }
};

export default handler;

function isValidUrl(url: string): boolean {
  try {
    new URL(url);
    return true;
  } catch (_) {
    return false;
  }
}
