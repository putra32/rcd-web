import message from './config'

const post = async (values = {}) => {
    const data = await message.post('/message', values)
    return data.data
}

export {post}