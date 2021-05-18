import React from 'react';
import './About.scss';

const About = () => {
  return (
      <div className="about">
        <div className="about__title">
          Техническое задание.
        </div>
        <div className="about__body">
          <p>
            Необходимо получить список фотографий с бекенд: 
            <span>"https://boiling-refuge-66454.herokuapp.com/images/".</span> 
          </p>
          <p>
            Отобразить фотографии на странице.
          </p> 
          <p>
            При клике на фото - открывается модальное окно с подробностями по данной фотографии.
          </p>
          <p>
            Использованы методы <strong>Drag-and-drop</strong>: фотографии можно менять местами.
          </p>
          <p>
            Информация для модального окна по адресу: <span>"https://boiling-refuge-66454.herokuapp.com/images/id".</span>  
          </p>
          <p>
            Разрешить возможность добавлять комментарии к фото в модальном окне.
          </p>
        </div>
      </div>
  )
}
export default About