import React from "react"
import passwordGenerator from "../PasswordGenerator.jpg";
import noteTaker from "../NoteTaker.jpg";
import techBlog from "../TechBlog.jpg";
import textEditor from "../TextEditor.jpg";
import workScheduler from "../WorkDayScheduler.jpg";
const Portfolio = () => {
  return (
    <div className="portfolio-wrapper">
        <div className="container">
            <h1 className="text-uppercase text-center py-5">Portfolio</h1>
            <div className="image-box-wrapper row justify-content-center">
                <div className="portfolio-image-box">
                <img className="portfolio-image" src={passwordGenerator} alt="Password Generator..." />
                </div>
            </div>

            {/* - */}
            <div className="image-box-wrapper row justify-content-center">
            <div className="portfolio-image-box">
                <img className="portfolio-image" src={noteTaker} alt="Note Taker App..." />
                </div>
            </div>
            {/* - */}
            <div className="image-box-wrapper row justify-content-center">
            <div className="portfolio-image-box">
                <img className="portfolio-image" src={techBlog} alt="Tech Blog Aop..." />
                </div>
            </div>
            {/* - */}
            <div className="image-box-wrapper row justify-content-center">
            <div className="portfolio-image-box">
                <img className="portfolio-image" src={textEditor} alt="Text Editor App..." />
                </div>
            </div>
            {/* - */}
            <div className="image-box-wrapper row justify-content-center">
            <div className="portfolio-image-box">
                <img className="portfolio-image" src={workScheduler} alt="Work Day Scheduler App..." />
                </div>
            </div>


        </div>
    </div>
  )
}

export default Portfolio