import apiClient from '../../../constants/axios.interceptor'

export const getUserInfoWithTokenApi = async (data) => {
  try {
    return await apiClient.get('/auth/profile', data)
  } catch (error) {
    return error
  }
}
