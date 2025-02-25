import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import Contact from './Contact';

function WorkItem() {
    const location = useLocation();
    const { projectTitle, projectCategory, projectImages, projectDescription, isLink } = location.state || {}; // Get the passed state

    return (
        <div className='font-mono text-black text-left'>
            <div className='site-colorr w-full'><Header /></div>
            <h4 className='font-bold text-3xl md:text-4xl mx-5 md:mx-10 text-gray-700 mt-5'>{projectTitle}</h4>
            <p className='text-sm mx-5 md:mx-10 text-gray-700 mb-3'>{projectCategory}</p>
            <div className="py-1 mx-5 md:mx-10">{projectDescription}</div>

            {isLink && <a href={isLink} className='text-lg text-left mx-5 md:mx-10 mt-5 mb-2 site-texxt'>Open Project ... </a>}

            <div className="my-5 mx-5 md:mx-10">
                {projectImages && projectImages.map((projectImage, index) => {
                    const imageUrl = require(`./${projectImage}`);
                    return (
                        <div key={index} className="flex justify-center my-10">
                            <img 
                                src={imageUrl} 
                                alt={`Project display ${index + 1}`} 
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    );
                })}
            </div>

            <div className='text-center'><Contact /></div>
        </div>
    );
}

export default WorkItem;