import React from "react"
import passwordGenerator from "../PasswordGenerator.jpg";
import noteTaker from "../NoteTaker.jpg";
import techBlog from "../TechBlog.jpg";
import textEditor from "../TextEditor.jpg";

//Font Awesome Imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";





const Portfolio = () => {

    const passwordGeneratorApp = () =>{
        window.open("https://github.com/awoods1893/Challenge-3---Password-Generator");
    }
    
    const noteTakerApp = () =>{
        window.open("https://github.com/awoods1893/Note-Taker");
    }

    const techBlogApp = () =>{
        window.open("https://github.com/awoods1893/Model-View-Controller");
    }

    const textEditorApp = () =>{
        window.open("https://github.com/awoods1893/Text-Editor");
    }
    

        return (
            <div id="portfolio" className="portfolio-wrapper">
        <div className="container">
            <h1 className="text-uppercase text-center py-5">Portfolio</h1>
            <p className="text-center"> Here are some of the projects I have created. Please click on a picture to explore the Github repo of each project.</p>
            <div className="portfolio-image-box-wrapper">
                <div className="portfolio-image-box"  >
                <img className="portfolio-image" src={passwordGenerator} alt="Password Generator..." />
                <div className="overflow"onClick={passwordGeneratorApp}></div>
                <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                </div>
            <div className="portfolio-image-box">
                <img className="portfolio-image" src={noteTaker} alt="Note Taker App..." />
                <div className="overflow"onClick={noteTakerApp}></div>
                <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus}  />
                </div>
            <div className="portfolio-image-box">
                <img className="portfolio-image" src={techBlog} alt="Tech Blog Aop..." />
                <div className="overflow"onClick={techBlogApp}></div>
                <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus}  />
                </div>
            <div className="portfolio-image-box">
                <img className="portfolio-image" src={textEditor} alt="Text Editor App..." />
                <div className="overflow"onClick={textEditorApp}></div>
                <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus}  />
                </div>
           </div>
        </div>
        
    </div>
  )
    
}

export default Portfolio