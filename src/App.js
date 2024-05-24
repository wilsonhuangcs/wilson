import React, { useState } from 'react';
import './App.css';
import { SiGmail } from "react-icons/si";
import { TfiGithub, TfiLinkedin } from "react-icons/tfi";

function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showExperiences, setShowExperiences] = useState(false);
  const [flipCounter, setFlipCounter] = useState(0);

  const projects = [
    {
      name: 'Astro Race Galaxy',
      description: 'A space-themed trivia game created to inspire children to pursue careers in aerospace, created at a hackathon hosted by JSC NASA. Collaborated with a team of three using React to create the game and present in front of a panel of judges to receive feedback!',
      link: 'https://github.com/wilsonhuangcs/JSC-Hack-2023',
      frameworks: ['React', 'CSS', 'HTML', 'JavaScript']
    },
    {
      name: 'Personal Website',
      description: 'A personal portfolio website created to showcase my journey in the ever-expanding field of computer science. Created as one of my first projects using React, and showcases how much I have been able to learn JavaScript, CSS, and HTML. As well as hosting the site using GitHub pages.',
      link: 'https://wilsonhuangcs.github.io/wilson/',
      frameworks: ['React', 'CSS', 'HTML', 'JavaScript']
    },
    {
      name: 'UH Energy',
      description: 'A web application created with a team of 4 developers that allows users to be able to generate a fuel quote and ultimately purchase fuel. Utilized MongoDB for backend and React for frontend development ultimately allowing us to create a fully functional web application that had above 80% code coverage.',
      link: 'https://github.com/rmrahman430/Software-Design-Project-Grp-54',
      frameworks: ['React', 'MongoDB', 'Azure', 'GitHub']
    },
    {
      name: 'Dropawf',
      description: 'A postal office web application created with a team of 5 developers utilizing GitHub for version control. This web application utilizes a MySQL backend to allow users to be able to view their tracking, order history, profile information, and much more. As well as allowing users to be able to ship packages and purchase items.',
      link: 'https://dropawf.pages.dev/',
      frameworks: ['React', 'MySQL', 'Jest', 'GitHub']
    },
  ];

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setShowExperiences(false);
    setFlipCounter((prevCounter) => prevCounter + 1);
  };

  const handleBackClick = () => {
    setSelectedProject(null);
    setShowExperiences(false);
    setFlipCounter((prevCounter) => prevCounter + 1);
  };

  const handleExperiencesClick = () => {
    setSelectedProject(null);
    setShowExperiences(true);
    setFlipCounter((prevCounter) => prevCounter + 1);
  };

  return (
    <div className="App">
      <div className="FlipContainer">
        <div className={`FlipCard ${flipCounter % 2 === 0 ? 'flip-out' : 'flip-in'}`}>
          <div className="InfoContainer">
            <div className="InfoHeader">
              <div className="InfoPic" onClick={handleBackClick} ></div>
              <div className="InfoIconHolder">
                <div className="InfoIcons" onClick={() => window.open('https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=CllgCJTMXKRVWDCDQzhcdrxsnbRZPJBgBSMdbrbbjPLJrgGmrRCzRQpGGxgMXKsnzzGXtvtdsZL', '_blank')}> <SiGmail /> </div>
                <div className="InfoIcons" onClick={() => window.open('https://github.com/wilsonhuangcs/', '_blank')}> <TfiGithub /> </div>
                <div className="InfoIcons" onClick={() => window.open('https://www.linkedin.com/in/wilsonhuangcs/', '_blank')}> <TfiLinkedin /> </div>
              </div>
            </div>

            <div className="midSection">
              <div className="WelcomeArea">
                {selectedProject === null && !showExperiences && (
                  <>
                    <p className="WelcomeMessage"> Welcome. </p>
                    <p className="AboutMe"> My name is Wilson Huang, I'm currently a senior
                      at the University of Houston majoring in Computer Science. </p>
                    <p className="AboutMe"> I'm always looking for ways to develop myself technically and
                      professionally and I'm currently super excited to start my first internship as a Technology Solutions
                      Consultant with Credera! </p>
                  </>
                )}
                {selectedProject !== null && (
                  <>
                    <p className="ProjectName"> {selectedProject.name} </p>
                    <p className="AboutMe"> {selectedProject.description} </p>
                    <p className="Link" onClick={() => window.open(selectedProject.link, '_blank')}> View Link </p>
                    <div className="Frameworks">
                      {selectedProject.frameworks.map((framework, index) => (
                        <div key={index} className="FrameworkCircles"> {framework} </div>
                      ))}
                    </div>
                  </>
                )}
                {showExperiences && (
                  <>
                    <div className="ExperienceContainer">
                      <p className="ExperienceHeader"> Professional Experiences </p>
                      <div className="ExperienceTimeline">
                        <div className="Timeline">
                          <div className="TimelineCircle">
                            <div className="ConnectingLine">
                              <div className="ExperienceBox">
                                <div className="ExperienceTitle">
                                  AT&T
                                  <div className="ExperienceDetails">
                                     Software Engineer Extern &nbsp; |  &nbsp; Houston, TX (Remote)  &nbsp; |  &nbsp; July 2023
                                     <div className="ExperienceBullets">
                                      <li>
                                        Attained a comprehensive blend of business and technical expertise through 80 hours of immersive online learning sessions
                                      </li>

                                      <li>
                                        Nurtured a deep-seated grasp of agile methodologies, machine learning, cloud architecture, API, and software engineering
                                      </li>

                                      <li>
                                        Garnered invaluable insights and mentorship on leadership and career progression by engaging with industry professional                                      </li>
                                     </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="TimelineCircle2">
                            <div className="ConnectingLine2">
                              <div className="ExperienceBox2">
                                <div className="ExperienceTitle">
                                  Credera
                                  <div className="ExperienceDetails">
                                     Software Engineer Consultant &nbsp; |  &nbsp; Houston, TX &nbsp; |  &nbsp; June 2024 - August 2024
                                     <div className="ExperienceBullets">
                                      <li>
                                        Currently working here!
                                      </li>
                                     </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>

              <div className="Projects">
                <div className="ProjectSection">
                  <div className="ProjectsHeader">
                    <h2> Projects </h2>
                  </div>
                  <div className="ProjectList">
                    {projects.map((project) => (
                      <li
                        key={project.name}
                        className="ListItem"
                        onClick={() => handleProjectClick(project)}
                      >
                        {project.name}
                      </li>
                    ))}
                    <li className="ProfessionalExperiences" onClick={handleExperiencesClick}> Professional Experiences </li>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {selectedProject !== null && showExperiences === null && (
          <div className="ProjectInfoContainer">
            <div className="InfoContainer">
              <div className="InfoHeader">
                <div className="InfoPic" onClick={handleBackClick} ></div>
                <div className="InfoIconHolder">
                  <div className="InfoIcons" onClick={() => window.open('https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=CllgCJTMXKRVWDCDQzhcdrxsnbRZPJBgBSMdbrbbjPLJrgGmrRCzRQpGGxgMXKsnzzGXtvtdsZL', '_blank')}> <SiGmail /> </div>
                  <div className="InfoIcons" onClick={() => window.open('https://github.com/wilsonhuangcs/', '_blank')}> <TfiGithub /> </div>
                  <div className="InfoIcons" onClick={() => window.open('https://www.linkedin.com/in/wilsonhuangcs/', '_blank')}> <TfiLinkedin /> </div>
                </div>
              </div>

              <div className="midSection">
                <div className="WelcomeArea">
                  <p className="ProjectName"> {selectedProject.name} </p>
                  <p className="AboutMe"> {selectedProject.description} </p>
                  <p className="Link" onClick={() => window.open(selectedProject.link, '_blank')}> View Link </p>
                  <div className="Frameworks">
                    {selectedProject.frameworks.map((framework, index) => (
                      <div key={index} className="FrameworkCircles"> {framework} </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;