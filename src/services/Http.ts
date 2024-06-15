import axios from 'axios'

export const httpInstance = () => {
    const instance = axios.create({
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': '*',
            'Access-Control-Allow-Credentials': 'true',
            'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT, DELETE',
        },
    })
    
    instance.defaults.timeout = 20000 
    instance.defaults.headers.common['Accept-Language'] = 'en'

    instance.interceptors.request.use(
        (request) => {
            return request
        },
        (error) => {
            return Promise.reject(error)
        }
    )

    instance.interceptors.response.use(
        (response) => {
            return response
        },
        (error) => {
            return Promise.reject(error)
        }
    )

    return instance
}
