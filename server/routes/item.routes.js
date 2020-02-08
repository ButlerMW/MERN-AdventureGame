const ItemController = require("../controllers/item.controller");
module.exports = function(app){
    app.post('/api/items/new', ItemController.createItem);
    app.get('/api/items/:id', ItemController.getItem);
    app.get('/api/items', ItemController.getAllItem);
    app.delete('/api/items/delete/:id', ItemController.deleteItem);
    app.put('/api/items/edit/:id', ItemController.updateItem);
}