import { apiClient } from '../../../constants/axios.interceptor'

export const refreshTokenApi = async (data) => {
  try {
    return await apiClient.post('https://api.escuelajs.co/api/v1', data)
  } catch (error) {
    return error
  }
}

export default refreshTokenApi
