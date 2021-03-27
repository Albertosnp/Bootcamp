import axios from 'axios';

export const createNote = async ({ title, body, userId }) => {
   // try {
        const response = await axios.post('https://jsonplaceholder.typicode.com/posts', { title, body, userId });
        const data = await response.data;
        return data;
    //} catch (error) {
     //   console.log(error);
   // }
};