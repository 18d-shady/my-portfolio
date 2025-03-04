import React from 'react';
import Introduction from './Introduction';
import Description from './Description';
import Work from './Work';
import Experience from './Experience';
import Contact from './Contact';

function HomePage(){
    return(
        <div>
            <Introduction />
            <Description />
            <Work />
            <Experience />
            <Contact />
        </div>

    )
}

export default HomePage;