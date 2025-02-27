import React from 'react';
import Header from './Header'
import ScrollAnimation from './ScrollAnimation';

function Introduction(){
    const imageUrl = require('./display2.jpg');
    //rgb(11, 65, 56);
    return(
        <section id="introduction" className="land-height">
            <div className='site-colorr hidden lg:block w-full'><Header /></div>

            <div className="landing-shape py-28 hidden lg:block">
                <ScrollAnimation className="flex flex-col justify-start">
                    <h4 className="font-sanserif text-left ms-20 text-4xl text-white">HELLO I AM</h4>
                    <h4 className="font-mono text-left ms-20 text-5xl text-white my-5">Olehi Davis</h4>
                    <h4 className="font-serif text-left ms-20 text-4xl text-white w-1/2">
                        Embedded Systems and Software Applications Developer
                    </h4>

                    <a href="#contact" className='px-5 py-3 text-white border-2 border-white font-mono 
                        text-2xl text-center my-5 w-48 ms-20 hover:bg-white hover:text-gray-800'>
                        Hire Me
                    </a>

                    {/*<div className='triangle'></div>*/}
                </ScrollAnimation>

            </div>
            

            <div className="almost-full rounded-full bg-center absolute bg-no-repeat bg-cover
                hidden lg:block top-36 right-16 xl:top-28 xl:right-20 "
                style={{ backgroundImage: `url(${imageUrl})`, }}>
            </div>

             {/*<!-- for medium screen */}
            <div className="hidden md:block lg:hidden h-full relative">
                <div className='absolute hidden md:block lg:hidden w-full top-0 right-0 left-0 z-50'><Header /></div>
                <div className="flex flex-row h-full site-colorr ">
                    <ScrollAnimation className="h-full flex flex-col justify-center text-left">
                        <h4 className="font-sanserif text-left mx-10 text-lg text-white">HELLO I AM</h4>
                        <h4 className="font-mono text-left mx-10 text-2xl text-white my-5">Olehi Davis</h4>
                        <h4 className="font-serif text-left mx-10 text-3xl text-white">
                            Embedded Systems and Software Applications Developer
                        </h4>
                        <a href="#contact" className='px-5 py-3 text-white border-2 border-white font-mono 
                            text-2xl text-center my-5 w-48 mx-10 hover:bg-white hover:text-gray-800'>
                            Hire Me
                        </a>
                    </ScrollAnimation>

                    <div className="w-full h-full bg-center bg-no-repeat bg-cover complement"
                        style={{ backgroundImage: `url(${imageUrl})`, }}>
                            
                    </div>
                </div>
            </div>

             {/*<!-- for small screen */}
            <div className="w-screen h-full bg-center bg-no-repeat bg-cover relative
                md:hidden block"
                style={{ backgroundImage: `url(${imageUrl})`, }}>
                    <Header />
                    <ScrollAnimation className="absolute bottom-0 left-0 right-0 h-96 bg-black bg-opacity-70 trapezium
                        flex flex-col ">
                        <h4 className="font-sanserif text-left mx-7 text-lg text-white mt-32">HELLO I AM</h4>
                        <h4 className="font-mono text-left mx-7 text-2xl text-white my-2">Olehi Davis</h4>
                        <h4 className="font-serif text-left mx-7 text-2xl text-white">
                            Embedded Systems and Software Applications Developer
                        </h4>
                        <a href="#contact" className=' px-5 py-2 text-white border-2 border-white font-mono my-2 
                            text-lg text-center my-5 w-48 mx-7 hover:bg-white hover:bg-opacity-90 hover:text-gray-800'>
                            Hire Me
                        </a>

                    </ScrollAnimation>
            </div>
        </section>

       
    );
}

export default Introduction;