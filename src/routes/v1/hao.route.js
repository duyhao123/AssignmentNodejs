const express = require('express');
const haoController = require('../../controllers/hao.controllers');

const router = express.Router();

router
  .route('/')
  .post(haoController.createHao)
  .get(haoController.getHaos);

module.exports = router;

