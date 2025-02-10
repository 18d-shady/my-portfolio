import React from 'react';
import Header from './Header'
import ScrollAnimationComponent from './ScrollAnimationComponent';

function Introduction(){
    const imageUrl = require('./display2.jpg');
    //rgb(11, 65, 56);
    return(
        <div className="bg-white land-height">
            <div className='site-colorr hidden md:block'><Header /></div>

            <div className="landing-shape py-28 hidden md:block">
            <ScrollAnimationComponent>
                <h4 className="font-sanserif text-left ms-20 text-4xl text-white">HELLO I AM</h4>
                <h4 className="font-mono text-left ms-20 text-5xl text-white my-5">Olehi Davis</h4>
                <h4 className="font-serif text-left ms-20 text-4xl text-white my-5 w-1/2">
                    Embedded Systems and Software Applications Developer
                </h4>

                <div className="flex-row">
                    <div></div>
                    <div></div>
                </div>

                {/*<div className='triangle'></div>*/}
                </ScrollAnimationComponent>

            </div>
            

            <div className="almost-full rounded-full bg-center absolute top-28 right-20 bg-no-repeat bg-cover
                hidden md:block"
                style={{ backgroundImage: `url(${imageUrl})`, }}>
            </div>

             {/*<!-- for small screen */}
             <div className="w-screen h-full bg-center bg-no-repeat bg-cover relative
                md:hidden block"
                style={{ backgroundImage: `url(${imageUrl})`, }}>
                    <Header />
                    <div className="absolute bottom-0 left-0 right-0 h-96 bg-black bg-opacity-70 trapezium">
                        <h4 className="font-sanserif text-left mx-10 text-xl text-white mt-28">HELLO I AM</h4>
                        <h4 className="font-mono text-left mx-10 text-2xl text-white my-3">Olehi Davis</h4>
                        <h4 className="font-serif text-left mx-10 text-2xl text-white my-3">
                            Embedded Systems and Software Applications Developer
                        </h4>

                    </div>
            </div>
        </div>

       
    );
}

export default Introduction;