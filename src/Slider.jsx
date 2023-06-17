import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import img1 from './img/img1.jpg'
import img2 from './img/img2.jpg'
import img3 from './img/img3.jpg'
const Slider = () => {
  return (
    <>
    <>
    <div id='home'>
  <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel"  >
    <div className="carousel-indicators">
      <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to={0}
        className="active"
        aria-current="true"
        aria-label="Slide 1"
      />
      <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to={1}
        aria-label="Slide 2"
      />
      <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to={2}
        aria-label="Slide 3"
      />
    </div>
    <div className="carousel-inner ">
      <div className="carousel-item  active">
        <img
          src={img3}
          className="d-block w-100"
          alt="..."
          style={{ height: "80vh" }}
        />
      </div>
      <div className="carousel-item">
        <img
          src={img1}
          className="d-block w-100"
          alt="..."
          style={{ height: "80vh" }}
        />
       
      </div>
      <div className="carousel-item">
        <img
          src={img2}
          className="d-block w-100"
          alt="..."
          style={{ height: "80vh" }}
        />
        
      </div>
    </div>
    <button
      className="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide="prev"
    >
      <span className="carousel-control-prev-icon" aria-hidden="true" />
      <span className="visually-hidden">Previous</span>
    </button>
    <button
      className="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide="next"
    >
      <span className="carousel-control-next-icon" aria-hidden="true" />
      <span className="visually-hidden">Next</span>
    </button>
  </div>
  </div>
  {/* sider-end */}
</>

    </>
  )
}

export default Slider