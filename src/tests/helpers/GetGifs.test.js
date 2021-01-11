import { getGifs } from '../../helpers/getGifs';

describe('Tests on GetGifs helper', () => {
    test('should return 10 elements', async () => {
        const gifs = await getGifs('One Punch');
        expect(gifs.length).toBe(10);
    });

    test('should return an empty array when no category is received', async () => {
        const gifs = await getGifs('');
        expect(gifs).toEqual([]);
    });
});