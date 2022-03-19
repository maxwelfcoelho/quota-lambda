import { getRandomQuote } from './services/quote/quote.service';
import { Quote } from './services/quote/interfaces/quote';

export async function getRandomQuoteWorker(): Promise<Quote> {
    return await getRandomQuote();
}