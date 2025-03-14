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
            projectImage="images/ahf1.jpg"
            projectTitle="AHF Desktop App"
            projectCategory="Desktop application"
            projectImages= {["images/ahf1.jpg", "images/ahf2.jpg", "images/ahf3.jpg", 
              "images/ahf4.jpg", "images/ahf5.jpg", "images/ahf6.jpg", "images/ahf7.jpg"
            ]}
            projectDescription= {`A hospital management application designed by the access solution
              technology team to help automate and facilitate various hospital processes. The 
              application is rich in terms of functionalities and aids in alot of solutions.`}
          />

          <WorkCard 
            classNames='h-96pro'
            projectImage="images/erc1.jpg"
            projectTitle="BECE ERC Application"
            projectCategory="Destop application"
            projectImages= {[ "images/erc1.jpg", "images/erc2.jpg", "images/erc3.jpg", 
              "images/erc4.jpg", "images/erc5.jpg", "images/erc6.jpg", 
            ]}
            projectDescription= {`An Educational Resources Center application designed for the BECE 
              examination, by I and the access solution technology team, that helps to compute
              students result for the examination.`}
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
            projectImage="megzcrafthub1.jpg"
            projectTitle="Megzcraftshub Giftboxes"
            projectCategory="Web application"
            projectImages= {["megzcrafthub1.jpg", "megzcrafthub2.jpg", "megzcrafthub3.jpg", 
              "megzcrafthub7.jpg", "megzcrafthub4.jpg", "megzcrafthub5.jpg", 
              "megzcrafthub6.jpg","megzcrafthub8.jpg",
            ]}
            projectDescription= {`This is an ecommerce web application for use in selling giftboxes,
              paper bags and cards. It also includes a payment checkout option where you pay for what
              you bought and your order is sent to the vendors email. There is also a functionality
              for adding images or specific descriptions to your orders. It boasts good user experience
              for the customers.`}
            isLink={"https://megzcrafthub.ng/"}
          />

          <WorkCard 
            classNames='h-96pro'
            projectImage="images/fingerprint1.jpg"
            projectTitle="Biometric Attendance System"
            projectCategory="Desktop Application"
            projectImages= {["images/fingerprint1.jpg", "images/fingerprint2.jpg"]}
            projectDescription= {`A biometric attendance system designed for getting 
              fingerprints for staff and recording the time they arrived at work. It also 
              enables you to register staffs using their biometric information.`}
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

          <WorkCard 
            classNames='h-96pro'
            projectImage="images/former_portfolio.jpg"
            projectTitle="My Former Portfolio"
            projectCategory="Web application"
            projectImages= {["images/former_portfolio.jpg", "images/former_portfolio2.jpg", 
              "images/former_portfolio3.jpg", "images/former_portfolio4.jpg", "images/former_portfolio5.jpg"
            ]}
            projectDescription= {`This is my former portfolio before it was rebranded and put out of use in 2024`}
            isLink={"https://18d-shady.github.io/portfolio/"}
          />

          <WorkCard 
            classNames='h-96pro'
            projectImage="images/battery_indicator.jpg"
            projectTitle="Battery Indicator Circuit"
            projectCategory="Electronic Device"
            projectImages= {["images/battery_indicator.jpg"]}
            projectDescription= {`This device was implemented using the arduino nano microcontroller
              and LEDs with resistors. It is set to check a specific voltage of the batteries it is
              plugged to and to blink red if the battery is low.`}
          />

          <WorkCard 
            classNames='h-96pro'
            projectImage="images/signature_pad.jpg"
            projectTitle="Signature Pad"
            projectCategory="Electronic Device"
            projectImages= {["images/signature_pad.jpg"]}
            projectDescription= {`This is a signature pad electronic device implemented with the esp8266
              nodemcu microcontroller, a 2.8 inch TFT touchscreen and a stylus. It gets touch coordinate
              on the screen and displays them for the user to see, and then when the user clicks send, it 
              sends the written signature as a picture file to the pc it is connected to. Also it has the option
              of viewing the signature in realtime on the pc's screen while the signature is taken.`}
          />

        </div>}

        {activeTab === 1 && 
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
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
            projectImage="megzcrafthub1.jpg"
            projectTitle="Megzcraftshub Giftboxes"
            projectCategory="Web application"
            projectImages= {["megzcrafthub1.jpg", "megzcrafthub2.jpg", "megzcrafthub3.jpg", 
              "megzcrafthub7.jpg", "megzcrafthub4.jpg", "megzcrafthub5.jpg", 
              "megzcrafthub6.jpg","megzcrafthub8.jpg",
            ]}
            projectDescription= {`This is an ecommerce web application for use in selling giftboxes,
              paper bags and cards. It also includes a payment checkout option where you pay for what
              you bought and your order is sent to the vendors email. There is also a functionality
              for adding images or specific descriptions to your orders. It boasts good user experience
              for the customers.`}
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

          <WorkCard 
            classNames='h-96pro'
            projectImage="images/former_portfolio.jpg"
            projectTitle="My Former Portfolio"
            projectCategory="Web application"
            projectImages= {["images/former_portfolio.jpg", "images/former_portfolio2.jpg", 
              "images/former_portfolio3.jpg", "images/former_portfolio4.jpg", "images/former_portfolio5.jpg"
            ]}
            projectDescription= {`This is my former portfolio before it was rebranded and put out of use in 2024`}
            isLink={"https://18d-shady.github.io/portfolio/"}
          />

          
        </div>}

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

          <WorkCard 
            classNames='h-96pro'
            projectImage="images/ahf1.jpg"
            projectTitle="AHF Desktop App"
            projectCategory="Desktop application"
            projectImages= {["images/ahf1.jpg", "images/ahf2.jpg", "images/ahf3.jpg", 
              "images/ahf4.jpg", "images/ahf5.jpg", "images/ahf6.jpg", "images/ahf7.jpg"
            ]}
            projectDescription= {`A hospital management application designed by the access solution
              technology team to help automate and facilitate various hospital processes. The 
              application is rich in terms of functionalities and aids in alot of solutions.`}
          />

          <WorkCard 
            classNames='h-96pro'
            projectImage="images/erc1.jpg"
            projectTitle="BECE ERC Application"
            projectCategory="Destop application"
            projectImages= {[ "images/erc1.jpg", "images/erc2.jpg", "images/erc3.jpg", 
              "images/erc4.jpg", "images/erc5.jpg", "images/erc6.jpg", 
            ]}
            projectDescription= {`An Educational Resources Center application designed for the BECE 
              examination, by I and the access solution technology team, that helps to compute
              students result for the examination.`}
          />

          <WorkCard 
            classNames='h-96pro'
            projectImage="images/fingerprint1.jpg"
            projectTitle="Biometric Attendance System"
            projectCategory="Desktop Application"
            projectImages= {["images/fingerprint1.jpg", "images/fingerprint2.jpg"]}
            projectDescription= {`A biometric attendance system designed for getting 
              fingerprints for staff and recording the time they arrived at work. It also 
              enables you to register staffs using their biometric information.`}
          />
        </div>}

        {activeTab === 3 && <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <WorkCard 
            classNames='h-96pro'
            projectImage="images/battery_indicator.jpg"
            projectTitle="Battery Indicator Circuit"
            projectCategory="Electronic Device"
            projectImages= {["images/battery_indicator.jpg"]}
            projectDescription= {`This device was implemented using the arduino nano microcontroller
              and LEDs with resistors. It is set to check a specific voltage of the batteries it is
              plugged to and to blink red if the battery is low.`}
          />

          <WorkCard 
            classNames='h-96pro'
            projectImage="images/signature_pad.jpg"
            projectTitle="Signature Pad"
            projectCategory="Electronic Device"
            projectImages= {["images/signature_pad.jpg"]}
            projectDescription= {`This is a signature pad electronic device implemented with the esp8266
              nodemcu microcontroller, a 2.8 inch TFT touchscreen and a stylus. It gets touch coordinate
              on the screen and displays them for the user to see, and then when the user clicks send, it 
              sends the written signature as a picture file to the pc it is connected to. Also it has the option
              of viewing the signature in realtime on the pc's screen while the signature is taken.`}
          />

        </div>}
      </div>
    </section>
  );
}

export default Work;
