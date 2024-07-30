import {  NextResponse } from 'next/server';
import axios from 'axios';

const BITLY_API_URL = 'https://api-ssl.bitly.com/v4/shorten';

type Data = {
  shortUrl?: string;
  error?: string;
};

export async function POST(request:Request) {
  if (request.method === 'POST') {
    // const { longUrl } = request.bodyUsed;
    const {longUrl} = await request.json()

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
console.log(response)
      // res.status(200).json();
      return NextResponse.json( { shortUrl: response.data.link }, { status: 200 });

    } catch (error) {
      return NextResponse.json( { error: 'Failed to shorten URL' }, { status: 500 });

    }
  } else {
    return NextResponse.json( { error: 'Method not allowed' }, { status: 405 });

  }
}
