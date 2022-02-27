import axios from 'axios';

export const baseUrl = 'https://bayut.p.rapidapi.com'




export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': '04cf074643msh00d27b5cb457308p176ce2jsnc385a526df1a'
        } 
    });

    return data;
}
