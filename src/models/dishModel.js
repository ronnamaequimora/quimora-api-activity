const mongoose = require('mongoose');

const dishSchema = new mongoose.Schema({
  name: {
    type: String, // Must be text
    required: [true, 'Dish name is required'], // Custom error message
    unique: true, // No duplicate names
    trim: true, // Removes extra spaces
  },
  price: {
    type: Number, // Must be a number
    required: [true, 'Price is required'],
    min: [0, 'Price cannot be negative'], // Custom error message
    max: [1000, 'Price cannot exceed 1000'], // Custom error message
  },
  category: {
    type: String,
    required: [true, 'Category is required'],
    enum: {
      values: ['Starters', 'Main', 'Dessert', 'Drinks'],
      message: '{VALUE} is not a valid category'
    }
  },
  isVegetarian: {
    type: Boolean, // True or False
    default: false, // Default is NOT vegetarian
  },
  reviews: [
    {
      user: {
        type: String,
        required: true
      },
      rating: {
        type: Number,
        min: [1, 'Rating must be at least 1'],
        max: [5, 'Rating cannot be more than 5'],
        required: true
      },
      comment: String
    }
  ],
  chef: {
    type: mongoose.Schema.Types.ObjectId, // Reference to Chef model
    ref: 'Chef'
  }
}, { timestamps: true }); // Adds createdAt and updatedAt

module.exports = mongoose.model('Dish', dishSchema);
