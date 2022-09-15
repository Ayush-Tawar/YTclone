import axios from 'axios'
const BASE_URL = "https://youtube-v31.p.rapidapi.com"
 
const options = {
  params: {
    maxResults: '50'
  },
  headers: {
    'X-RapidAPI-Key': 'cfd41b87bamsh0ed56b1cd0fd203p1643e8jsn9db371d5fe63',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};