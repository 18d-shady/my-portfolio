import React from 'react';

function Contact(){
	return (
		<section id="contact" className="font-mono p-5 lg:p-10 text-white bg-gray-800 text-left">
			<div className="xl:w-4/5 mx-auto">
				<h3 className="text-3xl md:text-4xl font-bold mt-5">Let's Work Together</h3>

				<div className="md:flex md:flex-row justify-start my-10">
					<div className="basis-1/3">
						<div className="flex flex-row my-2">
							<svg className="basis-1/10 h-10 bg-white site-texxt p-2 rounded-full"
							viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
							</svg>
							<div className="basis-8/10 text-left ms-2">
							<p className="text-sm">Phone</p>
							<p>09099249445</p>
							</div>
						</div>

						<div className="flex flex-row my-2">
							<svg className="basis-1/10 h-10 bg-white site-texxt p-2 rounded-full"  
							fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76"/>
							</svg>
							<div className="basis-8/10 text-left ms-2">
							<p className="text-sm">Email</p>
							<p>olehidavis@gmail.com</p>
							</div>
						</div>

						<div className="flex flex-row my-2">
							<svg className="basis-1/10 h-10 bg-white site-texxt p-2 rounded-full"
							viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />  <circle cx="12" cy="10" r="3" /></svg>
							<div className="basis-8/10 text-left ms-2">
							<p className="text-sm">Address</p>
							<p>FCT, Abuja, Nigeria</p>
							</div>
						</div>
					</div>

					<div className="basis-1/3 my-10 md:my-0 text-xl">
						<p className="text-sm">Socials</p>
						<a href="https://github.com/18d-shady" className="block mt-3 hover:text-green-300">
							<p className="inline-block">GitHub</p>
							<svg className="h-6 w-6 inline-block"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  
								<path stroke="none" d="M0 0h24v24H0z"/>  
								<line x1="17" y1="7" x2="7" y2="17" />  
								<polyline points="8 7 17 7 17 16" />
							</svg>
							<hr className='w-1/2 border-t border-dotted border-gray-300'></hr>
						</a>
						<a href="https://www.linkedin.com/in/davis-olehi-8777951a0" className="block mt-3 hover:text-green-300">
							<p className="inline-block">LinkedIn</p>
							<svg className="h-6 w-6 inline-block"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  
								<path stroke="none" d="M0 0h24v24H0z"/>  
								<line x1="17" y1="7" x2="7" y2="17" />  
								<polyline points="8 7 17 7 17 16" />
							</svg>
							<hr className='w-1/2 border-t border-dotted border-gray-300'></hr>
						</a>

						<a href="https://www.instagram.com/olehidavis?igsh=czM3azlhbmtka2R2" className="block mt-3 hover:text-green-300">
							<p className="inline-block">Instagram</p>
							<svg className="h-6 w-6 inline-block"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  
								<path stroke="none" d="M0 0h24v24H0z"/>  
								<line x1="17" y1="7" x2="7" y2="17" />  
								<polyline points="8 7 17 7 17 16" />
							</svg>
							<hr className='w-1/2 border-t border-dotted border-gray-300'></hr>
						</a>

					</div>

					<div className='basis-1/3 text-lg'>
						<p>Designed and Developed</p>
						<p>by <span className="text-green-300">Olehi Davis</span></p>

						<p className='text-sm my-5'> @ 2025</p>

					</div>
				</div>
			</div>

		</section>

	);
}
export default Contact;