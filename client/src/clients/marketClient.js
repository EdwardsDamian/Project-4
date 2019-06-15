import axios from 'axios'

const marketClient = {
    getAll: async (zipCode) => {
        let response = await axios.get(`/api/v1/markets/${zipCode}/`)
        return response.data.results
    }
}
export default marketClient