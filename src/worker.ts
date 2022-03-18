import { getRandomQuote } from './services/quote/quote.service';
import { Quote } from './types';

export async function getRandomQuoteWorker(): Promise<Quote> {
    try {
        const randomQuote = await getRandomQuote();
        return randomQuote;
    } catch(err: any) {
        throw new Error(err.message);
    }
}