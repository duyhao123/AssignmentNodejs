const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');


const haoSchema = mongoose.Schema(
  {
    fullname: {
      type: String,
      required: true,
      trim: true,
    },
    address: {
      type: String,
      trim: true,
    },
    // timestamps: true,
  }
);

// add plugin that converts mongoose to json
haoSchema.plugin(toJSON);
haoSchema.plugin(paginate);

/**
 

/**
 * @typedef Hao
 */
const Hao = mongoose.model('Hao', haoSchema);

module.exports = Hao;
