import React from 'react'
import { PhotosPropsType } from '../../types/PhotosTypes'
import './Photos.scss'

export const Photos: React.FC<PhotosPropsType> = props => {
  return(
    <div 
      className="photo"
      draggable={props.draggable}
      onDragStart={props.onDragStart}
      onDragOver={props.onDragOver}
      onDrop={props.onDrop} 
    >
       <img src={props.url} onClick={() => props.showModal(props.id)} alt="some img"/>
    </div>
  )
}
