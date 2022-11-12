import axios from 'axios';

const instance = axios.create({
   baseURL: 'https://api.github.com/repos/babboe1',
});


export default instance;
