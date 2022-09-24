import React from 'react';
import './Experiences.css';

const Experiences = ({data, title}) => {
    console.log(data);
    return (
        <div className='experience'>
           <h3>{title}</h3>
           {
              data.map(item => 
                <div key={item.id} className='exp'>
                   <div className="exp_date">{item.date}</div>
                   <div className="exp_info">
                    <p>{item.title}</p>
                    <p>{item.location}</p>
                    <p className='exp_text'>{item.text}</p>
                    <ul className='exp_list'>
                   {
                    item.missions.map(mission => 
                           <li key={mission.id}>{mission.title}</li>
                        )
                   }    
                    </ul>
                   </div>
                </div>
                )
           }
        </div>
    );
};

export default Experiences;