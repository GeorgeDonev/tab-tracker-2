import axios from 'axios'

export defult () => {
  return axios.create({
    baseURL: `http://localhost:8081/`
    // creates axios object pointing to backend @ 8081
  })
}
