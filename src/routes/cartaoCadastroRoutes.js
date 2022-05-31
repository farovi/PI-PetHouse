const express = require('express');
const router = express.Router();
const cartaoCadastroController = require('../controllers/cartaoCadastroController');

router.get('/cartaoCadastro', cartaoCadastroController.list);
router.get('/cartaoCadastro/detail/:id', cartaoCadastroController.detail);


module.exports = router;