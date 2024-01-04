const Ticket = require('../models/Ticket');
const { cities, generateRandomDate,generateTickets } = require('./helpers');

class TicketsController {

  async getAllTickets(req, res) {
    try {
      const tickets = await Ticket.find();
      return res.status(200).json(tickets);
    } catch (e) {
      console.log(e);
      res.status(400).json({ message: 'Ошибка при получении продуктов' });
    }
  }

  async createTickets(req, res) {
    try {
      await Ticket.deleteMany({});
      await generateTickets(100);
      return res.status(200).json();
    } catch (e) {
      console.log(e);
      res.status(400).json({ message: 'Ошибка базы данных' });
    }
  }
}

module.exports = new TicketsController();