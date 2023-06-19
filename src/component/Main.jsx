import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import ani from './ani.gif'
const Main = () => {
  return (
    <>

    <div className="container-fluid">
  <div className="row ">
    <div className="col-12">
      <h3 className="display-6 text-center mt-4 ">
        Try a one-hour tutorial designed for all ages in over 45 languages.{" "}
        <br />
        Join millions of students and teachers in over 180 countries starting
        with an Hour of Code
      </h3>
    </div>
  </div>
  <div className="row justify-content-evenly pt-10" id='About' style={{marginTop:"10vh",marginBottom:"10vh"}}>
    <div className="col-md-3 text-center mt-5">
      <h1>
        <i className="bi bi-code-slash text-primary" />
      </h1>
      <h5>Build For Web Developer</h5>
      <p>
      A Web Developer is a professional who is responsible for the design and construction of websites. They ensure that sites meet user expectations by ensuring they look good, run smoothly and offer easy access points with no loading issues between pages or error messages.
      </p>
    </div>
    <div className="col-md-3  text-center mt-5">
      <h1>
        {" "}
        <i className="bi bi-app-indicator text-danger"></i>
      </h1>
      <h5>Build For App Developer</h5>
      <p>
      An Application Developer is a professional responsible for designing and coding functional software programs and applications. They collaborate with teams to set specifications, write high-quality code, conduct testing, and troubleshoot applications.
      </p>
    </div>
    <div className="col-md-3 text-center mt-5">
      <h1>
        {" "}
        <i className="bi bi-clipboard-data text-success " />
      </h1>
      <h5>Build For Data analytics</h5>
      <p>
      Data is everywhere, and people use data every day, whether they realize it or not. Daily tasks such as measuring coffee beans to make your morning cup, checking the weather report before deciding what to wear, or tracking your steps throughout the day with a fitness tracker can all be forms of analyzing and using data.
      </p>
    </div>
  </div>
  <hr />
  <div className="row justify-content-evenly  pb-5" >
    <div className="col-md-5 ">
      <img src={ani} alt="" className="img-fluid" />
    </div>
    <div className="col-md-5 " style={{marginTop:"15vh"}}>
      <h5 className="mt-3">Website Development</h5>
      <div className="progress">
        <div
          className="progress-bar bg-primary"
          role="progressbar"
          style={{ width: "25%" }}
          aria-valuenow={25}
          aria-valuemin={0}
          aria-valuemax={100}
        />
      </div>
      <h5 className="mt-3">App Development</h5>
      <div className="progress">
        <div
          className="progress-bar bg-danger"
          role="progressbar"
          style={{ width: "50%" }}
          aria-valuenow={50}
          aria-valuemin={0}
          aria-valuemax={100}
        />
      </div>
      <h5 className="mt-3">Software Development</h5>
      <div className="progress">
        <div
          className="progress-bar bg-success"
          role="progressbar"
          style={{ width: "75%" }}
          aria-valuenow={75}
          aria-valuemin={0}
          aria-valuemax={100}
        />
      </div>
      <h5 className="mt-3">SEO Development</h5>
      <div className="progress">
        <div
          className="progress-bar bg-info"
          role="progressbar"
          style={{ width: "100%" }}
          aria-valuenow={100}
          aria-valuemin={0}
          aria-valuemax={100}
        />
      </div>
      
    </div>
  </div>
  <hr></hr>
  <div className="row justify-content-evenly pt-5 pb-5">
    <div className="col-md-10">
      <h3 className="text-center pb-5" id='web'>Services</h3>
      <div
        className="accordion accordion-flush border"
        id="accordionFlushExample"
      >
        <div className="accordion-item">
          <h2 className="accordion-header" >
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              Web Development
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              <h3>Languages</h3>
              <ul>
                <li><a>Python,Java,Node.js.</a></li>
                <li><a>Html,Css,Javascript,Bootstrap,Jquery,React.</a></li>
                <li><a>SQL,PLSQL,Orcale.</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="accordion-item" >
          <h2 className="accordion-header" >
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
              aria-expanded="false"
              aria-controls="flush-collapseTwo"
            >
              App Development
            </button>
          </h2>
          <div id="flush-collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample">
                
            <div className="accordion-body" >
            <h3 id='data'>Languages</h3>
              <ul>
                <li><a>C,C++,Java,Swift </a></li>
                <li><a>Objective C,PHP</a></li>
                <li><a>React-Native</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="accordion-item" >
          <h2 className="accordion-header" >
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThree"
              aria-expanded="false"
              aria-controls="flush-collapseThree"
            >
              Data analytics
            </button>
          </h2>
          <div
            id="flush-collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
            <h3>Languages</h3>
              <ul>
                <li><a>Python,R programming</a></li>
                <li><a>Power BI,Tableu</a></li>
                <li><a>Excel,SQL,PLSQL</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div
    className="row justify-content-evenly pt-2 pb-5"
    style={{ backgroundColor: "#f1f1f1" }}
  >
    <div className="col-md-5 mt-5" id='cont'>
      <h3 className="mb-4">Contact Form</h3>
      <form>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Full Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Phone Number
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your number with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Message
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows={3}
            defaultValue={""}
          />
        </div>
        <button type="submit" className="btn btn-danger">
          Submit
        </button>
      </form>
    </div>
    <div className="col-md-5 mt-5">
      <h3 className="mb-4">Address</h3>
      <p>
        P4, Ground Floor, Shagun Building,
        <br /> AB Road, Vijay Nagar Square, Scheme No.54, Indore,
        <br /> Madhya Pradesh 452011
      </p>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5079.982430530772!2d75.89344732873312!3d22.746283981418102!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd55f3144a87%3A0x2c6c778502cc4666!2sApna%20Sweets!5e0!3m2!1sen!2sin!4v1686124854988!5m2!1sen!2sin"
        style={{ width: "100%" }}
        height={250}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  </div>
  <div className="row justify-content-evenly bg-dark text-white pt-2 pb-5">
    <div className="col-md-3 pt-4">
      <h3 className="mb-3">Programming Hub</h3>
      <p>
      We make registering, hosting, and managing domains for yourself or others easy and affordable, because the internet needs people.
      </p>
    </div>
    <div className="col-md-3 pt-4">
      <h5 className="mb-3">Important Links</h5>
      <p>
        <a href="#" className="link-light text-decoration-none pt-2">
          Home
        </a>
        <br />
        <a href="#" className="link-light text-decoration-none pt-2">
          About us
        </a>
        <br />
        <a href="#" className="link-light text-decoration-none pt-2">
          Contact Us
        </a>
        <br />
        <a href="#" className="link-light text-decoration-none pt-2">
          Our Team
        </a>
        <br />
        <a href="#" className="link-light text-decoration-none pt-2">
          Our Cleint
        </a>
        <br />
      </p>
    </div>
    <div className="col-md-3 pt-4">
      <h5 className="mb-2">Contact Us</h5>
      <p>
        P4, Ground Floor, Shagun Building,
        <br /> AB Road, Vijay Nagar Square,
        <br /> Scheme No.54, Indore,
        <br /> Madhya Pradesh 452011
      </p>
    </div>
  </div>

  <div className="row bg-secondary text-white text-center p-2">
    <div className="col-12">
      <p>Copyright 2005-2023 by Programming Hub By Rights Resevred</p>
    </div>
  </div>
</div>

    </>
  )
}

export default Main