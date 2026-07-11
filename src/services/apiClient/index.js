import axios from 'axios'
export const apiClient  = axios.create({
    baseURL:"https://dummyjason.com" , timeout:10000 , 
    headers:{"Content-Type":"application/json"} 
})
 
export const getData = async (endpoint) => {
 try{ const response = await apiClient.get(endpoint)
  return response.data } catch (error){
    return error
  }
}
export const postData = async (endpoint) => {
 try{ const response = await apiClient.post(endpoint)
  return response.data } catch (error){
    return error
  }
}
export const putData = async (endpoint) => {
 try{ const response = await apiClient.put(endpoint)
  return response.data } catch (error){
    return error
  }
}
export const deleteData = async (endpoint) => {
 try{ const response = await apiClient.delete(endpoint)
  return response.data } catch (error){
    return error
  }
}