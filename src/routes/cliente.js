const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/clienteController');

router.get('/cliente', clienteController.list);
router.get('/cliente/detail/:id', clienteController.detail);


module.exports = router;