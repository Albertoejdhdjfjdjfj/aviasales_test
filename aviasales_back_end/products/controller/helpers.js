const Ticket = require('../models/Ticket');

const cities = [
  "Москва",
  "Санкт-Петербург",
  "Новосибирск",
  "Екатеринбург",
  "Нижний Новгород",
  "Казань",
  "Челябинск",
  "Омск",
  "Самара",
  "Ростов-на-Дону",
  "Уфа",
  "Красноярск",
  "Пермь",
  "Волгоград",
  "Краснодар",
  "Саратов",
  "Тюмень",
  "Тольятти",
  "Ижевск",
  "Барнаул"
];

function generateRandomDate() {
  const today = new Date();
  const futureDate = new Date();
  futureDate.setDate(today.getDate() + Math.floor(Math.random() * 8));
  return futureDate.toISOString().split('T')[0];
}

async function generateTickets(numTickets) {
  for (let i = 0; i < numTickets; i++) {
    let ticket = new Ticket({
      price: Math.floor(Math.random() * 5000) + 500,
      carrier: (Math.floor(Math.random() * 100)).toString(),
      segments: {
        origin: cities[Math.floor(Math.random() * cities.length)],
        destination: cities[Math.floor(Math.random() * cities.length)],
        date: generateRandomDate(),
        stops: Math.floor(Math.random() * 3 + 1),
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