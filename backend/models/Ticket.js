const mongoose = require('mongoose');
const ticketSchema = new mongoose.Schema({
  name: String,
  email: String,
  priority: String,
  service: String,
  query: String,
});
const Ticket = mongoose.model('Ticket', ticketSchema);
module.exports = Ticket;
