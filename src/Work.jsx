import React, { useState } from 'react';
import WorkCard from './WorkCard';

function Work() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="mx-3 md:mx-10 lg:mx-20 my-20">
      <h3 className="font-bold text-4xl mx-20 my-10 text-gray-700">My Recent Works</h3>
      <div className="flex space-x-2 border-b-2 border-gray-200 max-w-1/2">
        <p className="font-semibold text-gray-900">Filter <span className="hidden md:inline-block">by</span>: </p>
        <button
          className={`py-2 px-3 text-sm font-semibold ${activeTab === 0 ? 'text-green-700 border-b-2 border-green-700' : 'text-gray-500 hover:text-green-700'}`}
          onClick={() => setActiveTab(0)}
        >
          All
        </button>
        <p>/</p>
        <button
          className={`py-2 px-3 text-sm font-semibold ${activeTab === 1 ? 'text-green-700 border-b-2 border-green-700' : 'text-gray-500 hover:text-green-700'}`}
          onClick={() => setActiveTab(1)}
        >
          Web <span className='hidden md:inline-block'> Development</span>
        </button>
        <p>/</p>
        <button
          className={`py-2 px-3 text-sm font-semibold ${activeTab === 2 ? 'text-green-700 border-b-2 border-green-700' : 'text-gray-500 hover:text-green-700'}`}
          onClick={() => setActiveTab(2)}
        >
          App <span className='hidden md:inline-block'> Development</span>
        </button>

        <p>/</p>
        <button
          className={`py-2 px-3 text-sm font-semibold ${activeTab === 3 ? 'text-green-700 border-b-2 border-green-700' : 'text-gray-500 hover:text-green-700'}`}
          onClick={() => setActiveTab(3)}
        >
          Electronics
        </button>

      </div>

      <div className="mt-10 mx-5 md:mx-0">
        {activeTab === 0 && 
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <WorkCard 
            classNames= 'h-96'
            projectImage="background.jpg"
            projectTitle="Oge's Ecommerce Application"
            projectCategory="Web application"
          />

          <WorkCard 
            classNames='h-96'
            projectImage="background2.jpg"
            projectTitle="Oge's Ecommerce Application"
            projectCategory="Web application"
          />

          <WorkCard 
            classNames='h-96'
            projectImage="background3.jpg"
            projectTitle="Oge's Ecommerce Application"
            projectCategory="Web application"
          />

          <WorkCard 
            classNames='h-96'
            projectImage="ui.png"
            projectTitle="Oge's Ecommerce Application"
            projectCategory="Web application"
          />
        </div>}
        {activeTab === 1 && <div className="p-4 bg-gray-100">Content for Tab 2</div>}
        {activeTab === 2 && <div className="p-4 bg-gray-100">Content for Tab 3</div>}
        {activeTab === 3 && <div className="p-4 bg-gray-100">Content for Tab 4</div>}
      </div>
    </div>
  );
}

export default Work;
