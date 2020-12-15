const { Schema, model } = require('mongoose');
const newVip = Schema({
    guildID: {
      type: String,
      required: true
    },
    userID: {
      type: String,
      required: false,
    },
    time: {
      type: Number,
    },
  });
  

module.exports = model('Vip', newVip);