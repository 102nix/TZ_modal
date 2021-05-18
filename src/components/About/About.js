import React from 'react';
import './About.scss';

const About = () => {
  return (
    <div className="container">
      <div className="about">
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-header">
                Техническое задание.
              </div>
              <div className="card-body">
                <p>
                  Необходимо получить список фотографий с бекенд части по адресу:
                  "https://boiling-refuge-66454.herokuapp.com/images/".
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
                  Информация для модального окна по адресу:
                  "https://boiling-refuge-66454.herokuapp.com/images/id".
                  Разрешить возможность добавлять комментарии к фото в модальном окне.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default About