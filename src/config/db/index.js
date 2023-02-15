const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

mongoose.set('strictQuery', false);

async function connect() {
    try {
        await mongoose.connect("mongodb+srv://thaihaisportstore:sportstorenodejs@cluster0.5dzoxob.mongodb.net/chatapp?retryWrites=true&w=majority");
        console.log('Connect successfully...')
    } catch (error) {
        console.log('Connect failed...')
    }
}

module.exports = { connect }