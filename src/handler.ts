import 'dotenv/config';
import { Handler } from 'aws-lambda';

import { getRandomQuoteWorker } from './worker';
import { buildResponse } from './services/buildResponse/build-response.service';

export const getRandomQuoteHandler: Handler = async (event: any) => {
  
    try {
        const randomQuote = await getRandomQuoteWorker();

        return buildResponse(200, {
            message: randomQuote,
            input: event
        });
    } catch(err: any) {
        return buildResponse(500, {
            message: err.message,
            input: event
        });
    }
};
