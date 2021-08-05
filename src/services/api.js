import axios from 'axios'

const api = axios.create({
  baseURL: 'https://tomcat.fiecdev.com.br/template/'
})

export default api