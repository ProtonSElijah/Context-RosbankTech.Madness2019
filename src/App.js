import React, {useEffect, useState} from 'react';
import './App.css';

import Person from './components/Person.js';
import OnlineChat from './components/OnlineChat.js';
import PersonHistory from './components/PersonHistory.js';
import OfflineChat from './components/OfflineChat.js';

const App = () => {
    const [messageToClient, setMessageToClient] = useState("");
    const [messages, setMessages] = useState([]);
    const [person, setPerson] = useState({});
    const [personHistory, setPersonHistory] = useState(null);
    const [historyPanel, setHistoryPanel] = useState(null);
    const [offlineChatPanel, setOfflineChatPanel] = useState(null);
    const [offlineMessage, setOfflineMessage] = useState(null);

    const [clientMessages, setClientMessages] = useState([]);
    const [themeMessages, setThemeMessages] = useState("");


    const LOCAL_SERVER = "192.168.43.76";
    const USER_NAME = "Пушистик Котофей Котофеевич";

    useEffect(() => {
        getHistory();
        getPerson();
        Alldoing();
        setHistoryPanel(document.getElementById("history"));
        setOfflineChatPanel(document.getElementById("offline_chat"));
    }, []);

    const getPerson = () => {
        fetch(`http://${LOCAL_SERVER}:8080/clients/${USER_NAME}`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
            },
            })
        .then(response => response.json())
        .then(data => setPerson(data));
    };

    const getHistory = () => {
        fetch(`http://${LOCAL_SERVER}:8080/tickets/byName/${USER_NAME}`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
            },
            })
        .then(response => response.json())
        .then(data => setPersonHistory(data));
    };

    const Alldoing = () => {
        fetch(`http://${LOCAL_SERVER}:8080/chatResponse`, {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                },
                })
            .then(response => response.json())
            .then(data => {
            setClientMessages(clientMessages.concat(data.entry));
            console.log(messages);
            setMessages(messages.concat({
                who: "client",
                content: data.entry,
              /*  time: `${(new Date()).getHours()}:${(new Date()).getMinutes()}  ${Math.round(((1-data.emotion)*100).toString(), 2)}ГЛ`}));*/
                time: `${Math.round(((1-data.emotion)*100).toString(), 2)}ГЛ`}));
        });
    };

    const onChangeMessageToClient = e => {
        if (e.currentTarget.value == "\n") e.currentTarget.value = e.currentTarget.value.slice(0, e.currentTarget.value.length - 1);
        setMessageToClient(e.currentTarget.value);
    };

    const submitMessageToClient = e => {
        if (messageToClient != "") {
            messages.push({
                who: "operator",
                content: messageToClient,
                time: `${(new Date()).getHours()}:${(new Date()).getMinutes()}`});
            Alldoing();
            setMessageToClient("");
            document.getElementById("onlineChat").scrollTop = document.getElementById("onlineChat").scrollHeight;
        }
        e.preventDefault();
    };

    const pressEnter = e => {
        if (e.key == "Enter" && messageToClient !== "") {
            messages.push({
                who: "operator",
                content: messageToClient,
                time: `${(new Date()).getHours()}:${(new Date()).getMinutes()}`});
            Alldoing();
            setMessageToClient("");
            document.getElementById("onlineChat").scrollTop = document.getElementById("onlineChat").scrollHeight;
        }
    };

    const change = e => {
        if (e.currentTarget.dataset) setOfflineMessage(e.currentTarget.dataset.message);
        historyPanel.classList.toggle("hidden");
        offlineChatPanel.classList.toggle("hidden");
        e.preventDefault();
    };

    const onTheme = e => {
        setThemeMessages(e.currentTarget.value);
    };

    const say_years_russian = (count) => {
        count %= 100;
        if (11 <= count && count <= 19) {
            return "лет";
        }
        count %= 10;
        if (count == 0) {
            return "лет";
        }
        if (count == 1) {
            return "год";
        }
        if (count < 5) {
            return "года";
        }
        return "лет";
    };

    const pushDataRequest = e => {
        fetch(`http://${LOCAL_SERVER}:8080/tickets/newEntry/${USER_NAME}`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                    body: JSON.stringify({
                        chat: clientMessages.toString(),
                         date: ("08.12.2019"),
                         theme: themeMessages})
                });
    };

  return (
    <div className="App">
        <div className="App-header"></div>

        <div className="App-content">
            <div className="content">
                { personHistory &&
                <Person person={person} count={personHistory.length} onTheme={onTheme} pushDataRequest={pushDataRequest} years={say_years_russian}/>}
                <OnlineChat
                    messages={messages}
                    messageToClient={messageToClient}
                    onChangeMessageToClient={onChangeMessageToClient}
                    pressEnter={pressEnter}
                    submitMessageToClient={submitMessageToClient}
                    onHistory={getHistory()}/>
                <PersonHistory personHistory={personHistory} choice={change}/>
                <OfflineChat back={change} message={offlineMessage}/>
            </div>
        </div>

        <div className="App-bottom"></div>
    </div>
  );
}

export default App;
