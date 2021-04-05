import axios from 'axios';

export const createNote = async ({ content,important }) => {
   // try {
        const response = await axios.post('https://dry-bastion-41251.herokuapp.com/api/notes', { content, important });
        const data = await response.data;
        return data;
    //} catch (error) {
     //   console.log(error);
   // }
};