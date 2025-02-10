import React from 'react';
import ScrollAnimation from './ScrollAnimation';

function Description(){

    return(
        <div className='my-20 md:my-48'>
            <h3 className="font-bold text-4xl mx-20 text-gray-700">About Me</h3>
            <div className="bg-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10 md:py-16 justify-between mx-5 md:mx-20">
                {/* 
                <div className="basis-1/2 text-left">
                    <h3 className="font-bold text-4xl">About Me</h3>
                    <p className="text-xl text-slate-800 my-5">I create high quality Web, 
                        Desktop and Mobile Applications.
                        I also build electronic embedded system devices.
                    </p>
                </div>
                */}

                <ScrollAnimation className="basis-1/3 text-left p-10 border border-gray-500">
                    <div className='flex flex-row space-x-5'>
                        <svg className="h-20 w-20 text-green-700"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                          <path stroke="none" d="M0 0h24v24H0z"/>
                          <circle cx="12" cy="12" r="9" />
                          <line x1="3.6" y1="9" x2="20.4" y2="9" />
                          <line x1="3.6" y1="15" x2="20.4" y2="15" />
                          <path d="M11.5 3a17 17 0 0 0 0 18" /> 
                          <path d="M12.5 3a17 17 0 0 1 0 18" />
                        </svg>
                        <div className='font-bold text-3xl text-gray-700'>Web Development</div>
                    </div>
                    <h3 className="text-slate-700 my-10 font-mono"> 
                         Over 5 years experience building 
                        web applications using HTML, CSS, Javascript and React as frontend technology and 
                        python's django and flask framework as backend technology.
                    </h3>
                </ScrollAnimation>

                <ScrollAnimation className="basis-1/3 text-left p-10 border border-gray-500">
                    <div className='flex flex-row space-x-5'>
                    <svg class="h-20 w-20 text-green-700"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
                    </svg>

                        <div className='font-bold text-3xl text-gray-700'> Desktop/Mobile App Dev</div>
                    </div>
                    <h3 className="text-slate-700 my-10 font-mono"> 
                        Experience building scalable and responsive mobile and desktop applications 
                        using java, javafx, kotlin and jetpack compose. Also using python software to create
                        OCR, nltk and other software solutions
                    </h3>
                </ScrollAnimation>

                <div className="basis-1/3 text-left p-10 border border-gray-500">
                    <div className='flex flex-row space-x-5'>
                        <svg class="h-20 w-20 text-green-700"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">
                          <rect x="4" y="4" width="16" height="16" rx="2" ry="2" />
                          <rect x="9" y="9" width="6" height="6" />
                          <line x1="9" y1="1" x2="9" y2="4" />
                          <line x1="15" y1="1" x2="15" y2="4" />
                          <line x1="9" y1="20" x2="9" y2="23" />
                          <line x1="15" y1="20" x2="15" y2="23" />
                          <line x1="20" y1="9" x2="23" y2="9" />
                          <line x1="20" y1="14" x2="23" y2="14" />
                          <line x1="1" y1="9" x2="4" y2="9" />
                          <line x1="1" y1="14" x2="4" y2="14" />
                        </svg>
                        <div className='font-bold text-3xl text-gray-700'>Electronics Engineering</div>
                    </div>
                    <h3 className="text-slate-700 my-10 font-mono"> 
                        Experience building arduino devices, implementing IOT solutions and working 
                        with functionalities such as bluetooth, wifi and other pheripherals using microcontrollers
                        and software engineering
                    </h3>
                </div>
        
            </div>
        </div>
    );
}

export default Description;