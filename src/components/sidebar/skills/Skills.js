import React, { Component } from 'react';
import Skill from './Skill';
import './Skills.css';
import '../darkMode/Themedark.css';

class Skills extends Component {

    state = {
        competences: [
            {id: 1, value: 'HTML', rating: 4},
            {id: 2, value: 'CSS', rating: 4},
            {id: 3, value: 'JAVASCRIPT', rating: 4},
            {id: 4, value: 'REACT', rating: 3},
            {id: 5, value: 'BOOTSTRAP', rating: 2}
        ],
        langues: [
            {id: 1, value: 'arabe', rating: 5},
            {id: 2, value: 'francais', rating: 4},
            {id: 3, value: 'anglais', rating: 4},
            {id: 4, value: 'italien', rating: 3},
        ],
    }

    render() {

        let {competences, langues} = this.state;

        return (
            <div className="skills">
                <Skill title='competences' 
                      competences={competences} />
                <Skill title='langues' 
                      competences={langues} />
            </div>
        );
    }
}

export default Skills;