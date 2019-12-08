import React from 'react';

const History = ({personHistory, choice}) => {
    return personHistory.map(
       history =>
            <tr className="history-element" onClick={choice} data-message={history.chat}>
                <td width="20%">{history.date.slice(0, 8)}</td>
                <td className="history-element-theme" width="70%">{history.theme}</td>
                <td width="10%">{Math.round((100- history.toxicPercent*100))}</td>
            </tr>
    );
}

export default History;
