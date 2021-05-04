import { axiosInstance } from "./api";

export const getGoods = (sortType) => {
  if (sortType === undefined) {
    sortType = "id";
  }
  return axiosInstance.get(`/product?sortBy=${sortType}`);
};
export const createGoods=(info)=>{
  return axiosInstance.post("/product",{info})
}
export const getOneGoods = (id) => {
  return axiosInstance.get(`/product/${id}`);
};
