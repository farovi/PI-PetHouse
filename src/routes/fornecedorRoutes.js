const express = require('express');
const router = express.Router();
const fornecedorController = require('../controllers/fornecedorController');

router.get('/fornecedor', fornecedorController.index);



module.exports = router;