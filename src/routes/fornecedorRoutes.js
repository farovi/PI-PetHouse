const express = require('express');
const router = express.Router();
const fornecedorController = require('../controllers/fornecedorController');

router.get('/fornecedor', fornecedorController.list);
router.get('/fornecedor/detail/:id', fornecedorController.detail);


module.exports = router;