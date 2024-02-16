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
  segment: 
    {
      from: String,
      to: String,
      date: Date,
      stops: [String],
      duration: Number
    }
  
});

module.exports=model('Ticket', Ticket)