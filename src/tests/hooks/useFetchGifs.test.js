import { useFetchGifs } from '../../hooks/useFetchGifs';
import { renderHook } from '@testing-library/react-hooks'

describe('Testing useFetchGifs hook', () => {
    test('should return initial state', async () => {
        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('Gantz'));
        const { data, loading } = result.current;

        await waitForNextUpdate();

        expect(data).toEqual([]);
        expect(loading).toBeTruthy();
    });

    test('should return an array of images an loading must be false', async () => {
        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('Gantz'));

        await waitForNextUpdate();

        const { data, loading } = result.current;

        expect(data.length).toEqual(10);
        expect(loading).toBeFalsy();
    });
});