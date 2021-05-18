import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './NavbarComponent.scss'

const NavbarComponent = () => {
  const [showMenu, setShowMenu] = useState(['header__menu'])
  const [clsBurger, setClsBurger] = useState(['header__burger'])

  const handlerVisibleMenu = () => {
    if (showMenu.indexOf('active') === -1) {
      setShowMenu([...showMenu, 'active'])
      setClsBurger([...clsBurger, 'active'])
    } else {
      setShowMenu([...showMenu.splice(showMenu.indexOf('header__menu'), 1)])
      setClsBurger([...clsBurger.splice(clsBurger.indexOf('header__burger'), 1)])
    }
  }
    
  return (
    <div className="header">
      <div className="header__body">
        <div className="header__logo">ТЗ по React</div>
        <div 
          className={clsBurger.join(" ")} 
          onClick={handlerVisibleMenu}  
        >
          <span></span>
        </div>
        <div className={showMenu.join(" ")}>
          <ul className="header__list">
            <li className="header__list-item">
              <NavLink exact to="/" className="header__list-link">Главная</NavLink>
            </li>
            <li className="header__list-item">
              <NavLink to="/about" className="header__list-link">About ТЗ</NavLink>
            </li>
            <li className="header__list-item">
              <NavLink to="/products" className="header__list-link">Используемые технологии</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
    // <div className="container">
    //   <Navbar expand="lg" bg="dark" variant="dark">
    //     <Navbar.Brand>ТЗ по React</Navbar.Brand>
    //     <Navbar.Toggle aria-controls="basic-toggle" />
    //     <Navbar.Collapse id="basic-toggle">
    //       <ul className="navbar-nav ml-auto">
    //         <li className="nav-item">
    //           <NavLink exact to="/" className="nav-link">Главная</NavLink>
    //         </li>
    //         <li className="nav-item">
    //           <NavLink to="/about" className="nav-link">About ТЗ</NavLink>
    //         </li>
    //         <li className="nav-item">
    //           <NavLink to="/products" className="nav-link">Используемые технологии</NavLink>
    //         </li>
    //       </ul>
    //     </Navbar.Collapse>
    //   </Navbar>
    // </div>
  )
}
export default NavbarComponent
