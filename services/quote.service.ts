import axios from 'axios';
import { Quote } from '../types';

const URL = process.env.URL || '';

export async function fetchRandomQuote(): Promise<Quote> {
    const response = await axios.get(URL);
    const randomQuote = response.data;

    return randomQuote;
}