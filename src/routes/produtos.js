const express = require('express');
const router = express.Router();
const produtosController = require('../controllers/produtosController');

router.get('/produtos', produtosController.list);
router.get('/produtos/detail/:id', produtosController.detail);


module.exports = router;