import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:5000'
});

export const gettUsers = async ()=> {
    try {
        const response = await api.get('/');
        return response.data;
    } catch (error) {
        console.error(error);
    }
}