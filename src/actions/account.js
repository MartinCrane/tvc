import axios from 'axios'
import serverURL from '../data/config'
export function accountLogin() {

  return axios.post(serverURL + '/sessions',
    {
    method: 'post',
    session: {
      email: `${this.state.email}`,
      password: `${this.state.password}`
    }
  }).then((response) => {
    let jwt = response.data.jwt
    localStorage.setItem(`mcjwt`, jwt)
  }).catch((response) => {
    return response
  });
}

export function accountRegister() {
  return axios.post(serverURL + '/registration',
    {
    method: 'post',
    registration: {
      email: `${this.state.email}`,
      password: `${this.state.password}`,
      username: `${this.state.username}`
    }
  }).then((response) => {
    let jwt = response.data.jwt
    localStorage.setItem(`mcjwt`, jwt)
  }).catch((response) => {
    return response
  });
}
