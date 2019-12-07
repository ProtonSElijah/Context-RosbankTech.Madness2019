import React from 'react';

const Person = ({person}) => {
    return (
        <div className="content-person">
            <img src={person.picURL ? person.picURL : ""}/>
            <div className="person-main-data-name">
                {person.name}
            </div>
            <div className="person-main-data-age">
                {`${person.age} года, ${person.city}`}
            </div>
            <div className="person-main-data-loyalty">
                {`Градус лояльности: ${100 - person.toxicPercent}%`}
            </div>
            <div className="person-main-data-count">
                {`Всего обращений: `}
            </div>
        </div>
    );
}

export default Person;
