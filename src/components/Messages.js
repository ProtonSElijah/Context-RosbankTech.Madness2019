import React from 'react';

const Messages = ({messages}) => {
    return messages.map(
        message =>
           <div className="message messageToClient">
               <p>{message.content}</p>
               <p className="messageTimeToClient">{message.time}</p>
           </div>
    );
}

export default Messages;
