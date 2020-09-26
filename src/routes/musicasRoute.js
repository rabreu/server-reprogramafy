const express = require("express")
const router = express.Router()
const controller = require("../controllers/musicasController")

router.get("/musicas", controller.getAll)
router.get("/musicas/:id", controller.getById)
router.get("/artistas", controller.getArtistas)
router.get("/artistas/:artista", controller.getByArtista)

module.exports = router