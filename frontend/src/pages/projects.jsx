import React from 'react';
import ReactDOM from 'react-dom/client'
import '../css/styles.css';
import ProjectCard from '../components/ProjectCard.jsx';
import WrapperComponent from '../components/WrapperComponent.jsx';
import GenieFit from "../imgs/projects/GenieFit.png";
import ToDoList from '../imgs/projects/toDoList.png';
import EasyGoGroccery from '../imgs/projects/EasyGoGroccery.png';

ReactDOM.createRoot(document.getElementById('root')).render(
    <WrapperComponent
        components={[
            <div className="flex flex-wrap justify-center p-4 w-[65vw] mb-[15vw]">
                <ProjectCard
                    image={GenieFit}
                    description="An Indie Java project created to log health information and generate random exercises."
                    github="https://github.com/OscarJohnson6/IndieProject"
                />
                <ProjectCard
                    image={ToDoList}
                    description="A to do list using an API with express.js for
                                  hosting the tasking and node.js for crd operations
                                  on the task list."
                    github="https://github.com/OscarJohnson6/Adv-JavaScript/tree/main/Projects/Project-4"
                />
                <ProjectCard
                    image={EasyGoGroccery}
                    description="A make up groccery store that allowed users to add items to their cart, modify their cart, and checkout. There was also an admin display to monitor and update the groccery store. It was made with PHP, Bootstrap, and MySQL."
                    github="github-url"
                />
            </div>
        ]}
    />
);
