import { Action } from 'redux'
import { AxiosResponse } from 'axios'
import { ApiGetModal } from './apiTypes'

export interface IgetAPIModal extends Action {
  id: number
  getAPIModal (id: number): Promise<AxiosResponse<ApiGetModal>>
}