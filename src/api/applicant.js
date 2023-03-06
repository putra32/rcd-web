import applicant from './config'

const post = async (values = {}) => {
    const data = await applicant.post('/v1/applicant', values)
    return data.data
}

export {
    post
}