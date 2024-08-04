// // // // // // import {  NextResponse } from 'next/server';
// // // // // // import axios from 'axios';

// // // // // // const BITLY_API_URL = 'https://api-ssl.bitly.com/v4/shorten';

// // // // // // type Data = {
// // // // // //   shortUrl?: string;
// // // // // //   error?: string;
// // // // // // };

// // // // // // export async function POST(request:Request) {
// // // // // //   if (request.method === 'POST') {
// // // // // //     // const { longUrl } = request.bodyUsed;
// // // // // //     const {longUrl} = await request.json()

// // // // // //     try {
// // // // // //       const response = await axios.post(
// // // // // //         BITLY_API_URL,
// // // // // //         { long_url: longUrl },
// // // // // //         {
// // // // // //           headers: {
// // // // // //             Authorization: `Bearer ${process.env.BITLY_ACCESS_TOKEN}`,
// // // // // //             'Content-Type': 'application/json',
// // // // // //           },
// // // // // //         }
// // // // // //       );
// // // // // // console.log(response)
// // // // // //       // res.status(200).json();
// // // // // //       return NextResponse.json( { shortUrl: response.data.link }, { status: 200 });

// // // // // //     } catch (error) {
// // // // // //       return NextResponse.json( { error: 'Failed to shorten URL' }, { status: 500 });

// // // // // //     }
// // // // // //   } else {
// // // // // //     return NextResponse.json( { error: 'Method not allowed' }, { status: 405 });

// // // // // //   }
// // // // // // }

// // // // // 'use client'
// // // // // import { NextResponse } from 'next/server';
// // // // // import axios from 'axios';

// // // // // const BITLY_API_URL = 'https://api-ssl.bitly.com/v4/shorten';
// // // // // const BITLY_QR_API_URL = (bitlink: string) => `https://api-ssl.bitly.com/v4/bitlinks/${bitlink}/qr`;

// // // // // type Data = {
// // // // //   shortUrl?: string;
// // // // //   qrCodeUrl?: string;
// // // // //   error?: string;
// // // // // };

// // // // // export async function POST(request: Request) {
// // // // //   if (request.method === 'POST') {
// // // // //     const { longUrl } = await request.json();

// // // // //     try {
// // // // //       const response = await axios.post(
// // // // //         BITLY_API_URL,
// // // // //         { long_url: longUrl },
// // // // //         {
// // // // //           headers: {
// // // // //             Authorization: `Bearer ${process.env.BITLY_ACCESS_TOKEN}`,
// // // // //             'Content-Type': 'application/json',
// // // // //           },
// // // // //         }
// // // // //       );

// // // // //       const shortUrl = response.data.link;

// // // // //       // Generate QR Code
// // // // //       const qrResponse = await axios.post(
// // // // //         BITLY_QR_API_URL(shortUrl),
// // // // //         {},
// // // // //         {
// // // // //           headers: {
// // // // //             Authorization: `Bearer ${process.env.BITLY_ACCESS_TOKEN}`,
// // // // //             'Content-Type': 'application/json',
// // // // //           },
// // // // //         }
// // // // //       );

// // // // //       return NextResponse.json(
// // // // //         {
// // // // //           shortUrl,
// // // // //           qrCodeUrl: qrResponse.data.qr_code_url,
// // // // //         },
// // // // //         { status: 200 }
// // // // //       );
// // // // //     } catch (error) {
// // // // //       return NextResponse.json(
// // // // //         { error: 'Failed to shorten URL or generate QR code' },
// // // // //         { status: 500 }
// // // // //       );
// // // // //     }
// // // // //   } else {
// // // // //     return NextResponse.json(
// // // // //       { error: 'Method not allowed' },
// // // // //       { status: 405 }
// // // // //     );
// // // // //   }
// // // // // }




// // // // import { NextResponse } from 'next/server';
// // // // import axios from 'axios';

// // // // const BITLY_API_URL = 'https://api-ssl.bitly.com/v4/shorten';
// // // // const BITLY_QR_API_URL = (bitlink: string) => `https://api-ssl.bitly.com/v4/bitlinks/${bitlink}/qr`;

// // // // type Data = {
// // // //   shortUrl?: string;
// // // //   qrCodeUrl?: string;
// // // //   error?: string;
// // // // };

// // // // export async function POST(request: Request) {
// // // //   if (request.method !== 'POST') {
// // // //     return NextResponse.json({ error: 'Method not allowed' }, { status: 405 });
// // // //   }

// // // //   try {
// // // //     const { longUrl }: { longUrl: string } = await request.json();

// // // //     const response = await axios.post(
// // // //       BITLY_API_URL,
// // // //       { long_url: longUrl },
// // // //       {
// // // //         headers: {
// // // //           Authorization: `Bearer ${process.env.BITLY_ACCESS_TOKEN}`,
// // // //           'Content-Type': 'application/json',
// // // //         },
// // // //       }
// // // //     );

// // // //     const shortUrl: string = response.data.link;

