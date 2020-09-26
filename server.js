const { response } = require("express")
const app = require("./src/app")
const musicasController = require("./src/controllers/musicasController")

const PORT = 8080

app.listen(PORT, function (request, response) {
    console.log("Listening on port " + PORT)
})

// musicas = require("./src/models/musicas.json")
// let listaNovaMusica = []

// for(let i = 0; i < musicas.length; i++) {
//     let musica  = musicas[i]
//     const novaMusica = {
//         id: musica.id,
//         nome: musica.name,
//         amostra: musica.preview_url,
//         imagem: musica.album.url,
//         artista: musica.artists.name
//     }
//     listaNovaMusica.push(novaMusica)
//     console.log(novaMusica)
// }

// const lista = musicas.map(musica => {
    
//     const novaMusica = {
//         id: musica.id,
//         nome: musica.name,
//         amostra: musica.preview_url,
//         nome_album: musica.album.name,
//         imagem: musica.album.url,
//         artista: musica.artists.name
//     }

//     return novaMusica
// })

// console.log(lista)
