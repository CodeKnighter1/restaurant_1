import axios from 'axios';

   const $api = axios.create({
     baseURL: 'http://localhost:5000/api', // Portni 5000 ga o'zgartirdik
     withCredentials: true,
   });

   export default $api;