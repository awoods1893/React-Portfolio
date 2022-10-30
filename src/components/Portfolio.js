import React from "react"
import passwordGenerator from "../PasswordGenerator.jpg";
import noteTaker from "../NoteTaker.jpg";
import techBlog from "../TechBlog.jpg";
import textEditor from "../TextEditor.jpg";

//Font Awesome Imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";





const Portfolio = () => {

    
    

        return (
            <div id="portfolio" className="portfolio-wrapper">
        <div className="container">
            <h1 className="text-uppercase text-center py-5">Portfolio</h1>
            <div className="portfolio-image-box-wrapper">
                <div className="portfolio-image-box" onClick="window.open('https://github.com/awoods1893/Challenge-3---Password-Generator')" >
                <img className="portfolio-image" src={passwordGenerator} alt="Password Generator..." />
                <div className="overflow"></div>
                <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                </div>
            <div className="portfolio-image-box">
                <img className="portfolio-image" src={noteTaker} alt="Note Taker App..." />
                <div className="overflow"></div>
                <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                </div>
            <div className="portfolio-image-box">
                <img className="portfolio-image" src={techBlog} alt="Tech Blog Aop..." />
                <div className="overflow"></div>
                <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                </div>
            <div className="portfolio-image-box">
                <img className="portfolio-image" src={textEditor} alt="Text Editor App..." />
                <div className="overflow"></div>
                <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                </div>
           </div>
        </div>
        
    </div>
  )
    
}

export default Portfolio