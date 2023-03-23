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
import {Badge, Button, Card, Group, Image, Text} from '@mantine/core';
import {Carousel} from "@mantine/carousel";

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
            {/*Todo: make it modular and reusable*/}


            <div id="portfolio">
                <div className="section-wrapper">
                    <h1 className="section-title" id="my-projects-title">My Projects</h1>
                    <p id="my-projects-subtitle">Here are a few past course projects I've worked on. Want a demo? <a
                        href="mailto:fenglieli2024@u.northwestern.edu">Email me</a>. </p>
                    <div className="carousel-container">
                        <Carousel withIndicators slideSize="55%" align="start" loop classNames={{
                            indicators: "carousel-indicator-container",
                            indicator: "carousel-indicator"
                        }}>
                            <Carousel.Slide>
                                {/*Flashtastic*/}
                                <Card shadow="sm" padding="lg" radius="md" withBorder sx={{width: "700px"}}>
                                    <Card.Section>
                                        <Image
                                            src={flashtastic}
                                            height={350}
                                            alt="Flashtastic"
                                            fit="cover"
                                        />
                                    </Card.Section>

                                    <Group position="center" mt="md" mb="xs">
                                        <Text weight={500} size="xl">"Flashtastic" - A Flashcard App</Text>
                                    </Group>

                                    <Text size="sm" color="dimmed">
                                        A flashcard web application to help streamline concept learning and
                                        memorization.
                                        The application
                                        provides intuitive and responsive user interface that supports study set
                                        creation, editing,
                                        and practicing.
                                    </Text>

                                    <Group mt="md">
                                        <Badge color="pink" variant="light" classNames={{root: "badge"}}>
                                            JavaScript
                                        </Badge>
                                        <Badge color="pink" variant="light" classNames={{root: "badge"}}>
                                            React.JS
                                        </Badge>
                                        <Badge color="pink" variant="light" classNames={{root: "badge"}}>
                                            Firebase API
                                        </Badge>
                                    </Group>
                                    <Button variant="light" color="blue" fullWidth mt="md" radius="md" onClick={() =>
                                        window.open('https://github.com/wustlcse204/10-final-project-individual-finleylee2507', '_blank')
                                    }>
                                        Project Link
                                    </Button>
                                </Card>
                            </Carousel.Slide>

                            <Carousel.Slide>

                                {/*Personal Health Assistant*/}
                                <Card shadow="sm" padding="lg" radius="md" withBorder sx={{width: "700px"}}>
                                    <Card.Section>
                                        <Image
                                            src={personalHealthAssistant}
                                            height={350}
                                            alt="Personal Health Assistant"
                                            fit="cover"
                                        />
                                    </Card.Section>

                                    <Group position="center" mt="md" mb="xs">
                                        <Text weight={500} size="xl">Personal Health Assistant</Text>

                                    </Group>

                                    <Text size="sm" color="dimmed">
                                        A web application that allows users to create food logs and automatically
                                        calculates caloric
                                        recommendations based on user inputted goals and weight.
                                    </Text>

                                    <Group mt="md">
                                        <Badge color="pink" variant="light" classNames={{root: "badge"}}>
                                            JavaScript
                                        </Badge>
                                        <Badge color="pink" variant="light" classNames={{root: "badge"}}>
                                            React.JS
                                        </Badge>
                                        <Badge color="pink" variant="light" classNames={{root: "badge"}}>
                                            Node.JS
                                        </Badge>
                                        <Badge color="pink" variant="light" classNames={{root: "badge"}}>
                                            MongoDB
                                        </Badge>
                                        <Badge color="pink" variant="light" classNames={{root: "badge"}}>
                                            Express.JS
                                        </Badge>
                                    </Group>
                                    <Button variant="light" color="blue" fullWidth mt="md" radius="md"
                                            onClick={() => window.open('https://github.com/finleylee2507/WUSTL-Projects/tree/master/CSE%20330/Final%20Creative%20Project', '_blank')}>
                                        Project Link
                                    </Button>
                                </Card>

                            </Carousel.Slide>

                            <Carousel.Slide>

                                {/*Cell Measurement GUI*/}
                                <Card shadow="sm" padding="lg" radius="md" withBorder sx={{width: "700px"}}>
                                    <Card.Section>
                                        <Image
                                            src={spermCellGui}
                                            height={350}
                                            alt="Sperm Cell Measurement GUI"
                                            fit="cover"
                                        />
                                    </Card.Section>

                                    <Group position="center" mt="md" mb="xs">
                                        <Text weight={500} size="xl">Sperm Cell Measurement GUI</Text>

                                    </Group>

                                    <Text size="sm" color="dimmed">

                                        A fast, accurate and semi-automated measurement tool for sperm cell. The tool
                                        utilizes
                                        advanced geometric computing algorithms such as flood-fill and cell-complex
                                        thinning.
                                    </Text>

                                    <Group mt="md">
                                        <Badge color="pink" variant="light" classNames={{root: "badge"}}>
                                            MATLAB
                                        </Badge>
                                        <Badge color="pink" variant="light" classNames={{root: "badge"}}>
                                            Python
                                        </Badge>
                                        <Badge color="pink" variant="light" classNames={{root: "badge"}}>
                                            Algorithms
                                        </Badge>
                                    </Group>
                                    <Button variant="light" color="blue" fullWidth mt="md" radius="md"
                                            onClick={() => window.open('https://github.com/finleylee2507/Sperm-Cell-Measurement-GUI', '_blank')}>
                                        Project Link
                                    </Button>
                                </Card>

                            </Carousel.Slide>

                            <Carousel.Slide>

                                {/*Faster R-CNN*/}
                                <Card shadow="sm" padding="lg" radius="md" withBorder sx={{width: "700px"}}>
                                    <Card.Section>
                                        <Image
                                            src={objectDetector}
                                            height={350}
                                            alt="Faster R-CNN with GAN Integration"
                                            fit="cover"
                                        />
                                    </Card.Section>

                                    <Group position="center" mt="md" mb="xs">
                                        <Text weight={500} size="xl">Faster R-CNN with GAN Integration</Text>

                                    </Group>

                                    <Text size="sm" color="dimmed">
                                        A vision-based object detector capable of performing detection and
                                        classification on images and
                                        videos. The detector uses Generative Adversarial Networks (GAN) to improve
                                        detection
                                        accuracy.
                                    </Text>

                                    <Group mt="md">
                                        <Badge color="pink" variant="light" classNames={{root: "badge"}}>
                                            Python
                                        </Badge>
                                        <Badge color="pink" variant="light" classNames={{root: "badge"}}>
                                            Tensorflow
                                        </Badge>
                                        <Badge color="pink" variant="light" classNames={{root: "badge"}}>
                                            Computer Vision
                                        </Badge>
                                        <Badge color="pink" variant="light" classNames={{root: "badge"}}>
                                            Machine Learning
                                        </Badge>
                                    </Group>
                                    <Button variant="light" color="blue" fullWidth mt="md" radius="md"
                                            onClick={() => window.open('https://github.com/finleylee2507/My-Faster-RCNN-for-Object-Detection', '_blank')}>
                                        Project Link
                                    </Button>
                                </Card>
                            </Carousel.Slide>
                        </Carousel>
                    </div>
                    <div className="project-list">


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