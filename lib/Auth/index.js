import axios from "axios"

export const loginUser = async (username, password) => {
    const { data } = await axios.post('/api/login', {username, password})
    return data
}

export const getUserHomepage = async () => {
    const { data } = await axios.get('/api/homepage')
    return data
}