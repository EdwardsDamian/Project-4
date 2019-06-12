import axios from 'axios'

const itemClient = {
    getAll: async () => {
        let response = await axios.get('/api/v1/items/')
        return response.data
    },
    get: async (id) => {
        let response = await axios.get(`/api/v1/items/${id}`)
        return response.data
    },
    create: async (item) => {
        let response = await axios.post('/api/v1/items/', item)
        return response.data
    },
    update: async (item) => {
        let response = await axios.patch(`/api/v1/items/${item.id}/`, item)
        return response.data
    },
    delete: async (id) => {
        let response = await axios.delete(`/api/v1/items/${id}`)
        return response.data
    }
}
export default itemClient