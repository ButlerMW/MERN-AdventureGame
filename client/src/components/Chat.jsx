import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import { set } from 'mongoose';

export default (props) => {
    const [ socket, setSocket ] = useState(props.socket);
    const [ messages, setMessages] = useState([]);
    const [ newMessage, setNewMessage ] = useState("");

    const onSubmitHandler = e => {
        e.preventDefault();
        console.log(newMessage)
        socket.emit("message_from_client", newMessage)
    }

    useEffect(() => {
        console.log(newMessage)
        socket.on("send_new_message_to_all", newMessage => 
        setMessages(prevMessage => {
            return [newMessage, ...prevMessage];
            })
        )
    }, []);

    return (
        <div>
            <form onSubmit={onSubmitHandler}>
                <input onChange={(e) => setNewMessage(e.target.value)} type="text" />
                <button>Send</button>
            </form>
            {messages.map((msg, idx) => <p key={idx}>{msg}</p>)}
        </div>
    )
}