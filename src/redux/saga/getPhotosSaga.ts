import { call, put, takeEvery } from 'redux-saga/effects'
import { api } from '../../api/api'
import { Action } from 'redux'
import { actions } from '../photoReducerAC'
import { ReducerConsts } from '../../types/ACTypes'

function* getPhotosWorker (action: Action) {
  try {
    const response = yield call (api.getAPIPhotos)
    yield put (actions.setPhotos(response.data))
  } catch (err) {
    console.log(err)
  }
}

export function* getPhotosWatcher () {
  yield takeEvery (ReducerConsts.GET_PHOTOS_SAGA, getPhotosWorker)
}