const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/itemdb", {
    useNewPerser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Estiblished a connection to the database"))
    .catch(err => console.log("Something went wring when connecting to the database", err));