import React from 'react'
import SVG from 'react-inlinesvg'
import { Link } from 'react-router-dom'
// import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

function Footer() {
    return (
        <div>
            <div className='bg-rcd_color_blue px-1 md:px-36 pt-24 pb-24'>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-1'>
                    <div className='mx-auto md:m-0'>
                        <img src='/img/logo-footer.svg' alt='logo-footer' />
                        <p className='text-left pt-4 text-sm'>&copy; 2021 RCD. All rights reserved</p>
                    </div>
                    <div className='md:text-left text-center space-y-4 mt-4 md:mt-0'>
                        <h3 className='block text-xl'>Quick Links</h3>
                        <a href='/#about' className='block text-sm'>About</a>
                        <a href='/#what-we-do' className='block text-sm'>What We Do</a>
                        <a href='/#tech-stack' className='block text-sm'>Technology Stack</a>
                        <a href='/#recent-projects' className='block text-sm'>Recent Projects</a>
                        <Link to='/career' className='block text-sm'>Careers</Link>
                    </div>
                    <div className='md:text-left text-center space-y-4 mt-4 md:mt-0'>
                        <h3 className='text-xl'>Reach us</h3>
                        <p className='md:inline-block lg:block'><SVG className='inline-block mr-4' src='/img/icon/email-icon.svg' alt='email-icon' />hello@rekaciptadigital.id</p>
                        <p className='md:inline-block lg:block'><SVG className='mr-4 inline-block' src='/img/icon/phone-icon.svg' alt='phone-icon' />+62 811 977 2513</p>
                        <p className='md:inline-block lg:block'><SVG className='mr-4 inline-block' src='/img/icon/location-icon.svg' alt='location-icon' />Infiniti Office MTH Square GF A4/A <br /><span className='ml-9'>Jl. Letjen M.T. Haryono No.Kav 10,</span> <br /><span className='ml-9'>Cawang, Jakarta Timur 13330</span> </p>
                        <a className='underline md:inline-block lg:block' rel='noreferrer' href='https://www.linkedin.com/company/reka-cipta-digital' target='_blank'><SVG className='mr-4 inline-block' src='/img/icon/linkind.svg' alt='linkind' />reka-cipta-digital</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
