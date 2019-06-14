import axios from 'axios'

const pantryClient = {
    getAll: async () => {
        let response = await axios.get('/api/v1/pantries/')
        return response.data
    },
    get: async (id) => {
        let response = await axios.get(`/api/v1/pantries/${id}/`)
        return response.data
    },
    create: async (pantry) => {
        let response = await axios.post('/api/v1/pantries/', pantry)
        return response.data
    },
    update: async (pantry) => {
        let response = await axios.patch(`/api/v1/pantries/${pantry.id}/`, pantry)
        return response.data
    },
    delete: async (id) => {
        let response = await axios.delete(`/api/v1/pantries/${id}/`)
        return response.data
    }
}
export default pantryClient