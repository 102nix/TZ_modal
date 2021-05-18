import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
//reducer & AC:
import { actions } from '../../redux/photoReducerAC'
//components:
import { Photos } from './Photos'
import ModalWin from '../Modal/ModalWin'
import Loader from '../Loader/Loader'
//types:
import { AppStateType } from '../../redux/store'
import { IUrlBackEnd } from '../../types/stateInterfaces'
// function for method sort:
import { sortsEl } from '../../sort'

export const PhotosContainer: React.FC = () => {

  const dispatch = useDispatch()
  
  const photos = useSelector((state: AppStateType) => state.photoReducer.photos)
  const comments = useSelector((state: AppStateType) => state.photoReducer.comments)
  const urlModal = useSelector((state: AppStateType) => state.photoReducer.urlModal)
  const currentPhoto = useSelector((state: AppStateType) => state.photoReducer.currentPhoto)
  
  if (photos === null) dispatch(actions.getPhotosSaga())

  const showModal = (id: number) => {
    dispatch(actions.modalPhotoSaga(id))
  }

  const dragStartHadler = (photo: IUrlBackEnd) => {
    dispatch(actions.setCurrentPhoto(photo))
  }

  const dragOverHandler = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault()
  }

  const dropHandler = (event: React.DragEvent<HTMLDivElement>, photo: IUrlBackEnd) => {
    event.preventDefault()

    let dropResults: Array<IUrlBackEnd> | undefined = photos?.map((element: IUrlBackEnd) => {
      if (element.id === photo.id) return {...element, id: currentPhoto.id}
      if (element.id === currentPhoto.id) return {...element, id: photo.id}
      return element
    })

    if (dropResults === undefined) dropResults = [{id: 0, url: ''}]

    dispatch(actions.dropUpdate(dropResults))
  }

  return (
    <div className="photos">
      { photos === null &&
        <Loader/>
      }
      { photos !== null &&
        photos.sort(sortsEl).map(el => {
          return <Photos
            key={el.id}
            url={el.url}
            id={el.id}
            showModal={showModal}
            draggable={true}
            onDragStart={() => dragStartHadler(el)}
            onDragOver={(event: React.DragEvent<HTMLDivElement>) => dragOverHandler(event)}
            onDrop={(event: React.DragEvent<HTMLDivElement>) => dropHandler(event, el)}  
          />
        })
      } 
      <ModalWin
        urlModal={urlModal}
        comments={comments}
        // addComment={actions.addComment}
        // setModal={actions.setModal}
      />

    </div>
  )
}

