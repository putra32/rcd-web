import React, {useState, useEffect} from 'react'
import queryString from 'query-string'
import {useLocation } from 'react-router-dom'
import SVG from 'react-inlinesvg'
import Header from '../components/Header'
import Applicant from '../components/Applicant'
import { getDetail } from "../api/career"
import {convertToRaw, convertFromHTML, convertFromRaw,ContentState, EditorState, Editor} from 'draft-js'


function DetailCareerPage(props) {
    const [show, setShow] = useState(false)
    const [detail, setDetail] = useState({})
    const { search } = useLocation()
    const [copy, setCopy] = useState(false)
    const query = queryString.parse(search)

    let id = props.match.params.id

    const getDetailCareer = async () => {
        const {data, succees} = await getDetail(id)
        if(succees) {
            setDetail(data)
        }
    }

    useEffect(() => {
        getDetailCareer()
    },[id])
    return (
        <div>
            <div className="bg-rcd_color_blue h-screen ">
            <Header />
            <div className='shadow-lg bg-white mx:4 md:mx-32 p-9 mt-10'>
                <div className="grid grid-cols-2">
                    <h1 className="font-semibold text-4xl">{detail.title}</h1>
                    <div className="flex flex-row-reverse">
                        <h5 className="flex my-auto text-rcd_color_green">Available<span className="my-auto ml-2"><SVG src="/img/available.svg" /></span></h5>
                    </div>
                </div>
                <div className=" py-7">
                    <button onClick={() => setShow(true)} className="px-4 btn rounded-lg text-sm text-white bg-rcd_color_navy h-10 focus:outline-none hover:bg-rcd_color_navy-light">
                    Apply for this job
                    </button>
                    <button onClick={() => {
                        navigator.clipboard.writeText(window.location.href)
                        setCopy(true)
                        }} className="px-4 ml-4 rounded-lg text-sm h-10 focus:outline-none" style={{border: 'solid 1px #000'}}>
                        {copy ? <SVG className="inline-block mr-4" width="14px" src="/img/check-solid.svg" /> : <SVG className="inline-block mr-4" width="14px" src="/img/upload-solid.svg" />} Share Job Detail
                    </button>
                    <Applicant onClose={() => setShow(false)} show={show} applied={detail.title} />
                </div>
                <hr className="text-gray-200" />
                <div className="flex my-5">
                    <SVG src="/img/work.svg" />
                    <p className="my-auto ml-4">{detail.location}</p>
                </div>
                <hr className="text-gray-200" />
                <div className="py-4 text-sm space-y-2">
                    <p>Registration date apply from</p>
                    <p>{detail.registration_date} to {detail.end_registration}</p>
                </div>
                <hr className="text-gray-200" />
                <div className="mt-5">
                    <h4 className="text-lg mb-6">Description</h4>
                    <div dangerouslySetInnerHTML={{__html: detail.requirment}} className="text-xs" />
                </div>
            </div>
            </div>
        </div>
    )
}

export default DetailCareerPage
