import { $authHost, $host } from "./index";
import {jwtDecode} from 'jwt-decode';

export const registration = async (email, password) => {
    const {data} = await $host.post('/user/registration', {email, password, role: 'ADMIN'})
    localStorage.setItem('token', data.token)
    return jwtDecode(data.token)
}

export const login = async (email, password) => {
    const {data} = await $host.post('/user/login', {email, password})
    localStorage.setItem('token', data.token)
    return jwtDecode(data.token)
}

export const check = async (email, password) => {
    const {data} = await $authHost.get('/user/auth')
    localStorage.setItem('token', data.token)
    return jwtDecode(data.token)
}