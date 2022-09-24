import React from 'react';
import './Formations.css';

const Formations = ({data, title}) => {
     return (
        <div className='formations'>
            <h3>{title}</h3>
            {
               data.map(item => 
                <div className='form' key={item.id}>
                   <div className="date">{item.date}</div>
                   <div className="info">
                    <p>{item.title}</p>
                    <p>{item.location}</p>
                   </div>
                </div>
                )
            }
        </div>
     )
}

export default Formations;