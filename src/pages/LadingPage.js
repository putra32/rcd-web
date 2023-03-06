import React, { useState } from 'react'
import Coursel from '../components/Coursel'
import Header from '../components/Header'
import Modal from '../components/Modal'
import Footer from '../components/Footer'

function LadingPage() {
    const [show, setShow] = useState(false)
    const [location, setLocation] = useState("")
    
    const handlerGetLocation = () => {
        fetch('https://extreme-ip-lookup.com/json/')
            .then(res => res.json())
            .then(response => {
                console.log("Country: ", response.country);
                setLocation(response.country);
            })
            .catch((data, status) => {
                console.log('Request failed');
            })
    }
    handlerGetLocation()

    return (
        <>
        <div className="bg-rcd_color_blue">
            <Header />
                    <div className="px-4 md:px-32 md:pt-24 text-center">
                    <h1 className="text-7xl tracking-wide">We Are Reka Cipta Digital</h1>
                    <p className="text-2xl md:pt-8 italic tracking-widest mt-4">“your next-door digital consultant”</p>
                    <img src="/img/heros-3.png" alt="saly" className="mx-auto" />
                    </div>
            </div>
            <div className="text-center px-2 main" id="about">
                <h2 className="text-4xl font-bold py-16">About<hr style={{borderColor: '#157E9B', background: '#157E9B'}} className="w-20 mx-auto border-2 mt-2" /></h2>

                <p className="text-2xl">RCD is a team full of passionate developers whose ready to helps you</p>
                <p className="text-2xl leading-10 pb-24">to digitize your company through creative communication in impactful ways</p>
                <div className='pb-8'>
                    <a href={location === 'Indonesia' ? '/other/pdf/RCD Company Profile 2021.pdf' : '[ENG] RCD Company Profile 2021.pdf'} download><button style={{background: '#067E9B'}} className="inline-block px-8 btn text-white py-4 focus:outline-none hover:bg-rcd_color_blue-light rounded-md">
                    See Our Company Profile
                    </button></a>
                </div>
                <hr className="mx-auto" />
            </div>
            <div className="px-2 text-center" id='what-we-do' style={{scrollBehavior: 'smooth'}}>
            <h2 className="text-4xl font-bold py-16">What We Do<hr style={{borderColor: '#157E9B', background: '#157E9B'}} className="w-20 mx-auto border-2 mt-2" /></h2>
            <div className="grid md:grid-flow-col md:grid-cols-2 md:grid-rows-2 gap-y-24 md:px-48">
                <div className='space-y-4'>
                    <img alt="web" src="/img/web.svg" className="mx-auto" />
                    <h3 className='font-bold text-lg'>Website Development</h3>
                    <p>Web Design, E-Commerce,</p>
                    <p>CMS</p>
                </div>
                <div className='space-y-4'>
                    <img alt="web" src="/img/it.svg" className="mx-auto" />
                    <h3 className='font-bold text-lg'>IT Infrastructure</h3>
                    <p>Server Installation, Network</p>
                    <p>Application, IOT</p>
                </div>
                <div className='space-y-4'>
                    <img alt="web" src="/img/mobile.svg" className="mx-auto" />
                    <h3 className='font-bold text-lg'>Mobile Application</h3>
                    <p>Android application, IOS, </p>
                    <p>Web Apps</p>
                </div>
                <div className='space-y-4'>
                    <img alt="web" src="/img/dmm.svg" className="mx-auto" />
                    <h3 className='font-bold text-lg'>Digital Marketing Management</h3>
                    <p>Social Media  Campaign,</p>
                    <p>E-Commerce Management</p>
                </div>
            </div>
            </div>
            <div className="px-4 text-center" id='tech-stack'>
            <h2 className="text-4xl font-bold py-16">Technology Stack<hr style={{borderColor: '#157E9B', background: '#157E9B'}} className="w-28 mx-auto border-2 mt-4" /></h2>
            <img src="/img/gas 2.svg" alt='technology' className="mx-auto" />
            </div>
            <div className="pt-14 text-center" id="recent-projects">
            <h2 className="text-4xl font-bold py-16">Recent Projects<hr style={{borderColor: '#157E9B', background: '#157E9B'}} className="w-28 mx-auto border-2 mt-4" /></h2>
                <Coursel />
            </div>
            <div className='pt-36 pb-24 text-center'>
                <h1 className='text-4xl' style={{color: '#067E9B'}}>Mind to discuss your project with us?</h1>
                <p className='text-2xl tracking-widest py-4'>Challenge us. We want to work with you to create the really cool stuff.</p>
                <div>
                    <button style={{background: '#067E9B'}} onClick={() => setShow(true)} className="inline-block px-8 btn text-white py-4 focus:outline-none hover:bg-rcd_color_blue-light">
                        Let’s Talk
                    </button>
                    <Modal onClose={() => setShow(false)} show={show} />
                </div>
            </div>
            <Footer />
            </>
    )
}

export default LadingPage;
