import axios from 'axios';
import { mocked } from 'ts-jest/utils';

import { fetchRandomQuote } from '../integrations/quote';
import { Quote } from '../src/types';

jest.mock('axios');
const mockedAxios = mocked(axios, true);

describe('Quote service', () => {

    it('Should return a random quote', async () => {
        const expected: Quote = {
            _id: 'tiEnxKJXPM',
            tags: [ 'wisdom' ],
            content: 'A good head and a good heart are always a formidable combination.',
            author: 'Nelson Mandela',
            authorSlug: 'nelson-mandela',
            length: 65,
            dateAdded: new Date('2020-12-08'),
            dateModified: new Date('2020-12-08')
        };

        mockedAxios.get.mockResolvedValue({data: expected});

        const res = await fetchRandomQuote();

        expect(res).toBe(expected);
    });

    it('Should throw an exception, if something goes wrong', async () => {
        mockedAxios.get.mockRejectedValue(new Error('api failed'));

        try {
            await fetchRandomQuote();
        } catch(err: any) {
            expect(err.message).toBe('api failed');
        }
    });
});