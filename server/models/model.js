const mongoose = require('mongoose');

const QuoteSchema = new mongoose.Schema({
    date: String,
    content: Array
})

const LocationSchema = new mongoose.Schema({
    Time: String,
    Name: String,
    Location: String,
    Address: String,
    City: String
})
Location = mongoose.model('Location', LocationSchema);
Quote = mongoose.model('Quote', QuoteSchema);

