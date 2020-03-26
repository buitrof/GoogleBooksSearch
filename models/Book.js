const { model, Schema } = require('mongoose')

const BookSchema = new Schema({
  title: String,
  author: String,
  year: Number
})

module.exports = model('book', BookSchema)