// // // //     // Generate QR Code
// // // //     const qrResponse = await axios.post(
// // // //       BITLY_QR_API_URL(shortUrl),
// // // //       {},
// // // //       {
// // // //         headers: {
// // // //           Authorization: `Bearer ${process.env.BITLY_ACCESS_TOKEN}`,
// // // //           'Content-Type': 'application/json',
// // // //         },
// // // //       }
// // // //     );

// // // //     return NextResponse.json(
// // // //       {
// // // //         shortUrl,
// // // //         qrCodeUrl: qrResponse.data.qr_code_url,
// // // //       },
// // // //       { status: 200 }
// // // //     );
// // // //   } catch (error: any) {
// // // //     console.log('Error:', error.message, error.response?.data);
// // // //     return NextResponse.json(
// // // //       { error: 'Failed to shorten URL or generate QR code' },
// // // //       { status: 500 }

// // // //     );
// // // //   }
// // // // }




// // // import { NextResponse } from 'next/server';
// // // import axios from 'axios';

// // // const BITLY_API_URL = 'https://api-ssl.bitly.com/v4/shorten';
// // // const BITLY_QR_API_URL = (bitlink: string) => `https://api-ssl.bitly.com/v4/bitlinks/${bitlink}/qr`;

// // // type Data = {
// // //   shortUrl?: string;
// // //   qrCodeUrl?: string;
// // //   error?: string;
// // // };

// // // export async function POST(request: Request) {
// // //   if (request.method !== 'POST') {
// // //     return NextResponse.json({ error: 'Method not allowed' }, { status: 405 });
// // //   }

// // //   const BITLY_ACCESS_TOKEN = process.env.BITLY_ACCESS_TOKEN;
// // //   if (!BITLY_ACCESS_TOKEN) {
// // //     return NextResponse.json({ error: 'Bitly access token not configured' }, { status: 500 });
// // //   }

// // //   try {
// // //     const { longUrl }: { longUrl: string } = await request.json();

// // //     const response = await axios.post(
// // //       BITLY_API_URL,
// // //       { long_url: longUrl },
// // //       {
// // //         headers: {
// // //           Authorization: `Bearer ${BITLY_ACCESS_TOKEN}`,
// // //           'Content-Type': 'application/json',
// // //         },
// // //       }
// // //     );

// // //     const shortUrl: string = response.data.link;

// // //     // Generate QR Code
// // //     const qrResponse = await axios.post(
// // //       BITLY_QR_API_URL(shortUrl),
// // //       {},
// // //       {
// // //         headers: {
// // //           Authorization: `Bearer ${BITLY_ACCESS_TOKEN}`,
// // //           'Content-Type': 'application/json',
// // //         },
// // //       }
// // //     );

// // //     return NextResponse.json(
// // //       {
// // //         shortUrl,
// // //         qrCodeUrl: qrResponse.data.qr_code_url,
// // //       },
// // //       { status: 200 }
// // //     );
// // //   } catch (error: any) {
// // //     console.error('Error:', error.message, error.response?.data);
// // //     return NextResponse.json(
// // //       { error: 'Failed to shorten URL or generate QR code' },
// // //       { status: 500 }
// // //     );
// // //   }
// // // }



// // import { NextResponse } from 'next/server';
// // import axios from 'axios';

// // const BITLY_API_URL = 'https://api-ssl.bitly.com/v4/shorten';
// // const BITLY_QR_API_URL = (bitlink: string) => `https://api-ssl.bitly.com/v4/bitlinks/${bitlink}/qr`;

// // export async function POST(request: Request) {
// //   const BITLY_ACCESS_TOKEN = process.env.BITLY_ACCESS_TOKEN;
// //   if (!BITLY_ACCESS_TOKEN) {
// //     return NextResponse.json({ error: 'Bitly access token not configured' }, { status: 500 });
// //   }

// //   try {
// //     const { longUrl }: { longUrl: string } = await request.json();

// //     const response = await axios.post(
// //       BITLY_API_URL,
// //       { long_url: longUrl },
// //       {
// //         headers: {
// //           Authorization: `Bearer ${BITLY_ACCESS_TOKEN}`,
// //           'Content-Type': 'application/json',
// //         },
// //       }
// //     );

// //     const shortUrl: string = response.data.link;

// //     // Generate QR Code
// //     const qrResponse = await axios.post(
// //       BITLY_QR_API_URL(shortUrl),
// //       {},
// //       {
// //         headers: {
// //           Authorization: `Bearer ${BITLY_ACCESS_TOKEN}`,
// //           'Content-Type': 'application/json',
// //         },
// //       }
// //     );

// //     return NextResponse.json({
// //       shortUrl,
// //       qrCodeUrl: qrResponse.data.qr_code_url,
// //     }, { status: 200 });
// //   } catch (error: any) {
// //     console.error('Error:', error.message, error.response?.data);
// //     return NextResponse.json({ error: 'Failed to shorten URL or generate QR code' }, { status: 500 });
// //   }
// // }



