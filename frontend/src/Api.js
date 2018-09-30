import axios from 'axios'

export default() => {
  return axios.create({
    baseURL: `http://172.31.26.247:8081`
  })
}
