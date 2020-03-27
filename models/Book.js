const { model, Schema } = require('mongoose')

const BookSchema = new Schema({
  title: String,
  authors: [{
    type: 'String'
  }],
  description: String,
  imageLinks: Object,
  infoLink: String
})

module.exports = model('book', BookSchema)