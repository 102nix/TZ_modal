import React, { useState } from 'react'
import './Modal.scss'
import Modal from 'react-bootstrap/Modal'
import { ModalContainerPropsType } from '../../types/ModalTypes'
import { useDispatch } from 'react-redux'
import { actions } from '../../redux/photoReducerAC' 

const ModalWin: React.FC<ModalContainerPropsType> = props => {

  const dispatch = useDispatch()

  const handleClose = () => {
    const comments: [] = []
    const url: string = ''

    dispatch(actions.setModal(comments, url))
  }

  const [textareaValue, setTextareaValue] = useState<string>('')
  
  const saveComment = () => {
    const textComments: Array<string> = [...props.comments, textareaValue]
    dispatch(actions.addComment(textComments))
    setTextareaValue('')
  }

  return (
      <Modal show={props.urlModal} onHide={handleClose}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <img src={props.urlModal} alt=""/>
          <div className="card">
            <div className="card-header">
              Комментарии:
            </div>
            <div className="card-body">
              {
                props.comments.map(com => {
                  return<div className="comment">{com}</div>
                })
              }
            </div>
            <textarea 
              className="card-footer" 
              onChange={event => setTextareaValue(event.target.value)}
              value={textareaValue}
              placeholder="Текст комментария..."
              ></textarea>
            <button className="btn btn-success" onClick={saveComment}>Добавить</button>
          </div>
        </Modal.Body>
      </Modal>
  )
}

export default ModalWin

