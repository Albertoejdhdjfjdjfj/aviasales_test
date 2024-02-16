const Ticket = require('../models/Ticket');

const cities = [
  "AST",
  "ARK",
  "AST",
  "BEL",
  "BRY",
  "VLA",
  "VGG",
  "VLG",
  "VOR",
  "IVA",
  "IRK",
  "KAG",
  "KLU",
  "KEM",
  "KIR",
  "KOS",
  "KUR",
  "LEN",
  "LIP",
  "MOS",
  "OMS",
  "SAM"
];

function generateRandomDate() {
  const today = new Date();
  const futureDate = new Date();
  futureDate.setDate(today.getDate() + Math.floor(Math.random() * 8));
  return futureDate;
}

async function generateTickets(numTickets) {
  for (let i = 0; i < numTickets; i++) {
    let ticket = new Ticket({
      price: Math.floor(Math.random() * 5000) + 500,
      carrier: (Math.floor(Math.random() * 100)).toString(),
      segment: {
        from: cities[Math.floor(Math.random() * cities.length)],
        to: cities[Math.floor(Math.random() * cities.length)],
        date: generateRandomDate(),
        stops: cities.slice(Math.floor(Math.random() * 10),Math.floor(Math.random() * 10)),
        duration: Math.floor(Math.random() * 600) + 60
      }
    });

    await ticket.save();
  }
}

module.exports = {
  cities,
  generateRandomDate,
  generateTickets
};