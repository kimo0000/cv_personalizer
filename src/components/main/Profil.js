import React from 'react';
import dataExperiences from '../data/dataExperiences';
import dataFormations from '../data/dataFormation';
import Experiences from './Experiences';
import Formations from './Formations';
import './Profil.css';
import '../sidebar/darkMode/Themedark.css';

const Profil = () => {
    return (
        <div className='profil'>
            <div className="profil_header">
                <h3>profil</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nihil alias veritatis vitae nam exercitationem ipsam 
                    nesciunt praesentium amet. Assumenda, recusandae. Animi
                     nostrum quo fugiat.Minus modi quasi ratione architecto quisquam!
                </p>
            </div>
            <Formations title='Formations'  
                        data={dataFormations}/>
            <Experiences title='Experiences Professionnel'
                         data={dataExperiences}/>
        </div>
    );
};

export default Profil;