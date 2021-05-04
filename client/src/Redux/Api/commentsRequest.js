import { axiosInstance } from "./api";

export const deleteOneComment = (id,productId) => {
    return axiosInstance.delete(`/comment/${id}/${productId}`);
  };
export const createComments=(value)=>{
  return axiosInstance.post("/comment",{value})
}  
  