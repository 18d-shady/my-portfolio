import React from 'react';
import Tags from './Tags';

function ExperienceContent({ tag, main }) {
    
  return (
    <div className="py-2 px-5 text-sm font-bold">
        <p className="py-1 text-left">{main}</p>
        <div className="flex flex-row flex-wrap">
            {tag.map((item, index) => (
                <Tags key={index} label={item} />
            ))}
        </div>
    </div>
  );
}

export default ExperienceContent;
