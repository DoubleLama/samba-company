import axios from 'axios'

let env = ''

if (process.env.NODE_ENV === 'development') {
  env = 'http://localhost:3000/'
} else if (process.env.NODE_ENV === 'production') {
  env =
    'http://www.samba-company.fr/' ||
    'http://www.samba-company.com/' ||
    'https://samba-company.herokuapp.com/'
}

export default axios.create({
  baseURL: env,
})
