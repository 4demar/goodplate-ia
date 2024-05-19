import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://api.clarifai.com',
  headers: {
    'Authorization': 'Key 3f73e8cfd9964feb88eda7b0b0925823'
  }
})