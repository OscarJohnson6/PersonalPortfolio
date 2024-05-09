import React from 'react';

function ProjectCard({ image, description, github }) {
    return (
        <article id="projectsSection" className="flex">
            <div>
                <div>
                    <img src={image} alt="Recently completed project"/>
                </div>
                <div>
                    <h4>Description</h4>
                    <p>{description}</p>
                </div>
                <div>
                    <a href={github}>GitHub</a>
                </div>
            </div>
        </article>
    );
}

export default ProjectCard;
