import React from 'react';

function Navbar() {
    return(
        <nav className="flex justify-center text-xl font-medium mt-3">
            <a href="../../index.html" className="mr-[35vw] px-2 py-1 m-1 bg-zinc-300/[.9] hover:bg-zinc-800 rounded-md hover:text-white">Home</a>
            <div>
                <a href="../../projects.html" className="px-2 py-1 m-1 bg-zinc-300/[.9] hover:bg-zinc-800 rounded-md hover:text-white">Projects</a>
                <a href="../../aboutMe.html" className="px-2 py-1 m-1 bg-zinc-300/[.9] hover:bg-zinc-800 rounded-md hover:text-white min-w-[134px]">About Me</a>
                <a href="mailto:ojohnson6@madisoncollege.edu" className="px-2 py-1 m-1 bg-zinc-300/[.9] hover:bg-zinc-800 rounded-md hover:text-white min-w-[152px]">Contact Me</a>
            </div>
        </nav>
    );
}

export default Navbar