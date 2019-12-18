const mongoose = require('mongoose');

const QuoteSchema = new mongoose.Schema({
    date: String,
    content: Array
})

const LocationSchema = new mongoose.Schema({
    Time:String,
    Name:String,
    Location:String,
    Address:String,
    City:String,
    __v:String,
    Latitude:String,
    Longitude:String,
    "Accuracy Score":String,
    "Accuracy Type":String,
    Number:String,
    Street:String,
    State:String,
    County:String,
    Zip:String,
    Country:String,
    Source:String
})
const TreatmentSchema = new mongoose.Schema({
    Name:String,
    Address:String,
    City:String,
    __v:String,
    Latitude:String,
    Longitude:String,
    "Accuracy Score":String,
    "Accuracy Type":String,
    Number:String,
    Street:String,
    State:String,
    County:String,
    Zip:String,
    Country:String,
    Source:String

})
Treatment = mongoose.model('Treatment', TreatmentSchema);
Location = mongoose.model('Location', LocationSchema);
Quote = mongoose.model('Quote', QuoteSchema);







