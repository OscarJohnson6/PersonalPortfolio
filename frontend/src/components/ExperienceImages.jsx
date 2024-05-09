import React from 'react';
import bootstrap from '../imgs/codeIcons/bootstrap.png';
import java from '../imgs/codeIcons/java.png';
import js from '../imgs/codeIcons/js.png';
import mysql from '../imgs/codeIcons/mysql.png';
import nodejs from '../imgs/codeIcons/nodejs.png';
import php from '../imgs/codeIcons/php.png';
import react from '../imgs/codeIcons/react.png';
import tailwind from '../imgs/codeIcons/tailwind.png';

function ExperienceImages({ maxSize, width }) {
    return (
        <div className="flex flex-wrap justify-center mr-4" style={{ width: width }}>
            <img src={bootstrap} alt="bootstrap icon" className="p-2" style={{ maxHeight: maxSize, maxWidth: maxSize }} />
            <img src={java} alt="java icon" className="p-2" style={{ maxHeight: maxSize, maxWidth: maxSize }} />
            <img src={js} alt="js icon" className="p-2" style={{ maxHeight: maxSize, maxWidth: maxSize }} />
            <img src={mysql} alt="mysql icon" className="p-2" style={{ maxHeight: maxSize, maxWidth: maxSize }} />
            <img src={nodejs} alt="nodejs icon" className="p-2" style={{ maxHeight: maxSize, maxWidth: maxSize }} />
            <img src={php} alt="php icon" className="p-2" style={{ maxHeight: maxSize, maxWidth: maxSize }} />
            <img src={react} alt="react icon" className="p-2" style={{ maxHeight: maxSize, maxWidth: maxSize }} />
            <img src={tailwind} alt="tailwind icon" className="p-2" style={{ maxHeight: maxSize, maxWidth: maxSize }} />
        </div>
    );
}

export default ExperienceImages;
