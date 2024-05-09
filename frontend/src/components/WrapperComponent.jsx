import React from 'react';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';

const WrapperComponent = ({ components }) => {
    return (
        <React.StrictMode>
            <Navbar />
            <div className="relative min-h-[100vh]">
                <div className="pb-[30vh] flex flex-col items-center">
                    {components.map((Component, index) => (
                        <React.Fragment key={index}>
                            {Component}
                        </React.Fragment>
                    ))}
                </div>
                <Footer />
            </div>
        </React.StrictMode>
    );
};

export default WrapperComponent;
