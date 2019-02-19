const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

const workerSchema = new Schema({
  firstName: {
    type: String,
    trim: true,
    required: 'Please Supply first name'
  },
  lastName: {
    type: String,
    trim: true,
    required: 'Please Supply last name'
  },
  gender: {
    type: String,
    required: 'Please Supply gender'
  },
  contactInformation: {
    type: String,
  },
  salary: {
    type: String,
    required: 'Please Supply salary'
  },
  position: {
    type: String,
    required: 'Please Supply position'
  },
  updated_at: Date,
  created_at: {
    type: Date,
    default: Date.now
  },
});

workerSchema.index({
  firstName: 'text',
  lastName: 'text',
  gender: 'text',
  contactInformation: 'text',
  salary: 'text',
  positionposition: 'text',
});

module.exports = mongoose.model('Worker', workerSchema);
