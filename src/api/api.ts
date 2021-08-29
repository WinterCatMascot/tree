import axios from "axios";

const MAIN_URL =
  process.env.REACT_APP_MAIN_URL || "http://localhost:8080/api/v1";

export type ResponseBrand = {
  main: boolean;
  title: string;
  __v: number;
  _id: string;
};
export interface PostBrand {
  title: string;
  main: boolean;
}
export interface UpdateBrand {
  id: string;
  title: string;
  main: boolean;
}
export type Id = string;

export const api = {
  async getBrands() {
    const res = await axios.get(`${MAIN_URL}/brands`);
    return res.data;
  },
  async postBrand(data: PostBrand) {
    const res = await axios.post(`${MAIN_URL}/brands`, data);
    return res.data;
  },
  // async getBrandById(id: Id) {
  //   const res = await axios.get(`${MAIN_URL}/brand/${id}`);
  //   return res.data;
  // },
  async deleteBrandById(id: Id) {
    const res = await axios.delete(`${MAIN_URL}/brand/${id}`);
    return res.data;
  },
  async updateBrandById(data: UpdateBrand) {
    const { id, ...newData } = data;
    const res = await axios.put(`${MAIN_URL}/brand/${id}`, newData);
    return res.data;
  },
};
