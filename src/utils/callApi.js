import axios from 'axios'

const API_URL = 'https://5d70c0acd3448a001411ae65.mockapi.io'

export default function callApi(endPoint, method = 'GET', body) {
  return axios({
    method: method,
    url: `${API_URL}/${endPoint}`,
    data: body
  }).catch((err) => {
    console.log(err);
  })
}