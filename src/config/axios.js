import axios from 'axios'

export default axios.create(
    {
        // baseURL: 'http://localhost:2020'

        baseURL: 'https://jc9mongoose.herokuapp.com/'
    }
)