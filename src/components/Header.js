/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import Modal from './Modal'
import SVG from 'react-inlinesvg'
import './styles/Header.css'


function Header() {
    const [show, setShow] = useState(false)
    const [isOpenList, setIsOpenList] = useState(false)
    const [sideMenu, setSideMenu] = useState('')
    const [theposition, setTheposition] = useState(0)

    const onOpenList = () => {
            setIsOpenList(false)
            setSideMenu('menu-close')
        if (!isOpenList) {
            setIsOpenList(true)
            setSideMenu('menu-open')
        }
    }

    useEffect(() => {
        getHightScroll()
    }, [])

    const getHightScroll = () => {
        window.addEventListener("scroll", () => {
            setTheposition(window.scrollY)
        })
    }

    return (
        <div>
            <div className={`grid grid-cols-2 md:grid-cols-3 px-4 md:px-32 ${theposition >= 150 ? "navbar" : null} z-50`}>
                <div className="py-4 hidden md:flex sticky">
                <ul className="flex flex-row space-x-14">
                    <Link to="/"><a className='font-bold'>Home</a></Link>
                    <li><a className='inline-block font-bold' href="/#what-we-do">What We Do</a></li>
                    <Link to="/career"><a href="/career" className='font-bold'>Carreers</a></Link>
                </ul>
                </div>
                <div className="md:mx-auto py-2">
                    <a href="/"><img src="/img/logo-rcd.svg" alt="" /></a>
                </div>
                <div className="hidden md:flex flex-row-reverse py-2">
                        <button onClick={() => setShow(true)} className="px-8 btn rounded-lg text-white bg-rcd_color_navy h-10 focus:outline-none hover:bg-rcd_color_navy-light">
                        Let’s Talk
                        </button>
                        <Modal onClose={() => setShow(false)} show={show} />
                    </div>
                <div className="flex flex-row-reverse py-4 md:hidden">
                    <SVG src='/img/ellipsis-v-solid.svg' className='w-2 cursor-pointer' onClick={onOpenList} />
                </div>
                    { isOpenList ? (<div className={`relative bg-rcd_color_blue  py-2 px-2 md:hidden z-50 ${sideMenu}`}>
                        <ul className='space-y-4'>
                            <li><a href="/" className='font-bold'>Home</a></li>
                            <li><a className='inline-block font-bold' href="/#what-we-do">What We Do</a></li>
                            <li><a href="/career" className='font-bold'>Carreers</a></li>
                        </ul>
                    </div>) : null
                    }
                    
                    </div>
                    
                <div className="bottom-4 right-4 fixed z-50">
                    <a href="https://api.whatsapp.com/send?phone=628119772513&text=Halo" target="_blank" rel="noreferrer">
                        <SVG src="/img/whatsapp 2.svg" />
                    </a>
                </div>
        </div>
    )
}

export default Header
