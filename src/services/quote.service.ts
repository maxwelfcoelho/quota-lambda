import axios from 'axios';
import { fetchRandomQuote } from '../../integrations/quote';
import { Quote } from '../types';

export async function getRandomQuote(): Promise<Quote> {
    return await fetchRandomQuote();
}