import React from 'react';
import './Products.scss';

const Products = () => {
  return (
    <div className="container">
      <div className="technologies">
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-header">
                Технологии:
              </div>
              <div className="card-body">
                <p>ReactJS, React Hooks, React Functional Components, React-Router-Dom</p>
                <p>TypeScript</p>  
                <p>React-Redux, Redux, Redux-Saga</p>
                <p>Node-Sass, CSS Flexbox</p>
                <p>Bootstrap, React-Bootstrap(Modal, Navbar)</p>
                <p>Axios</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Products