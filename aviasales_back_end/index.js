const express=require('express')
const mongoose=require('mongoose')
const ticketsRouter=require('./products/router/TicketsRouter')
const PORT=process.env.PORT || 5000;

const app=express()
app.use(function(req, res, next) {
     res.header("Access-Control-Allow-Origin", "*");
     res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
     next();
});
app.use(express.json())
app.use("/tickets",ticketsRouter)

const start=async()=>{
     try{
          mongoose.connect('mongodb+srv://albert:albert26102003@cluster1.ecre7jl.mongodb.net/?retryWrites=true&w=majority').then(() => {
          console.log('Connected to MongoDB');

}).catch((err) => {
  console.error('Error connecting to MongoDB', err);
});
          app.listen(PORT,()=>console.log(`server started on port ${PORT}`));
          
     }
     catch(e){  
          console.log(e)    
     }

}

start()


