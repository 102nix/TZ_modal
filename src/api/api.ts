import axios from 'axios';
import { ApiAllFotosType, ApiGetModal } from '../types/apiTypes';

const URL: string = "https://boiling-refuge-66454.herokuapp.com/images/";

export const api = {
  getAPIPhotos () {
    return axios.get<ApiAllFotosType>(URL)
  },
  getAPIModal (id: number) {
    return axios.get<ApiGetModal>(URL + id)
  }
}