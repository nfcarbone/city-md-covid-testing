const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Location = new Schema({
  name: String,
  phone: String,
  address: {
    street: String,
    city: String,
    state: String,
    zip: Number,
  },
  available: [Date],
  appointments: [
    {
      date: Date,
      type: String,
      id: String,
    },
  ],
});

module.exports = mongoose.model('location', Location);