import React, {useState} from 'react';
import "./PortfolioMain.css";
import finleysLogo from '../images/logo.png';
import headerPortrait from "../images/header-portrait.png";
import aboutPortrait from "../images/about-portrait.jpg";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBriefcase, faGear, faPaperPlane, faPhone, faSchool} from "@fortawesome/free-solid-svg-icons";
import {faFacebook, faGithub, faInstagram, faLinkedin} from "@fortawesome/fontawesome-free-brands";
import {faCalendar} from "@fortawesome/free-regular-svg-icons";
import {Carousel} from "@mantine/carousel";
import projectData from "../data/projects.json";
import ProjectCard from "./ProjectCard";

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
                            <p>Passionate Developer</p>

                            <h1>Hi, I'm <span>Finley</span> 👋 <br/> I love to code</h1>
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
                                                <FontAwesomeIcon icon={faCalendar} className="calendar-icon"/>
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
                    <div className="carousel-container">
                        <Carousel withIndicators slideSize="50%" align="start" loop classNames={{
                            indicators: "carousel-indicator-container",
                            indicator: "carousel-indicator"
                        }}
                        >

                            {projectData.projects.map(project => (
                                <Carousel.Slide>
                                    <ProjectCard projectData={project}/>
                                </Carousel.Slide>

                            ))}
                        </Carousel>
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
                            <p><FontAwesomeIcon icon={faPaperPlane} color="#ff004f" className="paperPlaneIcon"/>fenglieli2024@u.northwestern.edu
                            </p>
                            <p><FontAwesomeIcon icon={faPhone} color="#ff004f" className="phoneIcon"/>314-203-7070</p>
                            <div className="social-icons">


                                <a href="https://www.linkedin.com/in/finley-li/" target="_blank">
                                    <FontAwesomeIcon icon={faLinkedin}/>
                                </a>
                                <a href="https://github.com/finleylee2507" target="_blank">
                                    <FontAwesomeIcon icon={faGithub}/>
                                </a>

                                <a href="https://www.instagram.com/finn_th3_g/" target="_blank">
                                    <FontAwesomeIcon icon={faInstagram}/>
                                </a>

                                <a href="https://www.facebook.com/profile.php?id=100009945043802" target="_blank">
                                    <FontAwesomeIcon icon={faFacebook}/>
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