import { NextResponse } from 'next/server';
import axios from 'axios';
import { getLastParameter } from '@/lib/utils';

const BITLY_API_URL = 'https://api-ssl.bitly.com/v4';

export async function POST(request: Request): Promise<NextResponse> { 
  const BITLY_ACCESS_TOKEN = "39a1e28eb7d8126143f21e1a29352b5f658b8a49";
  if (!BITLY_ACCESS_TOKEN) {
    console.error('Bitly access token not configured');
    return NextResponse.json({ error: 'Bitly access token not configured' }, { status: 500 });
  }

  try {
    const { longUrl }: { longUrl: string } = await request.json();

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
    const guid = getLastParameter(response.data.references.group ?? "");

    const body = JSON.stringify({
      title: "Default QR Code",
      group_guid: guid,
      destination: { bitlink_id: response.data.id },
      archived: false,
      render_customizations: {
        background_color: "#ffffff",
        dot_pattern_color: "#000000",
        dot_pattern_type: "standard",
        corners: {
          corner_1: { inner_color: "#000000", outer_color: "#000000", shape: "standard" },
          corner_2: { inner_color: "#000000", outer_color: "#000000", shape: "standard" },
          corner_3: { inner_color: "#000000", outer_color: "#000000", shape: "standard" }
        },
        branding: { bitly_brand: true },
        spec_settings: { error_correction: 4 }
      }
    });

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

    const img_data = await axios.get(
      `https://api-ssl.bitly.com/v4/qr-codes/${qrResponse.data.qrcode_id}/image?format=svg`,
      {
        headers: {
          Authorization: `Bearer ${BITLY_ACCESS_TOKEN}`,
          'Content-Type': 'application/json',
        },
      }
    );

    return NextResponse.json({
      shortUrl,
      qrCodeUrl: img_data.data.qr_code_image,
    }, { status: 200 });

  } catch (error: any) {
    console.error('Error:', error.message, error.response?.data);
    return NextResponse.json({ error: 'Failed to shorten URL or generate QR code' }, { status: 500 });
  }
}
