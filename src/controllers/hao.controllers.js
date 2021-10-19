const httpStatus = require('http-status');
const pick = require('../utils/pick');
const catchAsync = require('../utils/catchAsync');
const { haoService } = require('../services');

const createHao = catchAsync(async (req, res) => {
  const hao = await haoService.createHao(req.body);
  res.status(httpStatus.CREATED).send(hao);
});

const getHaos = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['name', 'role']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await haoService.queryHaos(filter, options);
  res.send(result);
});

module.exports = {
  createHao,
  getHaos,

};
