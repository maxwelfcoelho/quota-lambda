import 'dotenv/config';
import { Handler } from 'aws-lambda';

import { getRandomQuote } from './services/quote.service';

export const getRandomQuoteHandler: Handler = async (event: any) => {
  const randomQuote = await getRandomQuote();

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
