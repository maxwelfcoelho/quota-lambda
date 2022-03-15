import 'dotenv/config';
import { Handler } from 'aws-lambda';

import { getRandomQuote } from './services/quote.service';

export const getRandomQuoteHandler: Handler = async (event: any) => {
  
    try {
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

    } catch(err: any) {
        return {
            statusCode: 424,
            body: JSON.stringify(
                {
                    message: err.message,
                    input: event,
                },
                null,
                2
            )
        };
    }
};
