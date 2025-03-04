import React, { useState } from 'react';
import ExperienceItem from './ExperienceItem';
import ExperienceContent from './ExperienceContent';

function Experience() {
  const [openIndex, setOpenIndex] = useState(0); // This keeps track of the open dropdown index

  const toggleDropdown = (index) => {
    setOpenIndex(openIndex === index ? null : index); // Close it if it's already open, otherwise open it
  };

  return (
    <div className="flex flex-col items-center justify-center my-28 md:my-48 mx-5 md:mx-0 space-y-2 ">
        <h4 className='font-bold text-3xl md:text-4xl mx-10 text-gray-700  my-5 md:my-10'>My Experience</h4>
      <ExperienceItem 
        label="App Dev @ Access Solutions Ltd"
        datee="2024 - Present"
        isOpen={openIndex === 0} // Only open if it's the selected index
        toggleDropdown={() => toggleDropdown(0)} // Pass the index to toggle
      >
        <div>
          <ExperienceContent 
              main="Worked with the mobile and desktop application development team in building
              cross-sectional, responsive and scalable applications for different devices."
              tag={['Java', 'JavaFx', 'Kotlin', 'Compose']}
          />  
        </div>
      </ExperienceItem>

      <ExperienceItem 
        label="Embedded Systems Engineer @ Access Solutions Ltd"
        datee="2023 - Present"
        isOpen={openIndex === 1} // Only open if it's the selected index
        toggleDropdown={() => toggleDropdown(1)} // Pass the index to toggle
      >
        <ExperienceContent 
              main="Engaging in the building/implementation of high tech electronic devices, using 
              microcontrollers and software programming. Built self-service kiosks along with the photonic teams.
              Researched new technological processes for implementation to better the existing systems."
              tag={['Arduino', 'C++']}
          />  
      </ExperienceItem>

      <ExperienceItem 
        label="Freelancer @ Upwork & Others"
        datee="2022 - Present"
        isOpen={openIndex === 2} // Only open if it's the selected index
        toggleDropdown={() => toggleDropdown(2)} // Pass the index to toggle
      >
        <ExperienceContent 
              main="Built and implemented applications for the web (both front-end and back-end),
               mobile and desktop applications, and python software solutions"
              tag={['React', 'HTML', 'CSS', 'Flask', 'Django', 'Python', 'JavaScript', 'Kotlin', 'Java']}
          /> 
      </ExperienceItem>

      <ExperienceItem 
        label="Python & Web Developer @ Splufic Automation Systems"
        datee="2020 - 2021"
        isOpen={openIndex === 3} // Only open if it's the selected index
        toggleDropdown={() => toggleDropdown(3)} // Pass the index to toggle
      >
        <ExperienceContent 
              main="Built and implemented responsive and scalable web sites, full stack web applications, 
              and python software solutions"
              tag={['React', 'HTML', 'CSS', 'Flask', 'Django', 'Python', 'JavaScript']}
          /> 
      </ExperienceItem>

      <ExperienceItem 
        label="Electrical Engineering Intern @ FMC"
        datee="2018 - 2019"
        isOpen={openIndex === 4} // Only open if it's the selected index
        toggleDropdown={() => toggleDropdown(4)} // Pass the index to toggle
      >
        <ExperienceContent 
              main="Learnt the basics of electrical and electronics engineering and how to troubleshoot
              faults in an electrical circuit"
              tag={['Circuits']}
          /> 
      </ExperienceItem>
    </div>
  );
}

export default Experience;
