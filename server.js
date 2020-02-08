const express = require('express');
const cors = require('cors');
const app = express();
const server = app.listen(8000, () =>
    console.log("The Server is all fired up at port 8000")
);

const io = require("socket.io")(server);

io.on("connection", socket => {
    socket.on("message_from_client", newMessage => {
        console.log(newMessage);
        io.emit("send_new_message_to_all", newMessage);
    });
});
require('./server/config/mongoose.config');
app.use(cors());
app.use(express.urlencoded({ extended: true}));
require('./server/routes/item.routes')(app)