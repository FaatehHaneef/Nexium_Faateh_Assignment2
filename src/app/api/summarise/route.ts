import { NextRequest, NextResponse } from 'next/server';
import { scrapeAndSummarise } from '@/lib/scraper';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const url = body?.url;
    const showUrdu = body?.showUrdu;

    if (!url || typeof url !== 'string') {
      return NextResponse.json({ error: 'Invalid or missing URL' }, { status: 400 });
    }

    const summary = await scrapeAndSummarise(url, showUrdu);
    return NextResponse.json({ summary });
  } catch (err: any) {
    console.error('Error in /api/summarise:', err.message);
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 });
  }
}

