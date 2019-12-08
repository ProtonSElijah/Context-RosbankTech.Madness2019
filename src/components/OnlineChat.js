import React from 'react';
import Messages from './Messages';

const OnlineChat = ({messages, messageToClient, onChangeMessageToClient, pressEnter, submitMessageToClient}) => {
    return (
        <div className="content-chat">
           <div id="onlineChat" className="chat">
               <Messages messages={messages}/>
           </div>
            <div className="chat-message">
                <form>
                    <textarea name="message" value={messageToClient} placeholder="Сообщение клиенту" wrap="soft" onChange={onChangeMessageToClient} onKeyPress={pressEnter}></textarea>
                    <button onClick={submitMessageToClient}><img src="https://avatars.mds.yandex.net/get-pdb/1621302/85d1356c-482d-4d94-9f5d-67413ff45c3c/s1200" className="submitButton"/></button>
                </form>
            </div>
        </div>
    );
}

export default OnlineChat;
