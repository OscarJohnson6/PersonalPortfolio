import React from 'react';
import github from '../imgs/github.png';
import mail from '../imgs/mail.png';
import linkedin from '../imgs/linkedin.png';

function Footer() {
    return(
        <footer className="pt-10 pb-5 bg-slate-300/[.7]">
            <div className="flex justify-center items-end">
                <a href="https://github.com/OscarJohnson6" className="m-3">
                    <img src={github} alt="black git hub icon" className="max-h-[48px] max-w-[48px]"/>
                </a>
                <br/>
                <a href="mailto:ojohnson6@madisoncollege.edu" className="m-3">
                    <img src={mail} alt="black evolope or mail icon" className="max-h-[48px] max-w-[48px]"/>
                </a>
                <a href="https://www.linkedin.com/in/oscar-johnson-803a3127b/" className="m-3">
                    <img src={linkedin} alt="black linked in icon" className="max-h-[48px] max-w-[48px]"/>
                </a>
            </div>
        </footer>
    );
}

export default Footer