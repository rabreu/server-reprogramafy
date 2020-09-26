const { response } = require("express")
const musicas = require("../models/musicas.json")

const novaListaDeMusicas = musicas.map(musica => {
    const novaMusica = {
        id: musica.id,
        nome: musica.name,
        amostra: musica.preview_url,
        nome_album: musica.album.name,
        imagem: musica.album.url,
        artista: musica.artists.name
    }
    return novaMusica
})

const listaArtistas = musicas.map(musica => {
    return {
        id: musica.artists.id,
        nome: musica.artists.name
    }
})

const getAll = (request, response) => {
    console.log(request.url)
    return response.status(200).send(novaListaDeMusicas)
}

const getById = (request, response) => {
    console.log(request.url)
    const id = request.params.id

    const musicaExists = novaListaDeMusicas.find(musica => musica.id == id)
    if(!musicaExists)
        return response.status(404).send({"message": "Not found."})
    return response.status(200).send(musicaExists)
}

const getArtistas = (request, response) => {
    const listaSemRepetir = []

    listaArtistas.forEach(artista => {
        const encontrei = listaSemRepetir.find(item => item.id === artista.id)
        if(!encontrei) {
            listaSemRepetir.push(artista)
        }
    })
    response.status(200).send(listaSemRepetir)
}

const getByArtista = (request, response) => {
    console.log(request.url)
    const id = request.params.artista
    const artistaExists = listaArtistas.find(artista => artista.id == id)
    if(!artistaExists)
        return response.status(404).send({"message": "Not found."})

    const musicaExists = novaListaDeMusicas.filter(musica => musica.artista == artistaExists.nome)
    if(!musicaExists)
        return response.status(404).send({"message": "Not found."})
    return response.status(200).send(musicaExists)
}

module.exports = {
    getAll,
    getById,
    getArtistas,
    getByArtista
}