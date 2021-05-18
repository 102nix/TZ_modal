import { call, put, takeEvery } from 'redux-saga/effects'
import { api } from '../../api/api'
import { ReducerConsts } from '../../types/ACTypes'
import { IgetAPIModal } from '../../types/sagaInterfaces'
import { actions } from '../photoReducerAC'

function* modalPhotoWorker (action: IgetAPIModal) {
  try {
    const response =  yield call (api.getAPIModal, action.id)
    let comments: string[] = []
    if (response.data.comments.length > 0) {
      comments = [response.data.comments[0].text]
    }
    const url: string = response.data.url
    yield put (actions.setModal(comments, url))
  } catch (err) {
    console.log(err)
  }
  
}

export function* modalPhotoWatcher () {
  yield takeEvery (ReducerConsts.MODAL_PHOTO_SAGA, modalPhotoWorker) 
}

