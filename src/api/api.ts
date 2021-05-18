import axios from 'axios';
import { ApiGetModal, BaseResponseAPI } from '../types/apiTypes';

const URL: string = "https://boiling-refuge-66454.herokuapp.com/images/";

export const api = {
  getAPIPhotos () {
    return axios.get<BaseResponseAPI>(URL)
  },
  getAPIModal (id: number) {
    return axios.get<ApiGetModal>(URL + id)
  }
}