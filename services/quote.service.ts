import axios from 'axios';
import { Quote } from '../types';

const URL = 'https://api.quotable.io/random';

export async function fetchRandomQuote(): Promise<Quote> {
    const response = await axios.get(URL);
    const randomQuote = response.data;

    return randomQuote;
}