import React from 'react';

const OfflineChat = ({back, message}) => {
    return (
        <div className="content-chat hidden" id="offline_chat">
           <div className="chat">
                <div className="message messageToOperator">
                   <p>{message}</p>
                   <p className="messageTimeToOperator">вчера</p>
               </div>
           </div>
            <div className="offline-chat-message" onClick={back}>
                Назад
            </div>
        </div>
    );
}

export default OfflineChat;
