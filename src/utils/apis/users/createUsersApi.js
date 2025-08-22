import apiClient from '../../../constants/axios.interceptor'

export const createUsersApi = async (data) => {
  try {
    return await apiClient.post('/users', data)
  } catch (error) {
    return error
  }
}
