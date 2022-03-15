import { fetchRandomQuote } from '../../integrations/quote';
import { Quote } from '../types';

export async function getRandomQuote(): Promise<Quote> {
    try {
        return await fetchRandomQuote();
    } catch(err: any) {
        throw new Error(err.message);
    }
}