const mongoose = require("mongoose");

mongoose.connect("localhost:27017/backery", {
  useFindAndModify: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useNewUrlParser: true,
});

const db = mongoose.connection

db.once('open', ()=>{
    console.log('connection successful');
})

db.on('error', ()=>{
    console.log('connection failed');
})

module.exports = db