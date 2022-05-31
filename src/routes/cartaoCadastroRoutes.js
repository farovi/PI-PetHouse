const express = require('express');
const router = express.Router();
const cartaoCadastroController = require('../controllers/cartaoCadastradosController');

router.get('/cartaoCadastro', cartaoCadastroController.index);


module.exports = router;