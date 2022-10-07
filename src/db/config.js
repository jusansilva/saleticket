const mongoose = require(‘mongoose’);

mongoose.connect(`mongodb+srv://root:hu5b6Az1I2aXiTjzs@cluster0.wiafqyp.mongodb.net/?retryWrites=true&w=majority`);

mongoose.connection.on('connected', function () {
    console.log('Connected to Database '+'test');
  });

  mongoose.connection.on('error', (err) => {
    console.log('Database error '+err);
  });

module.exports = { mongoose }