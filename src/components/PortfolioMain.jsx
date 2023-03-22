import React, {useState} from 'react';
import "./PortfolioMain.css";
import finleysLogo from '../images/logo.png';
import headerPortrait from "../images/header-portrait.png";
import aboutPortrait from "../images/about-portrait.jpg";
import personalHealthAssistant from "../images/personal-health-assistant.png";
import spermCellGui from "../images/sperm-cell-gui.png";
import objectDetector from "../images/object-detector.png";
import flashtastic from "../images/flashtastic.png";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBriefcase, faGear, faSchool} from "@fortawesome/free-solid-svg-icons";
import {faCalendar} from "@fortawesome/free-regular-svg-icons";

function PortfolioMain({}) {
    const [currentAboutTab, setCurrentAboutTab] = useState("skills");

    return (
        <>
            {/*Header Section*/}
            <div id="header">
                <div className="section-wrapper">
                    <nav>
                        <img src={finleysLogo} alt="Finley's personal logo" id="header-logo"/>
                        <ul id="nav-bar-items">
                            <li><a href="#header">Home</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#portfolio">Portfolio</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>

                    </nav>

                    <div className="lower-header-container">
                        <div className="lower-header-col-1">
                            <p>Full Stack Developer</p>

                            <h1>Hi, I'm <span>Finley</span> <br/> I love to code</h1>
                        </div>

                        <div className="lower-header-col-2">
                            <img src={headerPortrait} alt="Finley's portrait"/>
                        </div>
                    </div>

                </div>
            </div>

            {/*About Section*/}

            <div id="about">

                <div className="section-wrapper">
                    <div className="row">
                        <div className="about-col-1">
                            <img src={aboutPortrait} alt="Finley's graduation p"/>
                        </div>
                        <div className="about-col-2">
                            <div className="about-col-2-row-1">
                                <h1 className="section-title">About Me</h1>
                                <p>An aspiring and detail-oriented computer science master’s student at Northwestern
                                    University,
                                    strong
                                    at software development and proficient in communication, teamwork, and leadership,
                                    with
                                    experiences
                                    in research and internships in the field of Software Engineering, Web Development,
                                    Computer
                                    Vision
                                    and Machine Learning. </p>

                                <div className="qualification-titles-tabs">
                                    <p className={`tab-links ${currentAboutTab === "skills" ? "active-link" : ""}`}
                                       onClick={() => {
                                           setCurrentAboutTab("skills");
                                       }}>
                                        <FontAwesomeIcon icon={faGear} className="about-me-icons"/>
                                        Skills</p>
                                    <p className={`tab-links ${currentAboutTab === "experience" ? "active-link" : ""}`}
                                       onClick={() => {
                                           setCurrentAboutTab("experience");
                                       }}>
                                        <FontAwesomeIcon icon={faBriefcase} className="about-me-icons"/>
                                        Experience</p>
                                    <p className={`tab-links ${currentAboutTab === "education" ? "active-link" : ""}`}
                                       onClick={() => {
                                           setCurrentAboutTab("education");
                                       }}>
                                        <FontAwesomeIcon icon={faSchool} className="about-me-icons"/>
                                        Education</p>
                                </div>

                                <div
                                    className={`qualification-content ${currentAboutTab === "skills" ? "active-tab" : ""}`}
                                    id="skills">
                                    <ul>
                                        <li>
                                            <h3 className="qualification-title">Frontend Languages</h3>
                                            HTML, CSS, JavaScript, React.JS, Vue.JS
                                        </li>
                                        <li>
                                            <h3 className="qualification-title">Backend Languages</h3>
                                            Java, Python, C++, C#, Node.JS, SQL
                                        </li>
                                        <li>
                                            <h3 className="qualification-title">Others</h3>
                                            Clarinet Performance (Advanced), Saxophone, and Piano Playing
                                            (Intermediate)
                                        </li>
                                    </ul>
                                </div>

                                <div
                                    className={`qualification-content ${currentAboutTab === "experience" ? "active-tab" : ""}`}
                                    id="experience">


                                    <div className="qualification-data">
                                        <div>
                                            <h3 className="qualification-title">Software Engineering Intern</h3>
                                            <span className="qualification-subtitle">DoubleVerify</span>
                                            <div className="qualification-calendar">
                                               <FontAwesomeIcon icon={faCalendar} className="calendar-icon"/>
                                                Jun. 2022 - Sep. 2022
                                            </div>
                                        </div>

                                        <div>
                                            <span className="qualification-circle"></span>
                                            <span className="qualification-line"></span>
                                        </div>
                                    </div>


                                    <div className="qualification-data">
                                        <div></div>
                                        <div>
                                            <span className="qualification-circle"></span>
                                            <span className="qualification-line"></span>
                                        </div>
                                        <div>
                                            <h3 className="qualification-title">Software Development Engineer
                                                Intern</h3>
                                            <span className="qualification-subtitle">AI5YUE Technology</span>
                                            <div className="qualification-calendar">
                                                <FontAwesomeIcon icon={faCalendar} className="calendar-icon"/>
                                                May 2021 – Aug. 2021
                                            </div>
                                        </div>
                                    </div>


                                    <div className="qualification-data">
                                        <div>
                                            <h3 className="qualification-title">Software Development Engineer
                                                Intern</h3>
                                            <span className="qualification-subtitle">iSoftStone Technology</span>
                                            <div className="qualification-calendar">
                                                <FontAwesomeIcon icon={faCalendar}className="calendar-icon"/>
                                                May 2019 – Jul. 2019
                                            </div>
                                        </div>

                                        <div>
                                            <span className="qualification-circle"></span>
                                            <span className="qualification-line"></span>
                                        </div>
                                    </div>


                                    <div className="qualification-data">
                                        <div></div>
                                        <div>
                                            <span className="qualification-circle"></span>
                                        </div>
                                        <div>
                                            <h3 className="qualification-title">Tutor for CSE 131: Introduction to
                                                Computer Science</h3>
                                            <span
                                                className="qualification-subtitle">Washington University in St. Louis</span>
                                            <div className="qualification-calendar">
                                                <FontAwesomeIcon icon={faCalendar} className="calendar-icon"/>
                                                Aug. 2021 – Jan. 2022
                                            </div>
                                        </div>


                                    </div>

                                </div>


                                <div
                                    className={`qualification-content ${currentAboutTab === "education" ? "active-tab" : ""}`}
                                    id="education">

                                    <div className="qualification-data">
                                        <div>
                                            <h3 className="qualification-title">Masters in Computer Science</h3>
                                            <span className="qualification-subtitle">Northwestern University</span>
                                            <div className="qualification-calendar">
                                                <FontAwesomeIcon icon={faCalendar} className="calendar-icon"/>
                                                Sep. 2022 - Present
                                            </div>
                                        </div>

                                        <div>
                                            <span className="qualification-circle"></span>
                                            <span className="qualification-line"></span>
                                        </div>
                                    </div>


                                    <div className="qualification-data">
                                        <div></div>
                                        <div>
                                            <span className="qualification-circle"></span>

                                        </div>
                                        <div>
                                            <h3 className="qualification-title">Bachelor of Science in Computer
                                                Science</h3>
                                            <span
                                                className="qualification-subtitle">Washington University in St. Louis</span>
                                            <div className="qualification-calendar">
                                                <FontAwesomeIcon icon={faCalendar} className="calendar-icon"/>
                                                Aug. 2018 - May 2022
                                            </div>
                                        </div>
                                    </div>


                                </div>
                            </div>
                            {/*<div className="about-col-2-row-2">*/}
                            {/*    <a href="my-resume.pdf" download className="btn download-btn">Download Resume</a>*/}
                            {/*</div>*/}


                        </div>

                    </div>

                </div>

            </div>

            {/*    Portfolio Section*/}


            <div id="portfolio">
                <div className="section-wrapper">
                    <h1 className="section-title" id="my-projects-title">My Projects</h1>
                    <p id="my-projects-subtitle">Here are a few past course projects I've worked on. Want a demo? <a
                        href="mailto:fenglieli2024@u.northwestern.edu">Email me</a>. </p>
                    <div className="project-list">
                        <div className="project">
                            <img src={personalHealthAssistant} alt="Personal Health Assistant"/>
                            <div className="layer">
                                <p>A web application that allows users to create food logs and automatically
                                    calculates caloric
                                    recommendations based on user inputted goals and weight.</p>
                                <div className="tech-used">
                                    <span>JavaScript</span>
                                    <span>React.JS</span>
                                    <span>Node.JS</span>
                                    <span>MongoDB</span>
                                    <span>Express.JS</span>

                                </div>
                                <a href="https://github.com/finleylee2507/WUSTL-Projects/tree/master/CSE%20330/Final%20Creative%20Project"
                                   target="_blank"><i
                                    className="fa-solid fa-arrow-up-right-from-square"></i></a>
                            </div>
                            <p className="project-title">Personal Health Assistant</p>
                        </div>

                        <div className="project">
                            <img src={flashtastic} alt="Flashcard App"/>
                            <div className="layer">
                                <p>A flashcard web application to help streamline concept learning and memorization.
                                    The application
                                    provides intuitive and responsive user interface that supports study set
                                    creation, editing,
                                    saving, and practicing. </p>
                                <div className="tech-used">
                                    <span>JavaScript</span>
                                    <span>React.JS</span>
                                    <span>Firebase API</span>
                                </div>
                                <a href="https://github.com/wustlcse204/10-final-project-individual-finleylee2507"
                                   target="_blank"><i
                                    className="fa-solid fa-arrow-up-right-from-square"></i></a>
                            </div>
                            <p className="project-title">"Flashtastic - A Flashcard App"</p>


                        </div>
                        <div className="project">
                            <img src={spermCellGui} alt="Cell Measurement GUI"/>
                            <div className="layer">
                                <p>An effective, semi-automated measurement tool that allows the users to
                                    accurately measure the length of sperm cells in less than one minute. The tool
                                    utilizes advanced
                                    geometric computing algorithms such as flood-fill and cell-complex thinning.</p>
                                <div className="tech-used">
                                    <span>MATLAB</span>
                                    <span>Python</span>
                                    <span>Algorithms</span>
                                </div>
                                <a href="https://github.com/finleylee2507/Sperm-Cell-Measurement-GUI"
                                   target="_blank"><i
                                    className="fa-solid fa-arrow-up-right-from-square"></i></a>
                            </div>
                            <p className="project-title">Cell Measurement GUI</p>
                        </div>
                        <div className="project">
                            <img src={objectDetector} alt="Faster R-CNN Detector"/>
                            <div className="layer">
                                <p>
                                    A vision-based object detector capable of performing detection and
                                    classification on images and
                                    videos.
                                </p>

                                <div className="tech-used">
                                    <span>Python</span>
                                    <span>Tensorflow</span>
                                    <span>Computer Vision</span>
                                    <span>Machine Learning</span>

                                </div>
                                <a href="https://github.com/finleylee2507/My-Faster-RCNN-for-Object-Detection"
                                   target="_blank"><i
                                    className="fa-solid fa-arrow-up-right-from-square"></i></a>
                            </div>
                            <p className="project-title">Faster R-CNN Detector with GAN Integration</p>
                        </div>


                    </div>

                    <a href="https://github.com/finleylee2507" className="btn" id="see-more-button" target="_blank">See
                        more</a>
                </div>
            </div>

            {/*    Contact Section*/}
            <div className="contact" id="contact">
                <div className="section-wrapper">
                    <div className="row">
                        <div className="contact-left">
                            <h1 className="section-title">Contact Me</h1>
                            <p><i className="fa-solid fa-paper-plane"></i>fenglieli2024@u.northwestern.edu</p>
                            <p><i className="fa-solid fa-phone"></i>314-203-7070</p>
                            <div className="social-icons">


                                <a href="https://www.linkedin.com/in/finley-li/" target="_blank">
                                    <i className="fa-brands fa-linkedin"></i>
                                </a>
                                <a href="https://github.com/finleylee2507" target="_blank">
                                    <i className="fa-brands fa-github"></i>
                                </a>

                                <a href="https://www.instagram.com/finn_th3_g/" target="_blank">
                                    <i className="fa-brands fa-instagram"></i>
                                </a>

                                <a href="https://www.facebook.com/profile.php?id=100009945043802" target="_blank">
                                    <i className="fa-brands fa-facebook"></i>
                                </a>


                            </div>

                        </div>
                        <div className="contact-right">
                            <form action="">
                                <input type="text" name="Name" placeholder="Your Name" required/>
                                <input type="email" name="email" placeholder="Your Email" required/>
                                <textarea name="Message" rows="6" placeholder="Your Message"></textarea>
                                <button type="submit" className="btn submit-btn">Submit</button>
                            </form>

                            <span id="form-success-msg"></span>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}

export default PortfolioMain;