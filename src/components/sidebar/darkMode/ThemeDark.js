import React from 'react';
import './Themedark.css';
import { useState } from 'react';

const ThemeDark = () => {

   const [themeMode, setThemeMode] = useState('light');

    let clickedClass = 'clicked';
    let body = document.body;
    let darkMode = 'dark'
    let lightMode = 'light';
    let theme;

    if(localStorage) {
       theme = localStorage.getItem('theme');
    }

    if(theme === darkMode || theme === lightMode) {
       body.classList.add(theme);
      } else {
       body.classList.add('light');
    }

    const HandleTheme = (e) => {
       if(theme === darkMode) {
          body.classList.replace(darkMode, lightMode);
          e.target.classList.remove(clickedClass);
          localStorage.setItem('theme', 'light');
          theme = lightMode;
       } else {
          body.classList.replace(lightMode, darkMode);
          e.target.classList.add(clickedClass);
          localStorage.setItem('theme', 'dark');
          theme = darkMode;
       }

        setThemeMode(theme);
    }
    
    return (
        <div className='theme_dark'>
        <button className={`btn ${theme === 'dark' ? clickedClass : ''}`} onClick={HandleTheme}>
           {
            themeMode === 'light' || theme === 'light' 
            ? (<i className="fa-solid fa-sun"></i>)
            : (<i className="fa-solid fa-moon"></i>)
           }
        </button>
        <button className="pdf">
          <i className="fa-solid fa-file-pdf"></i>
        </button>
        </div>
    );
};

export default ThemeDark;