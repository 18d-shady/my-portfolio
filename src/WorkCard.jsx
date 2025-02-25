import React from 'react';
import { useNavigate } from 'react-router-dom';

function WorkCard({
    classNames,
    projectImage,
    projectTitle,
    projectCategory,
    projectImages,
    projectDescription,
    isLink
}) {
    const navigate = useNavigate();
    const imageUrl = require(`./${projectImage}`);

    const handleClick = () => {
        navigate(`/work/${encodeURIComponent(projectTitle)}`, {
            state: {
                projectTitle,
                projectCategory,
                projectImages,
                projectDescription,
                isLink,
            },
        });
    };

    return (
        <div className={`rounded-xl shadow-xl ${classNames} overflow-hidden`}  onClick={handleClick}>
            <div className='h-3/4 w-full bg-cover bg-center bg-no-repeat bg-slate-300' 
            style={{ backgroundImage: `url(${imageUrl})` }}>
            </div>
            <div className='h-1/4 w-full bg-slate-800 text-white p-3 md:p-5 text-left font-mono'>
                <h4 className='text-base md:text-lg font-bold'>{projectTitle}</h4>
                <p className="text-sm md:text-base">{projectCategory}</p>
            </div>
        </div>
    );
}

export default WorkCard;