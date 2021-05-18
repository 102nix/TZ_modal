import { IStateType } from '../types/stateInterfaces'
import { ActionsType, ReducerConsts } from '../types/ACTypes'

let initialState: IStateType = {
  photos: null,
  comments: [],
  urlModal: '',
  currentPhoto: { id: 0, url: ''}
}

const photoReducer = (state = initialState, action: ActionsType): IStateType => {
  switch (action.type) {
    case ReducerConsts.SET_PHOTOS:
      return {
        ...state,
        photos: action.val
      }
      case ReducerConsts.SET_MODAL:
        return {
          ...state,
          comments: action.comments,
          urlModal: action.url
        }
        case ReducerConsts.ADD_COMMENT:
          return {
            ...state,
            comments: action.comments,
          }
        case ReducerConsts.SET_CURRENT_PHOTO:
          return {
            ...state,
            currentPhoto: action.photo
          }
        case ReducerConsts.SET_DROP_UPDATE:
          return {
            ...state,
            photos: action.photos
          }
    default: return state
  }
}

export default photoReducer