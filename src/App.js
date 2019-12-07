import React, {useEffect, useState} from 'react';
import './App.css';

import Messages from './components/Messages.js';
import Person from './components/Person.js';

const AppealHistory = () => {

}

let a = {
            "photo": "https://sun9-12.userapi.com/c856520/v856520160/7a4e3/waMKMMw0lOc.jpg",
            "name": "Валерчик Валерон Валерин",
            "age": 34,
            "city": "Санкт-Петербург",
            "loyalty": 34,
            "appealHistory": [
                {"data": "03.11.2019","theme": "Верификация документа", "loyalty": 74},
                {"data": "03.11.2019","theme": "Верификация документа", "loyalty": 74},
                {"data": "03.11.2019","theme": "Верификация документа", "loyalty": 74}
            ]
        };

const App = () => {
    const [messageToClient, setMessageToClient] = useState("");
    const [messages, setMessages] = useState([]);
    const [person, setPerson] = useState({});

    useEffect(() => {

        setPerson(a);
    }, []);

    const onChangeMessageToClient = e => {
        setMessageToClient(e.currentTarget.value);
    };

    const submitMessageToClient = e => {
        if (messageToClient != "") {
            setMessageToClient("");
            setMessages(messages.concat({
                content: messageToClient,
                time: `${(new Date()).getHours()}:${(new Date()).getMinutes()}`}));
        }
        e.preventDefault();
    };

    const pressEnter = e => {
        if (e.key == "Enter" && messageToClient != "") {
            setMessageToClient("");
            setMessages(messages.concat({
                content: messageToClient,
                time: `${(new Date()).getHours()}:${(new Date()).getMinutes()}`}));
        }
    };



  return (
    <div className="App">
        <div className="App-header">

        </div>
        <div className="App-content">
            <div className="content">

                <Person person={person} />
                <div className="content-chat">
                    <div className="chat-block">
                       <div className="chat">
                           <div className="message messageToOperator">
                               <p>{"Здравствуйте, у меня проблема, памагити пожалуйста"}</p>
                               <p className="messageTimeToOperator">вчера</p>
                           </div>
                           <Messages messages={messages}/>
                       </div>
                        <div className="chat-message">
                            <form>
                                <textarea name="message" value={messageToClient} placeholder="Сообщение клиенту" wrap="soft" onChange={onChangeMessageToClient} onKeyPress={pressEnter}></textarea>
                                <button onClick={submitMessageToClient}><img src="https://avatars.mds.yandex.net/get-pdb/1621302/85d1356c-482d-4d94-9f5d-67413ff45c3c/s1200" style={{height: "6vmin"}}/></button>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="content-history">
                    <div className="history-heder">{"ИСТОРИЯ ОБРАЩЕНИЙ"}</div>

                    <div className="history-list">
                       <div className="table-header">
                           <table cellPadding="0" cellSpacing="0" border="1">
                               <thead>
                                    <tr>
                                        <th className="history-themes" width="20%">Дата</th>
                                        <th className="history-themes" width="50%">Тема</th>
                                        <th className="history-themes" width="30%">Градус лояльности</th>
                                    </tr>
                                </thead>
                           </table>
                       </div>
                       <div className="table-content">
                           <table cellPadding="0" cellSpacing="0" border="1">
                               <tbody>
                                    <tr className="history-element">
                                        <td width="20%">{"03.11.2019"}</td>
                                        <td className="history-element-theme" width="50%">{"Авторизация в мобильном приложении"}</td>
                                        <td width="30%">{"73"}</td>
                                    </tr>
                                    <tr className="history-element">
                                        <td>{"08.11.2019"}</td>
                                        <td className="history-element-theme">{"Верификация документа"}</td>
                                        <td>{"11"}</td>
                                    </tr>
                                    <tr className="history-element">
                                        <td>{"10.11.2019"}</td>
                                        <td className="history-element-theme">{"Перевод между счетами внутри банка"}</td>
                                        <td>{"18"}</td>
                                    </tr>
                                    <tr className="history-element">
                                        <td>{"03.11.2019"}</td>
                                        <td className="history-element-theme">{"Авторизация в мобильном приложении"}</td>
                                        <td>{"73"}</td>
                                    </tr>
                                    <tr className="history-element">
                                        <td>{"08.11.2019"}</td>
                                        <td className="history-element-theme">{"Верификация документа"}</td>
                                        <td>{"11"}</td>
                                    </tr>
                                    <tr className="history-element">
                                        <td>{"10.11.2019"}</td>
                                        <td className="history-element-theme">{"Перевод между счетами внутри банка"}</td>
                                        <td>{"18"}</td>
                                    </tr>
                                    <tr className="history-element">
                                        <td>{"03.11.2019"}</td>
                                        <td className="history-element-theme">{"Авторизация в мобильном приложении"}</td>
                                        <td>{"73"}</td>
                                    </tr>
                                    <tr className="history-element">
                                        <td>{"08.11.2019"}</td>
                                        <td className="history-element-theme">{"Верификация документа"}</td>
                                        <td>{"11"}</td>
                                    </tr>
                                    <tr className="history-element">
                                        <td>{"10.11.2019"}</td>
                                        <td className="history-element-theme">{"Перевод между счетами внутри банка"}</td>
                                        <td>{"18"}</td>
                                    </tr>
                                    <tr className="history-element">
                                        <td>{"03.11.2019"}</td>
                                        <td className="history-element-theme">{"Авторизация в мобильном приложении"}</td>
                                        <td>{"73"}</td>
                                    </tr>
                                    <tr className="history-element">
                                        <td>{"08.11.2019"}</td>
                                        <td className="history-element-theme">{"Верификация документа"}</td>
                                        <td>{"11"}</td>
                                    </tr>
                                    <tr className="history-element">
                                        <td>{"10.11.2019"}</td>
                                        <td className="history-element-theme">{"Перевод между счетами внутри банка"}</td>
                                        <td>{"18"}</td>
                                    </tr>
                                    <tr className="history-element">
                                        <td>{"03.11.2019"}</td>
                                        <td className="history-element-theme">{"Авторизация в мобильном приложении"}</td>
                                        <td>{"73"}</td>
                                    </tr>
                                    <tr className="history-element">
                                        <td>{"08.11.2019"}</td>
                                        <td className="history-element-theme">{"Верификация документа"}</td>
                                        <td>{"11"}</td>
                                    </tr>
                                    <tr className="history-element">
                                        <td>{"10.11.2019"}</td>
                                        <td className="history-element-theme">{"Перевод между счетами внутри банка"}</td>
                                        <td>{"18"}</td>
                                    </tr>
                                    <tr className="history-element">
                                        <td>{"03.11.2019"}</td>
                                        <td className="history-element-theme">{"Авторизация в мобильном приложении"}</td>
                                        <td>{"73"}</td>
                                    </tr>
                                    <tr className="history-element">
                                        <td>{"08.11.2019"}</td>
                                        <td className="history-element-theme">{"Верификация документа"}</td>
                                        <td>{"11"}</td>
                                    </tr>
                                    <tr className="history-element">
                                        <td>{"10.11.2019"}</td>
                                        <td className="history-element-theme">{"Перевод между счетами внутри банка"}</td>
                                        <td>{"18"}</td>
                                    </tr>
                                    <tr className="history-element">
                                        <td>{"03.11.2019"}</td>
                                        <td className="history-element-theme">{"Авторизация в мобильном приложении"}</td>
                                        <td>{"73"}</td>
                                    </tr>
                                    <tr className="history-element">
                                        <td>{"08.11.2019"}</td>
                                        <td className="history-element-theme">{"Верификация документа"}</td>
                                        <td>{"11"}</td>
                                    </tr>
                                    <tr className="history-element">
                                        <td>{"10.11.2019"}</td>
                                        <td className="history-element-theme">{"Перевод между счетами внутри банка"}</td>
                                        <td>{"18"}</td>
                                    </tr>
                                    <tr className="history-element">
                                        <td>{"03.11.2019"}</td>
                                        <td className="history-element-theme">{"Авторизация в мобильном приложении"}</td>
                                        <td>{"73"}</td>
                                    </tr>
                                    <tr className="history-element">
                                        <td>{"08.11.2019"}</td>
                                        <td className="history-element-theme">{"Верификация документа"}</td>
                                        <td>{"11"}</td>
                                    </tr>
                                    <tr className="history-element">
                                        <td>{"10.11.2019"}</td>
                                        <td className="history-element-theme">{"Перевод между счетами внутри банка"}</td>
                                        <td>{"18"}</td>
                                    </tr>
                               </tbody>
                           </table>
                       </div>
                    </div>

                </div>
            </div>
        </div>
        <div className="App-bottom">

        </div>
    </div>
  );
}

export default App;
