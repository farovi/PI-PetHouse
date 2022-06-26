const express = require('express');
const router = express.Router();
const produtoHasFornecedorController = require('../controllers/produtoHasFornecedorController');

router.get('/produtoHasFornecedor', produtoHasFornecedorController.index);


module.exports = router;