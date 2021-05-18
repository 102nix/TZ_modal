import { ReducerConsts } from "../types/ACTypes"
import { IUrlBackEnd } from "../types/stateInterfaces"

export const actions = {
  setPhotos: (val: Array<IUrlBackEnd>) => ({type: ReducerConsts.SET_PHOTOS, val} as const),
  setModal: (comments: string[], url: string) => ({type: ReducerConsts.SET_MODAL, comments, url} as const),
  addComment: (comments: string[]) => ({type: ReducerConsts.ADD_COMMENT, comments} as const),
  getPhotosSaga: () => ({type: ReducerConsts.GET_PHOTOS_SAGA} as const),
  modalPhotoSaga: (id: number) => ({type: ReducerConsts.MODAL_PHOTO_SAGA, id} as const),
  setCurrentPhoto: (photo: IUrlBackEnd) => ({type: ReducerConsts.SET_CURRENT_PHOTO, photo} as const),
  dropUpdate: (photos: Array<IUrlBackEnd>) => ({type: ReducerConsts.SET_DROP_UPDATE, photos} as const)
}

