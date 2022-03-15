import axios from 'axios';
import { mocked } from 'ts-jest/utils';

import { getRandomQuote } from '../src/services/quote.service';
import { Quote } from '../src/types';

jest.mock('axios');
const mockedAxios = mocked(axios, true);

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

    const res = await getRandomQuote();

    expect(res).toBe(expected);
});