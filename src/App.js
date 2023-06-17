import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import img from './img/imgs.png'
import logo from './img/logo1.png'
import Slider from './Slider';
import Main from './component/Main';
const App = () => {
  return (
    <>
      <>
        {/* Navbar */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <img src={img} alt='' style={{ height: "13vh" }} />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="navbar-brand active" aria-current="page" href="#home">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="navbar-brand" href="#About">
                    About us
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a 
                    className="navbar-brand dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Services
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li>
                      <a className="dropdown-item" href="#web">
                        Web development
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#web">
                        App development
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#web">
                        Data  analytics
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="navbar-brand" href='#cont'>Contact Us</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {/* navbar-end */}
        <Slider />
        <Main />
      </>

    </>
  )
}

export default App
