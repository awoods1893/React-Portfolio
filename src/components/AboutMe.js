import React from "react"
import author from "../me.jpg";

const AboutMe = () => {
  return (
    <div className="container py-5">
        <div className="row">
            <div className="col-lg-6 col-xm-12">
                <div className="photo-wrap mb-5">
                <img className="profile-img" src={author} alt="me..."/>

                </div>
            </div>
            <div className="col-lg-6 col-xm-12">
                <h1 className="about-heading">About Me</h1>
                <p>Hello Everyone! Thanks for stopping by. I'm Aaron. Currently, I work as a Security Engineer working for a popular food and beverage company. I am  completing a coding bootcamp to improve my skills as a coder to help me in my cybersecurity career.
                    I have learned Javascript, MongoDB, SQL, ReactJS, ExpressJs, and a host of other skills. When I'm not working, I enjoy spending time with my wife and 2 children. I also enjoy sports and video games.</p>
            </div>

        </div>
    </div>
  )
}

export default AboutMe