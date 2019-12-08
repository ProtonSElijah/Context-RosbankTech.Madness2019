import React from 'react';
import History from './History.js';

const PersonHistory = ({personHistory, choice, onHistory}) => {
    return (
        <div className="content-history" id="history">
            <div className="history-heder">{"ИСТОРИЯ ОБРАЩЕНИЙ"}</div>
            <div className="history-list">
               <div className="table-header">
                   <table cellPadding="0" cellSpacing="0" border="0">
                       <thead>
                            <tr onClick={onHistory}>
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
                          {personHistory &&
                           <History personHistory={personHistory} choice={choice}/>}
                        </tbody>
                   </table>
               </div>
            </div>
        </div>
    );
}

export default PersonHistory;
