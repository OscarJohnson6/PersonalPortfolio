import React from 'react';

function ProjectCard({ image, description, github }) {
    return (
        <div id="projectsSection" className="flex flex-col justify-items-center w-56 m-6 rounded-sm">
            <div>
                <img src={image} alt="Recently completed project"/>
            </div>
            <div className="mb-3">
                <h4 className="font-medium text-l">Description</h4>
                <p className="text-sm">{description}</p>
            </div>
            <div className="text-center mt-auto bg-gray-800/[0.9] hover:bg-gray-300/[0.9] hover:text-zinc-900 hover:font-semibold px-2 py-1 rounded text-white">
                <a href={github}>GitHub</a>
            </div>
        </div>
    );
}

export default ProjectCard;
