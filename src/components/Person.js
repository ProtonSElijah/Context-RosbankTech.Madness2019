import React from 'react';

const Person = ({person, count, onTheme, pushDataRequest, years}) => {
    return (
        <div className="content-person">
            <img src={person.picURL ? person.picURL : ""}/>
            <div className="person-main-data-name">
                {person.name}
            </div>
            <div className="person-main-data-age">
                {`${person.age} ${years(person.age)}, ${person.city}`}
            </div>
            <div className="person-main-data-loyalty">
                {`Градус лояльности: ${(100 - person.toxicPercent).toString().slice(0,2)}%`}
            </div>
            <div className="person-main-data-count">
                {`Всего обращений: ${count}`}
            </div>
            <input placeholder="Введите тему" onChange={onTheme}></input>
            <button onClick={pushDataRequest}>Закончить диалог</button>
        </div>
    );
}

export default Person;
