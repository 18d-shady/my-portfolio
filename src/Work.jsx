import React, { useState } from 'react';
import WorkCard from './WorkCard';

function Work() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="work" className="mx-3 md:mx-10 lg:mx-20 mb-20">
      <h3 className="font-bold text-3xl md:text-4xl mx-3 my-10 text-gray-700">My Recent Works</h3>
      <div className="flex space-x-2 border-b-2 border-gray-200 lg:max-w-1/2">
        <p className="font-semibold text-gray-900">Filter <span className="hidden md:inline-block">by:</span></p>
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

      <div className="mt-10 mx-1 md:mx-0">
        {activeTab === 0 && 
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <WorkCard 
            classNames= 'h-96pro'
            projectImage="pahelp.jpg"
            projectTitle="PAHelp's Chatbot"
            projectCategory="Android Application"
            projectImages= {["pahelp.jpg"]}
            projectDescription= {`A chatbot made for a clients application, trained with python's rasa model
              for offline communcation and making use of OpenAi's model for online communication. It also 
              has some special admin's features and allows for a beautiful user experience. With this chatbot,
              PAHelp's clients can make enquiries about their services and also have access to artificial
              intelligence for any assistance they require`}
          />

          <WorkCard 
            classNames='h-96pro'
            projectImage="clinton_inventory3.png"
            projectTitle="Clintons Inventory App"
            projectCategory="Web application"
            projectImages= {["clinton_inventory3.png", "clinton_inventory2.png", "clinton_inventory1.png"]}
            projectDescription= {`An inventory application made for a drug store to keep stock of the
              available drugs, to make purchases and to track sales. It also comes with an inbuilt POS 
              application, where the employee can make sales and it automatically refreshes the inventory
              data. 
              The web application also notifies the admin on low-stock items and help them manage their 
              stock properly.`}
          />

          <WorkCard 
            classNames='h-96pro'
            projectImage="background2.jpg"
            projectTitle="Clintons Inventory App"
            projectCategory="Web application"
            projectImages= {["clinton_inventory3.png", "clinton_inventory2.png", "clinton_inventory1.png"]}
            projectDescription= {`An inventory application made for a drug store to keep stock of the
              available drugs, to make purchases and to track sales. It also comes with an inbuilt POS 
              application, where the employee can make sales and it automatically refreshes the inventory
              data. 
              The web application also notifies the admin on low-stock items and help them manage their 
              stock properly.`}
          />

          <WorkCard 
            classNames='h-96pro'
            projectImage="background3.jpg"
            projectTitle="Clintons Inventory App"
            projectCategory="Web application"
            projectImages= {["clinton_inventory3.png", "clinton_inventory2.png", "clinton_inventory1.png"]}
            projectDescription= {`An inventory application made for a drug store to keep stock of the
              available drugs, to make purchases and to track sales. It also comes with an inbuilt POS 
              application, where the employee can make sales and it automatically refreshes the inventory
              data. 
              The web application also notifies the admin on low-stock items and help them manage their 
              stock properly.`}
          />

          <WorkCard 
            classNames='h-96pro'
            projectImage="background4.jpg"
            projectTitle="Clintons Inventory App"
            projectCategory="Web application"
            projectImages= {["clinton_inventory3.png", "clinton_inventory2.png", "clinton_inventory1.png"]}
            projectDescription= {`An inventory application made for a drug store to keep stock of the
              available drugs, to make purchases and to track sales. It also comes with an inbuilt POS 
              application, where the employee can make sales and it automatically refreshes the inventory
              data. 
              The web application also notifies the admin on low-stock items and help them manage their 
              stock properly.`}
          />

          <WorkCard 
            classNames='h-96pro'
            projectImage="background.jpg"
            projectTitle="Clintons Inventory App"
            projectCategory="Web application"
            projectImages= {["clinton_inventory3.png", "clinton_inventory2.png", "clinton_inventory1.png"]}
            projectDescription= {`An inventory application made for a drug store to keep stock of the
              available drugs, to make purchases and to track sales. It also comes with an inbuilt POS 
              application, where the employee can make sales and it automatically refreshes the inventory
              data. 
              The web application also notifies the admin on low-stock items and help them manage their 
              stock properly.`}
          />

          <WorkCard 
            classNames='h-96pro'
            projectImage="megzcrafthub1.jpg"
            projectTitle="Megzcraftshub Giftboxes store"
            projectCategory="Web application"
            projectImages= {["megzcrafthub1.jpg", "megzcrafthub2.jpg", "megzcrafthub3.jpg", 
              "megzcrafthub7.jpg", "megzcrafthub4.jpg", "megzcrafthub5.jpg", 
              "megzcrafthub6.jpg","megzcrafthub8.jpg",
            ]}
            projectDescription= {`An inventory application made for a drug store to keep stock of the
              available drugs, to make purchases and to track sales. It also comes with an inbuilt POS 
              application, where the employee can make sales and it automatically refreshes the inventory
              data. 
              The web application also notifies the admin on low-stock items and help them manage their 
              stock properly.`}
            isLink={"https://megzcrafthub.ng/"}
          />

          <WorkCard 
            classNames='h-96pro'
            projectImage="weather.jpg"
            projectTitle="Weather App"
            projectCategory="Web application"
            projectImages= {["weather.jpg"]}
            projectDescription= {`A weather application built with reactjs to check the weather of your city and to 
              also check the weather of other cities listed in the api.`}
          />

        </div>}

        {activeTab === 1 && 
        <div className="p-4 bg-gray-100">Content for Tab 2</div>}

        {activeTab === 2 && 
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <WorkCard 
            classNames= 'h-96pro'
            projectImage="pahelp.jpg"
            projectTitle="PAHelp's Chatbot"
            projectCategory="Android Application"
            projectImages= {["pahelp.jpg"]}
            projectDescription= {`A chatbot made for a clients application, trained with python's rasa model
              for offline communcation and making use of OpenAi's model for online communication. It also 
              has some special admin's features and allows for a beautiful user experience. With this chatbot,
              PAHelp's clients can make enquiries about their services and also have access to artificial
              intelligence for any assistance they require`}
          />
        </div>}
        {activeTab === 3 && <div className="p-4 bg-gray-100">Content for Tab 4</div>}
      </div>
    </section>
  );
}

export default Work;
