export const getGifs = async (category) => {
    const limit = 10;
    const apiKey = 'a6gn2SGDDwcxAX3N4XEWhwClj4Vx6s9h';
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=${limit}&api_key=${apiKey}`;

    const response = await fetch(url);
    const { data } = await response.json();

    const gifs = data.map(img => (
        {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    ));

    return gifs;
}