// import { NextResponse } from 'next/server';
// import axios from 'axios';

// const BITLY_API_URL = 'https://api-ssl.bitly.com/v4/shorten';
// const BITLY_QR_API_URL = (bitlink: string) => `https://api-ssl.bitly.com/v4/bitlinks/${bitlink}/qr`;

// export async function POST(request: Request) {
//   const BITLY_ACCESS_TOKEN = process.env.BITLY_ACCESS_TOKEN;
//   if (!BITLY_ACCESS_TOKEN) {
//     return NextResponse.json({ error: 'Bitly access token not configured' }, { status: 500 });
//   }

//   try {
//     const { longUrl }: { longUrl: string } = await request.json();

//     const response = await axios.post(
//       BITLY_API_URL,
//       { long_url: longUrl },
//       {
//         headers: {
//           Authorization: `Bearer ${BITLY_ACCESS_TOKEN}`,
//           'Content-Type': 'application/json',
//         },
//       }
//     );

//     const shortUrl: string = response.data.link;

//     // Generate QR Code
//     const qrResponse = await axios.post(
//       BITLY_QR_API_URL(shortUrl),
//       {},
//       {
//         headers: {
//           Authorization: `Bearer ${BITLY_ACCESS_TOKEN}`,
//           'Content-Type': 'application/json',
//         },
//       }
//     );

//     return NextResponse.json({
//       shortUrl,
//       qrCodeUrl: qrResponse.data.qr_code_url,
//     }, { status: 200 });
//   } catch (error: any) {
//     console.error('Error:', error.message, error.response?.data);
//     return NextResponse.json({ error: 'Failed to shorten URL or generate QR code' }, { status: 500 });
//   }
// }



import { NextResponse } from 'next/server';
import axios from 'axios';
import { getLastParameter } from '@/lib/utils';

const BITLY_API_URL = 'https://api-ssl.bitly.com/v4';
const BITLY_QR_API_URL = (bitlink: string) => `https://api-ssl.bitly.com/v4/bitlinks/${bitlink}/qr`;

export async function POST(request: Request) {
  const BITLY_ACCESS_TOKEN = "39a1e28eb7d8126143f21e1a29352b5f658b8a49";
  if (!BITLY_ACCESS_TOKEN) {
    console.error('Bitly access token not configured');
    return NextResponse.json({ error: 'Bitly access token not configured' }, { status: 500 });
  }

  try {
    const { longUrl }: { longUrl: string } = await request.json();
    // console.log('Received longUrl:', longUrl);

    const response = await axios.post(
      `${BITLY_API_URL}/shorten`,
      { long_url: longUrl },
      {
        headers: {
          Authorization: `Bearer ${BITLY_ACCESS_TOKEN}`,
          'Content-Type': 'application/json',
        },
      }
    );


    const shortUrl: string = response.data.link;
    const guid = getLastParameter(response.data.references.group ??"")
    const body = JSON.stringify({ "title": "Default QR Code", "group_guid": guid, "destination": { "bitlink_id": response.data.id }, "archived": false, "render_customizations": { "background_color": "#ffffff", "dot_pattern_color": "#000000", "dot_pattern_type": "standard", "corners": { "corner_1": { "inner_color": "#000000", "outer_color": "#000000", "shape": "standard" }, "corner_2": { "inner_color": "#000000", "outer_color": "#000000", "shape": "standard" }, "corner_3": { "inner_color": "#000000", "outer_color": "#000000", "shape": "standard" } }, "branding": { "bitly_brand": true }, "spec_settings": { "error_correction": 4 } } })

    // Generate QR Code
    const qrResponse = await axios.post(
      `${BITLY_API_URL}/qr-codes`,
      body,
      {
        headers: {
          Authorization: `Bearer ${BITLY_ACCESS_TOKEN}`,
          'Content-Type': 'application/json',
        },
      }
    );
    console.log('Bitly shorten response:',qrResponse );

    const qr_id = qrResponse.data.qrcode_id

// const img_data = await fetch(`https://api-ssl.bitly.com/v4/qr-codes/${qr_id}/image?format=svg`, {
//   headers: {
//     Authorization: `Bearer ${BITLY_ACCESS_TOKEN}`,
//   }
// });
const img_data = await axios.get(
  `https://api-ssl.bitly.com/v4/qr-codes/${qr_id}/image?format=svg`,
  {
    headers: {
      Authorization: `Bearer ${BITLY_ACCESS_TOKEN}`,
      'Content-Type': 'application/json',
    },
  }
);

// const qr_ig_response = await img_data
console.log(img_data)

    return NextResponse.json({
      shortUrl,
      qrCodeUrl:img_data.data.qr_code_image ,
    }, { status: 200 });
  } catch (error: any) {
    console.error('Error:', error.message, error.response?.data);
    return NextResponse.json({ error: 'Failed to shorten URL or generate QR code' }, { status: 500 });
  }
}
