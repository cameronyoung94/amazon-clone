import axios from 'axios'

const instance = axios.create({
 baseURL: 'https://us-central1-clone-31ca3.cloudfunctions.net/api'
})

export default instance