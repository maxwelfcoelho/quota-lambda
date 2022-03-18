import { fetchRandomQuote } from '../../../integrations/quote';
import { Quote } from './interfaces/quote';

export async function getRandomQuote(): Promise<Quote> {
    return await fetchRandomQuote();
}