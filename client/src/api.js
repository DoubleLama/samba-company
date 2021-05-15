import axios from 'axios'

let env = ''

if (process.env.NODE_ENV === 'development') {
  env = 'http://localhost:3000/'
} else if (
  process.env.NODE_ENV === 'production' &&
  document.location.href.includes('samba-company.com')
) {
  env = 'https://www.samba-company.com/'
} else if (
  process.env.NODE_ENV === 'production' &&
  document.location.href.includes('samba-company.fr')
) {
  env = 'https://www.samba-company.fr/'
} else if (
  process.env.NODE_ENV === 'production' &&
  document.location.href.includes('herokuapp.com')
) {
  env = 'https://samba-company.herokuapp.com/'
}

export default axios.create({
  baseURL: env,
})
