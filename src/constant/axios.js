import axios from 'axios';

const instance = axios.create({
    baseURL:"https://coins.llama.fi"
})

export default instance;