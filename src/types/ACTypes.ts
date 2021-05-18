import { actions } from "../redux/photoReducerAC"

export enum ReducerConsts {
  SET_PHOTOS = 'SET_PHOTOS',
  SET_MODAL = 'SET_MODAL',
  ADD_COMMENT = 'ADD_COMMENT',
  GET_PHOTOS_SAGA = 'GET_PHOTOS_SAGA',
  MODAL_PHOTO_SAGA = 'MODAL_PHOTO_SAGA',
  SET_CURRENT_PHOTO = 'SET_CURRENT_PHOTO', 
  SET_DROP_UPDATE = 'SET_DROP_UPDATE'
}

type PropertiesType<T> = T extends {[key: string]: infer U}? U : never
export type ActionsType = ReturnType<PropertiesType<typeof actions>>
