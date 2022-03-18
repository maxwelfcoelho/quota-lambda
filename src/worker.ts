import { getRandomQuote } from './services/quote/quote.service';
import { Quote } from './services/quote/interfaces/quote';

export async function getRandomQuoteWorker(): Promise<Quote> {
    try {
        const randomQuote = await getRandomQuote();
        return randomQuote;
    } catch(err: any) {
        throw new Error(err.message);
    }
}