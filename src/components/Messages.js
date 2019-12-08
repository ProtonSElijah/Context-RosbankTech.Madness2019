import React from 'react';

const Messages = ({messages}) => {
    return messages.map(
        message => {
            if (message.who == "operator") return (
               <div className="message messageToClient">
                   <p>{message.content}</p>
                   <p className="messageTimeToClient">{message.time}</p>
               </div>);
            if (message.who == "client") return (
               <div className="message messageToOperator">
                   <p>{message.content}</p>
                   <p className="messageTimeToOperator">{"" + message.time}</p>
               </div>);
    });
}

export default Messages;
