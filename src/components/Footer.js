import React from "react"
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";


const Footer = () => {
  return (
    <div className="footer">
        <div className="container">
            <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="d-flex">
                        <p>City Dallas Main St 2020</p>
                    </div>
                    <div className="d-flex">
                        <a href="Phone: 555-555-5555"></a>
                    </div>
                    <div className="d-flex">
                        <p>awoods@gmail.com</p>
                    </div>
                </div>
                <div className="col-lg-3 col-md-2 col-sm-6">
                    <div className="row">
                        <div className="col">
                            <a className="footer-nav">Home</a>
                            <br/>
                            <a className="footer-nav">About Me</a>
                            <br/>
                            <a className="footer-nav">Portfolio</a>
                        </div>
                        <div className="col">
                            <a className="footer-nav">Contact</a>
                        </div>

                    </div>
                </div>
                <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
                    <div className="d-flex justify-content-center">
                        <a href="https://www.linkedin.com/in/aaron-woods-7981205/">
                    <FontAwesomeIcon icon="fa-brands fa-github" />
                    </a>
                    <div className="d-flex justify-content-center">
                        <a href="https://github.com/awoods1893">
                    <FontAwesomeIcon icon="fa-brands fa-linkedin" />
                    </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer