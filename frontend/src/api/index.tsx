import axios from "axios";

axios.defaults.baseURL ='http://localhost:3500'

export const getEmployeeAPI= async() => axios.get('/Employee')

export const createEmployeeAPI =async () => axios.post('/Employee')

export const updateEmployeeAPI= async () => axios.patch('/Employee')

export const deleteEmployeeAPI= async () => axios.delete('/Employee.id')
