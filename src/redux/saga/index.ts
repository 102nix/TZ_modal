import { all } from 'redux-saga/effects'
import { getPhotosWatcher } from './getPhotosSaga'
import { modalPhotoWatcher } from './modalPhotoSaga'

export function* rootWatcher () {
  yield all ([getPhotosWatcher(), modalPhotoWatcher()])
}