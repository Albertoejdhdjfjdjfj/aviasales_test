const { Schema, model }=require('mongoose')

const Ticket = new Schema({
  price: {
    type: Number,
    required: true
  },
  carrier: {
    type: String,
    required: true
  },
  segments: 
    {
      origin: String,
      destination: String,
      date: String,
      stops: [String],
      duration: Number
    }
  
});

module.exports=model('Ticket', Ticket)