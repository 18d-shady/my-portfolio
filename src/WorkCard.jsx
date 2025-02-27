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
        <div className={`rounded-xl shadow-xl ${classNames} overflow-hidden relative downboss group`}  
            onClick={handleClick}>
            <div className='h-3/4 w-full bg-cover bg-center bg-no-repeat bg-slate-300 group-hover:scale-125 transition-all' 
            style={{ backgroundImage: `url(${imageUrl})` }}>
            </div>
            <div className='absolute bottom-0 left-0
                h-1/4 w-full bg-slate-800 text-white p-4 md:p-5 text-left font-mono'>
                <h4 className='text-lg font-bold'>{projectTitle}</h4>
                <div className='relative'>
                    <p className="text-base project-category absolute left-0 top-0">{projectCategory}</p>
                    <p className="text-base open-project opacity-0 transform translate-y-4 transition-opacity 
                        duration-300 ease-in-out absolute left-0 top-0">Open Project ---</p>
                </div>
            </div>
        </div>
    );
}

export default WorkCard;