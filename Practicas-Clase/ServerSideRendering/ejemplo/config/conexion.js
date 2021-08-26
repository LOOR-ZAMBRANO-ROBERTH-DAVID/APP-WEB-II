let mongoose = require('mongoose');

mongoose.connect('mongodb+srv://joancema:jacm1310@cluster0.x7met.mongodb.net/db_test?retryWrites=true&w=majority', { useMongoClient: true });

module.exports = mongoose;