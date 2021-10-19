
const { Hao } = require('../models');


/**
 * Create a hao
 * @param {Object} haoBody
 * @returns {Promise<Hao>}
 */
const createHao = async (haoBody) => {
 
  return Hao.create(haoBody);
};

/**
 * Query for haos
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const queryHaos = async (filter, options) => {
  const haos = await Hao.paginate(filter, options);
  return haos;
};


module.exports = {
  createHao,
  queryHaos,
};
