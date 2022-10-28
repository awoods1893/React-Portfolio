import React from "react"
import author from "../me.jpg";

const AboutMe = () => {
  return (
    <div className="container py-5">
        <div className="row">
            <div className="col-lg-6 col-xm-12">
                <img src={author} alt="me..."/>
            </div>
            <div className="col-lg-6 col-xm-12">
                <h1>About Me</h1>
                <p>I'm a Security Engineer working for a popular food and beverage company. I'm going through a coding bootcamp to improve my skills as a coder to help me in my cybersecurity career.

When I'm not working, I enjoy spending time with my wife and 2 children. I also enjoy sports and video games.</p>
            </div>

        </div>
    </div>
  )
}

export default AboutMe