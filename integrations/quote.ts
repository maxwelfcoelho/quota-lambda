import axios from 'axios';
import { Quote } from '../src/services/quote/interfaces/quote';

const URL = process.env.URL || '';

export async function fetchRandomQuote(): Promise<Quote> {
    try {
        const response = await axios.get(URL);
        const randomQuote = response.data;

        return randomQuote;
    } catch(err: any) {
        throw new Error(err.message);
    }
}