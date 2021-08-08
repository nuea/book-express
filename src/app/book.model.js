const mongoose = require('mongoose');

MONGO_URL = process.env.MONGO_URL || "localhost"
MONGO_PORT = process.env.MONGO_PORT || "27017"
const url = `mongodb://${MONGO_URL}:${MONGO_PORT}/store`
mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('connection success')
});

const BookSchema = new mongoose.Schema({
    title : { type: String, required: true },
    description : String,
    image : String,
    price : Number,
  },{ timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }, versionKey : false });

const Book = mongoose.model('Book', BookSchema)

module.exports = Book