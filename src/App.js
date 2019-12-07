import React, {useEffect, useState} from 'react';
import './App.css';

import Person from './components/Person.js';
import OnlineChat from './components/OnlineChat.js';

const App = () => {
    const [messageToClient, setMessageToClient] = useState("");
    const [messages, setMessages] = useState([]);
    const [person, setPerson] = useState({});

    const LOCAL_SERVER = "192.168.43.76";

    useEffect(() => {
        fetch(`http://${LOCAL_SERVER}:8080/clients/Восьмибитный Дед`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
            },
            })
        .then(response => response.json())
        .then(data => setPerson(data));

        fetch(`http://${LOCAL_SERVER}:8080/byName/Восьмибитный Дед`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
            },
            })
        .then(response => response.json())
        .then(data => console.log(data));
    }, []);

    const onChangeMessageToClient = e => {
        if (e.currentTarget.value == "\n") e.currentTarget.value = e.currentTarget.value.slice(0, e.currentTarget.value.length - 1);
        setMessageToClient(e.currentTarget.value);
    };

    const submitMessageToClient = e => {
        if (messageToClient != "") {
            setMessageToClient("");
            setMessages(messages.concat({
                content: messageToClient,
                time: `${(new Date()).getHours()}:${(new Date()).getMinutes()}`}));
            document.getElementById("onlineChat").scrollTop = document.getElementById("onlineChat").scrollHeight;
        }
        e.preventDefault();
    };

    const pressEnter = e => {
        if (e.key == "Enter" && messageToClient !== "") {
            setMessageToClient("");
            setMessages(messages.concat({
                content: messageToClient,
                time: `${(new Date()).getHours()}:${(new Date()).getMinutes()}`}));
            document.getElementById("onlineChat").scrollTop = document.getElementById("onlineChat").scrollHeight;
        }
    };



  return (
    <div className="App">
        <div className="App-header">

        </div>
        <div className="App-content">
            <div className="content">
                <Person person={person} />
                <OnlineChat
                    messages={messages}
                    messageToClient={messageToClient}
                    onChangeMessageToClient={onChangeMessageToClient}
                    pressEnter={pressEnter}
                    submitMessageToClient={submitMessageToClient}/>


                <div className="content-history">
                    <div className="history-heder">{"ИСТОРИЯ ОБРАЩЕНИЙ"}</div>

                    <div className="history-list">
                       <div className="table-header">
                           <table cellPadding="0" cellSpacing="0" border="0">
                               <thead>
                                    <tr>
                                        <th className="history-themes" width="20%">Дата</th>
                                        <th className="history-themes" width="70%">Тема</th>
                                        <th className="history-themes" width="10%">ГЛ</th>
                                    </tr>
                                </thead>
                           </table>
                       </div>
                       <div className="table-content">
                           <table cellPadding="0" cellSpacing="0" border="0">
                               <tbody>
                                    <tr className="history-element">
                                        <td width="20%">{"03.11.2019"}</td>
                                        <td className="history-element-theme" width="70%">{"Авторизация в мобильном приложении"}</td>
                                        <td width="10%">{"73"}</td>
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
