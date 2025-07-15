import * as cheerio from 'cheerio';
import { translateToUrdu } from '@/lib/utils';

export async function scrapeAndSummarise(url: string, showUrdu: boolean): Promise<string> {
  try {
    const response = await fetch(url, {
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36',
      },
    });

    if (!response.ok) {
      console.error('Failed to fetch:', response.status, response.statusText);
      return '❌ Could not fetch the article.';
    }

    const html = await response.text();
    const $ = cheerio.load(html);

    let paragraphs: string[] = [];

    $('p').each((_, el) => {
      const text = $(el).text().trim();
      if (text.length > 30) paragraphs.push(text);
    });

    if (paragraphs.length === 0) {
      return '❌ No readable content found.';
    }

    const summary = paragraphs.slice(0, 5).join(' '); // pick top 5 paragraphs
    const translatedSummary = translateToUrdu(summary); // Translate using dictionary
    return showUrdu ? translatedSummary : summary;
  } catch (err) {
    console.error('Scraping error:', err);
    return '❌ Unexpected error during scraping.';
  }
}

