import axios from 'axios'

const userprofileClient = {
   getAll: async () => {
       let response = await axios.get('/api/v1/userprofiles/')
       return response.data
   },
   get: async (id) => {
       let response = await axios.get(`/api/v1/userprofiles/${id}`)
       return response.data
   },
   create: async (userprofile) => {
       let response = await axios.post('/api/v1/userprofiles/', userprofile)
       return response.data
   },
   update: async (userprofile) => {
       let response = await axios.patch(`/api/v1/userprofiles/${userprofile.id}/`, userprofile)
       return response.data
   },
   delete: async (id) => {
       let response = await axios.delete(`/api/v1/userprofiles/${id}`)
       return response.data
   }
}
export default userprofileClient