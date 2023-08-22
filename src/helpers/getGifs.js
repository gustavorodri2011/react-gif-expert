export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/stickers/search?api_key=2gFQbeLGMrcriYzNZ9wIfxUJ7Xa0POW7&q=${category}&limit=10`
    const response = await fetch(url)
    const { data } = await response.json()

    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }))
    return gifs
}