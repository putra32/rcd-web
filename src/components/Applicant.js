import React, { useState } from 'react'
import './styles/Modal.css'
import './styles/Applicant.css'
import { TextField, FilledInput } from '@material-ui/core'
import { createMuiTheme } from '@material-ui/core/styles'
import { purple } from '@material-ui/core/colors'
import SVG from 'react-inlinesvg'
import { post } from '../api/applicant'
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

function Applicant(props) {
    const [values, setValues] = useState({})
    const [loading, setLoading] = useState(false)
    const [pdf, setPdf] = useState()

    let date = new Date()

    const enableLoading = () => {
        setLoading(true)
    }

    const disableLoading = () => {
        setLoading(false)
    }

    const formData = new FormData()
    formData.append('name', values.name)
    formData.append('email', values.email)
    formData.append('notes', values.notes)
    formData.append('applied_job', props.applied)
    formData.append('registered_date', `${date.getFullYear().toString()}-${date.getMonth().toString()}-${date.getDate().toString()}`)
    formData.append('view_resume', pdf)

    const handleSubmit = async (e) => {
        e.preventDefault()
        enableLoading()
        const data = await post(formData)
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
                    values.message = ''
                    props.onClose()
                }
            })
        }
    }

    if (!props.show){
        return null;
    }

    console.log(pdf)

    return (
        <>
            <div className='modal text-left'>
                {/* Modal Content */}
                <div className='modal-content rounded-3x'>
                    <div className='grid grid-cols-2 gap-4'>
                        <div className='w-40 rounded-3xl rounded-tr-none rounded-br-full' style={{background: '#ECC51C'}}>
                            <SVG src='/img/Saly-3.svg' />
                        </div>
                        <div className='flex flex-row-reverse p-8'  onClick={() => props.onClose()}>
                            <SVG src='/img/bi_x-lg.svg' className='cursor-pointer'/>
                        </div>
                    </div>
                    {/* Modal Header */}
                    <div className='p-16 py-2'>
                        <h1 className='m-0 text-2xl'>Join Us!</h1>
                        <p className='py-0'>Get in touch with us, we’re more than happy to meet you!</p>
                    </div>
                    {/* Modal Body */}
                    <div className='px-16 pb-8'>
                        <form className='space-y-8' onSubmit={handleSubmit} encType="multipart/form-data">
                            <div className='block'>
                                <TextField value={values.name} onChange={(e) => setValues({...values, name: e.target.value})} style={{width: '100%'}} color='light' name='name' id='standar-basic' required label='Name' />
                            </div>
                            <div className='block'>
                                <TextField value={values.email} onChange={(e) => setValues({...values, email: e.target.value})} type='email' style={{width: '100%'}} id='standar-basic' required label='Email' />
                            </div>
                            <div className='block'>
                                <TextField value={values.message} onChange={(e) => {
                                    setValues({...values, notes: e.target.value})
                                }} multiline style={{width: '100%'}} color='secondary' id='standar-basic' required label='Message' />
                            </div>
                            <div className='block'>                                
                                <div class="file-input">
                                <input accept="application/pdf" type="file" id="file" class="file" onChange={(e) => setPdf(e.target.files[0])} />
                                <label for="file">
                                    Select file
                                    <p class="file-name"></p>
                                </label>
                                </div>
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

export default Applicant
