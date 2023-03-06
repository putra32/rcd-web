import React from 'react'
import Slider from 'infinite-react-carousel'
import '../components/styles/Coursel.css'

function Coursel() {
    const settings =  {
        arrows: false,
        dots: true,
        autoplay: true,
      };
    return (
        <div>
         <Slider { ...settings }>
          <div>
              <div style={{background: '#ECC51C', height: '26.25rem'}} className="grid-cols-1 grid md:grid-cols-2 py-1 md:px-36">
                <div className="md:text-left">
                    <h3 className='md:pt-24 pb-8 text-3xl font-bold'>MASATA(Masyarakat Sadar Wisata)</h3>
                    <p className='pb-20 tracking-widest text-lg'>Re-design Android Apps, CMS</p>
                    <a className='md:pb-16' href='/blank' target='_blank'>View Detail -{'>'}</a>
                </div>
                <div className='md:flex flex-row-reverse pt-8'>
                    <img className='mx-auto w-1/2 md:w-full xl:w-3/4 lg:w-full' src='/img/masta-p.svg' alt='gambar' />
                </div>
              </div>
          </div>
          <div>
              <div style={{background: '#ECC51C'}} className="grid-cols-1 grid md:grid-cols-2 py-1 md:px-36">
                <div className="md:text-left">
                    <h3 className='md:pt-24 pb-8 text-3xl font-bold'>KORMI(Komite Olahraga Rekreasi Masyarakat Indonesia)</h3>
                    <p className='pb-20 tracking-widest text-lg'>Re-design Android Apps, CMS. </p>
                    <a className='md:pb-16' href='/blank' target='_blank'>View Detail -{'>'}</a>
                </div>
                <div className='md:flex flex-row-reverse pt-8'>
                    <img className='mx-auto w-1/2 md:w-full xl:w-3/4 lg:w-full' src='/img/kormi-p-1.svg' alt='gambar' />
                </div>
              </div>
          </div>
          <div>
              <div className="grid grid-cols-1 md:grid-cols-2 py-1 md:px-36 bg-rcd_color_blue-dark">
                <div className="md:text-left">
                    <h3 className='md:pt-24 pb-8 text-3xl font-bold'>Pesantren Go Digital</h3>
                    <p className='pb-20 tracking-widest text-lg'>Website Builder Design</p>
                    <a className='md:pb-16' href='/blank' target='_blank'>View Detail -{'>'}</a>
                </div>
                <div className='md:flex flex-row-reverse md:pb-24 md:mb-16'>
                    <img className='mx-auto w-1/2 md:w-full xl:w-3/4 mt-4 lg:w-full' style={{marginBottom: '48rem'}} src='/img/pgd-1.svg' alt='gambar' />
                </div>
              </div>
          </div>
        </Slider>
        </div>
    )
}

export default Coursel