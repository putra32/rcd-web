import career from './config'

const get = async() => {
    const { data } = await career.get('/v1/career')
    return data
}

const getDetail = async(id) => {
    const { data } = await career.get(`/v1/career/${id}`)
    return data
}

export {get, getDetail}