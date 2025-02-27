import React from 'react';
import { Link, useLocation } from 'react-router-dom';
//import Header from './Header';
import Contact from './Contact';

function WorkItem() {
    const location = useLocation();
    const { projectTitle, projectCategory, projectImages, projectDescription, isLink } = location.state || {}; // Get the passed state

    return (
        <div className='font-mono text-black text-left'>
            <div className='w-full text-white site-colorr p-6 '>
                <Link to="/my-portfolio" className='border-2 border-gray-300 rounded-full px-3 py-2'>
                    <svg class="h-6 w-6 inline-block me-2"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z"/>
                        <path d="M18 18v-6a3 3 0 0 0 -3 -3h-10l5 -5m0 10l-5 -5" />
                    </svg>
                    <span>Back</span>
                </Link>
            </div>
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