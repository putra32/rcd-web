import React, { useState } from 'react'
import './styles/Modal.css'
import { TextField } from '@material-ui/core'
import { createMuiTheme } from '@material-ui/core/styles'
import { purple } from '@material-ui/core/colors'
import SVG from 'react-inlinesvg'
import { post } from '../api/message'
import Swal from 'sweetalert2'

// eslint-disable-next-line no-unused-vars
const theme = createMuiTheme({
    palette: {
        primary: {
            main: purple[500],
        },
        secondary: {
            main: '#067E9B'
        }
    }
})

function Modal(props) {
    const [values, setValues] = useState({})
    const [loading, setLoading] = useState(false)

    const enableLoading = () => {
        setLoading(true)
    }

    const disableLoading = () => {
        setLoading(false)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        enableLoading()
        const data = await post(values)
        if (data.success) {
            disableLoading()
            Swal.fire({
                icon: 'success',
                title: 'Success',
                text: 'Message has been sent',
                confirmButtonText: 'OK',
                allowOutsideClick: false,
            }).then((result) => {
                if (result.isConfirmed) {
                    setValues({})
                    values.name = ''
                    values.email = ''
                    values.subject = ''
                    values.message = ''
                    props.onClose()
                }
            })
        }
    }

    if (!props.show){
        return null;
    }

    return (
        <>
            <div className='modal'>
                {/* Modal Content */}
                <div className='modal-content rounded-3xl'>
                    <div className='grid grid-cols-2 gap-4'>
                        <div className='w-40 rounded-3xl rounded-tr-none rounded-br-full' style={{background: '#ECC51C'}}>
                            <SVG src='/img/Saly-3.svg' />
                        </div>
                        <div className='flex flex-row-reverse p-8'>
                            <SVG src='/img/bi_x-lg.svg' className='cursor-pointer' onClick={() => props.onClose()} />
                        </div>
                    </div>
                    {/* Modal Header */}
                    <div className='p-16 py-2'>
                        <h1 className='m-0 text-2xl'>LET???S TALK!</h1>
                        <p className='py-0'>We will get back to you within one to two days through email. Also please
                        don't forget to check your spam account just in case!</p>
                    </div>
                    {/* Modal Body */}
                    <div className='px-16 pb-8'>
                        <form className='space-y-8' onSubmit={handleSubmit}>
                            <div className='block'>
                                <TextField value={values.name} onChange={(e) => setValues({...values, name: e.target.value})} style={{width: '100%'}} color='light' name='name' id='standar-basic' required label='Name' />
                            </div>
                            <div className='block'>
                                <TextField value={values.email} onChange={(e) => setValues({...values, email: e.target.value})} type='email' style={{width: '100%'}} id='standar-basic' required label='Email' />
                            </div>
                            <div className='block'>
                                <TextField value={values.subject} onChange={(e) => setValues({...values, subject: e.target.value})} style={{width: '100%'}} id='standar-basic' required label='Subject' />
                            </div>
                            <div className='block'>
                                <TextField value={values.message} onChange={(e) => setValues({...values, message: e.target.value})} multiline style={{width: '100%'}} color='secondary' id='standar-basic' required label='Message' />
                            </div>
                            <button type='submit' className='px-14 btn rounded-full text-white bg-rcd_color_navy h-12 focus:outline-none hover:bg-rcd_color_navy-light font-bold'>{!loading ? "SEND REQUEST" : "LOADING..."}</button>
                        </form>
                    </div>
                    {/* Modal Footer */}
                    {/* <div className='px-16 py-4'>
                        <button onClick={() => props.onClose()} className='button'>Close</button>
                    </div> */}
                </div>
            </div>
        </>
    )
}

export default Modal
