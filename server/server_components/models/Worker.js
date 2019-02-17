const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

const workerSchema = new Schema({
  firstName: {
    type: String,
    trim: true,
    required: 'Please Supply an first name'
  },
  lastName: {
    type: String,
    trim: true,
    required: 'Please Supply an last name'
  },
  updated_at: Date,
  created_at: {
    type: Date,
    default: Date.now
  },
});

module.exports = mongoose.model('Worker', workerSchema);
