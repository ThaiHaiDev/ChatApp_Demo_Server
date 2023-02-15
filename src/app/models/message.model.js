const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const messageSchema = new Schema({
    id: { type : Number },
    idUserSend: { type : Number},
    idUserReceive: { type : Number},
    content: { type: String},
    timeSend: { type: String },
  }, {
    timestamps: true
  });

module.exports = mongoose.model('mess', messageSchema);