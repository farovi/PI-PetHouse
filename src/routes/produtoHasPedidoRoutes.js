const express = require('express');
const router = express.Router();
const produtoHasPedidoController = require('../controllers/produtoHasPedidoController');

router.get('/produtoHasPedido', produtoHasPedidoController.index);


module.exports = router;