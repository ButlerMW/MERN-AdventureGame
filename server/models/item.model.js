const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
    itemNumber: { type: Number },
    itemName: { type: String },
    img: {type: String }
}, { timestamps: true});
module.exports.Item = mongoose.model('Item', ItemSchema);