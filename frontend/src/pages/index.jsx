import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import '../css/styles.css';
import WrapperComponent from '../components/WrapperComponent.jsx';
import ExperienceImages from '../components/ExperienceImages.jsx';
import ProjectCard from '../components/ProjectCard.jsx';
import GenieFit from '../imgs/projects/GenieFit.png';

const Index = () => {
    const [email, setEmail] = useState('');
    const apiUrl = `http://localhost:8080/backend_war/portfolio/fanAccounts/${email}`;

    const handleSubmit = (event) => {
        event.preventDefault();

        fetch(apiUrl, {method: 'POST'})
            .then(() => setEmail(''))
            .catch(error => console.error('Error adding fan account:', error));
    };

    return (
        <WrapperComponent
            components={[
                <div className="flex content-center text-center mt-[30vh] mb-[30vh]">
                    <h1 className="font-bold text-4xl">Hello, my name is Oscar Johnson<br/>a full-stack developer.</h1>
                </div>,
                <article className="flex mt-[10vh] mb-[10vh] w-[60vw] justify-between items-center rounded-sm">
                    <div>
                        <h3 className="font-semibold text-3xl">Projects</h3>
                        <ul>
                            <li>4 different projects linked</li>
                            <li>Current Project: Personal Website</li>
                            <li>Previous Project: Fitness App</li>
                        </ul>
                    </div>
                    <ProjectCard
                        image={GenieFit}
                        description="GenieFit, a fitness app made in Java able to log health information and generate random exercises with APIs."
                        github="https://github.com/OscarJohnson6/IndieProject"
                    />
                </article>,
                <article className="flex mt-[10vh] mb-[10vh] justify-between w-[60vw]">
                    <ExperienceImages maxSize="4em" width="350px" />
                    <div>
                        <h3 className="font-semibold text-3xl">Experience</h3>
                        <div className="flex">
                            <div className="flex flex-col mr-3">
                                <h3 className="font-semibold text-xl">Education</h3>
                                <p>MATC, 5/20/2024</p>
                                <p>Web Software Developer</p>
                            </div>
                            <div className="flex flex-col">
                                <h3 className="font-semibold text-xl">Job</h3>
                                <p>Culver's, Trainer</p>
                                <p>5/16/2016 - Current</p>
                            </div>
                        </div>
                    </div>
                </article>,
                <article className="flex justify-items-start w-[60vw] mt-[25vh] mb-6">
                    <form onSubmit={handleSubmit}>
                        <label className="font-bold text-3xl" htmlFor="taskAdd">Become a Fan by Entering Your Email</label><br />
                        <input
                            className="border-4 rounded mt-2 mb-2 mr-3"
                            type="text" name="task" id="taskAdd" placeholder="Enter email to be a fan"
                            value={email} onChange={(e) => setEmail(e.target.value)}/>
                        <input
                            className="border-2 border-gray-900 bg-gray-700 text-white px-2 py-1 rounded-xl font-semibold
                                        hover:border-gray-400 hover:bg-gray-200/[.7] hover:text-gray-950"
                            type="submit" id="submitFanButton" value="Be a Fan"/>
                    </form>
                </article>
            ]}
        />
    );
};

ReactDOM.createRoot(document.getElementById('root')).render(<Index />);
