import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const gst = searchParams.get('gst');

  if (!gst) {
    return NextResponse.json({ error: 'GST number is required' }, { status: 400 });
  }

  try {
    const response = await fetch(`https://gst-insights-api.p.rapidapi.com/getGSTDetailsUsingGST/${gst}`, {
      headers: {
        'x-rapidapi-host': 'gst-insights-api.p.rapidapi.com',
        'x-rapidapi-key': '526af1ff36mshafecdfb60f7e3f4p154debjsnc8006aaf1ab0'
      }
    });

    if (!response.ok) {
      const errorData = await response.json();
      return NextResponse.json(
        { error: errorData.message || 'Failed to fetch GST details' },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error: any) {
    console.error('GST API Error:', error.message);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
