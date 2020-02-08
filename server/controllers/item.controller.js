const { Item } = require('../models/item.model');

module.exports.createItem = (req, res) => {
    const { itemNumber, itemName, img } =  req.body;
    Item.create({
        itemNumber,
        itemName,
        img
    })
        .then(item => res.json(item))
        .catch(err => res.json(err));
}

module.exports.getItem = (req, res) => {
    Item.findOne({_id: req.params.id})
        .then(item => res.json(item))
        .catch(err => res.json(err));
}

module.exports.getAllItem = (req, res) => {
    Item.find({})
        .then(item => res.json(item))
        .catch(err => res.json(err));
}

module.exports.updateItem = (req, res) => {
    Item.findOneAndUpdate({_id: req.params.id}, req.body, {new:true})
        .then(updatedItem => res.json(updatedItem))
        .catch(err => res.json(err));
}

module.exports.deleteItem = (req, res) => {
    Item.deleteOne({_id: req.params.id})
        .then(deletedItem => res.json(deletedItem))
        .catch(err => res.json(err));
}