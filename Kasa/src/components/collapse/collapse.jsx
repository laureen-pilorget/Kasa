import React from 'react';
import ArrowImg from './../../assets/arrow.png';
import './collapse.scss';
import { useState } from 'react';


const Collapse = ({ collapseTitle, collapseText }) => {
    const [isCollapsed, setIsCollapsed] = useState(false);
    return (
      <div className={`collapse ${isCollapsed ? 'collapsed' : ''}`}>
        <div className='visible' >
          <div className='collapse__title'>{collapseTitle}</div>
          {/* <div ></div> */}
          <img src={ArrowImg} alt='flèche' onClick={() => setIsCollapsed(!isCollapsed)} className={`collapse__img ${isCollapsed ? 'rotate' : ''}`} />
        </div>
        <div>
          <div className={`collapse__text__array ${isCollapsed ? 'visibleText' : ''}`}>
            {/* Si le props est un tableau */}
            {Array.isArray(collapseText) ? (
              // Alors on le parcourt en tant que liste
              <ul>
                {collapseText.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            ) : (
              // C'est un paragraphe
              <p >{collapseText}</p>
            )}
          </div>
        </div>
      </div>
    );
  };
  
  export default Collapse;