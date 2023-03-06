import React, { useEffect, useState } from 'react'
// import Modal from '../components/Modal'
import SVG from 'react-inlinesvg'
import Footer from '../components/Footer'
import Header from '../components/Header'
import '../components/styles/Career.css'
import { get } from '../api/career'
import Applicant from '../components/Applicant'
import { Link, useLocation } from 'react-router-dom'

function CareerPage() {
    const [show, setShow] = useState(false)
    const [careers, setCareers] = useState([])
   

    const getCareer = async () => {
        const data = await get()
        setCareers(data.data)
    }

    useEffect(() => {
        getCareer()
    }, [])

    console.log(careers)

    return (
        <div>
            <div className="bg-rcd_color_blue">
            <Header />
                    <div className='grid md:grid-cols-2 gap-8 px-4 md:px-32 pt-4 md:pt-40'>
                    <div className='space-y-4'>
                        <p>We are looking for extraordinary talents  to join our team because we grow people through our company</p>
                        <h2 className='text-4xl font-bold'>So, do not worry to start small with us and let’s grow bigger together!</h2>
                        <a href='#available-position' className="md:inline-block px-8 block btn text-white py-4 rounded-full focus:outline-none bg-rcd_color_navy hover:bg-rcd_color_navy-light">Available Positions</a>
                    </div>
                    <div className='pb-32 flex flex-row-reverse'>
                        <img src='/img/careers-heros.svg' alt='careers-heros' />
                    </div>
                    </div>
                </div>
                    <div id="available-position" className='py-36 text-center'>
                        <h2 className='text-2xl font-bold'>OUR AVAILABLE POSITIONS</h2>
                        {careers ? (Object.values(careers).map(career => (
                        <Link to={`/detail-career/${career.id}`}>
                            <div className='shadow-lg mx-auto px-4 hover:bg-rcd_color_blue rounded-xl mt-8 box-career'>
                                <h3 className='text-left py-8'>{career.title}</h3>
                                <div className='flex space-x-4 pb-4 font-bold'>
                                    <SVG src='/img/icon/fluent_people-team-24-filled.svg' />
                                    <SVG src='/img/icon/ic_baseline-work.svg' /><span className='text-gray-500'>{career.work_schedule}</span>
                                    <SVG src='/img/icon/bx_bxs-map.svg' /><span className='text-gray-500'>{career.location}</span>
                                </div>
                            </div>
                        </Link>
                            ))) : (
                        <p className='font-light pt-36 text-2xl italic tracking-widest'>"We are sorry there’s no available positions at the moment”</p>
                            )}
                    </div>
                    <Footer />
                    
        </div>
    )
}

export default CareerPage
