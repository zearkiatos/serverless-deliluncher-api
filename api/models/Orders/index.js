const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Orders = mongoose.model('Order', new Schema({
    mealId: {
        type: Schema.Types.ObjectId,
        ref: 'Meal'
    },
    userId: String,
}));

module.exports = Orders;