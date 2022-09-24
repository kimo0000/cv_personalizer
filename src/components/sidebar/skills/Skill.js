import React from 'react';
import './Skills.css';

const Skill = ({competences, title}) => {
    return (
        <div className='skill'>
            <h3>{title}</h3>
            {
                competences.map(((item) => 
                    <div key={item.id} className='skill_box'>
                        <div className='skill_title'>{item.value}</div>
                        <div className="rating">
                        <span className={`skill_rating ${item.rating > 0 && 'plain'}`}></span>
                        <span className={`skill_rating ${item.rating > 1 && 'plain'}`}></span>
                        <span className={`skill_rating ${item.rating > 2 && 'plain'}`}></span>
                        <span className={`skill_rating ${item.rating > 3 && 'plain'}`}></span>
                        <span className={`skill_rating ${item.rating > 4 && 'plain'}`}></span>
                        </div>
                    </div>
                    ))
            }
        </div>
    );
};

export default Skill;