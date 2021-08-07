const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017/store'
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