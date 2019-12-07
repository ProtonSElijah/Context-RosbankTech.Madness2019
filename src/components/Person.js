import React from 'react';

const Person = ({person}) => {
    return (
        <div className="content-person">
            <img src={person.photo}/>
            <div className="person-main-data-name">
                {person.name}
            </div>
            <div className="person-main-data-age">
                {`${person.age} года, ${person.city}`}
            </div>
            <div className="person-main-data-loyalty">
                {`${person.loyalty}%`}
            </div>
            <div className="person-main-data-count">
                {`Всего обращений: `}
            </div>
        </div>
    );
}

export default Person;
