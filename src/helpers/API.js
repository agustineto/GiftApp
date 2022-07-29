

export const getGifts = async( category ) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=cefHPmoluGyWISDF0H1PM7GJidJ150M5&q=${category}&limit=5`;
    const solicitud = await fetch(url);
    const respuesta = await solicitud.json()

    const gifs = respuesta.data.map( item => ({
        id: item.id,
        titulo: item.title,
        url: item.images.downsized_medium.url
        
    }))
    return gifs
}


