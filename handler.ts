import 'dotenv/config';
import { Handler } from 'aws-lambda';

import { fetchRandomQuote } from './services/quote.service';

console.log(process.env.URL);

export const getRandomQuote: Handler = async (event: any) => {
  const randomQuote = await fetchRandomQuote();

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: randomQuote,
        input: event,
      },
      null,
      2
    ),
  };
};
