import React from 'react';
import './Technologies.scss';

export const Technologies = () => {
  return (
    <div className="technologies">
      <div className="technologies__title">
        Web-инструменты:
      </div>
      <div className="technologies__body">
        <p>ReactJS, React Hooks, React Functional Components, React-Router-Dom</p>
        <p>TypeScript</p>  
        <p>React-Redux, Redux, Redux-Saga</p>
        <p>Node-Sass, CSS Flexbox</p>
        <p>Bootstrap, React-Bootstrap(Modal, Navbar)</p>
        <p>Axios</p>
      </div>
    </div>
  )
}
