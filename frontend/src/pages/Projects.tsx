import React from 'react';
import Card from '../images/card.png';
import LiveNow from '../images/liveNow.png';
import NfcScanner from '../images/nfcScanner.png';

const projectTypes = [
  {
    name: "Card",
    tags: "#javascript, #html, #css",
    image: Card,
    githubLink: "https://arpih.github.io/card/",
  },
  {
    name: "LiveNow",
    tags: "#javascript, #reactjs, #typescript, #firebase, #html, #css, #scss",
    image: LiveNow,
    githubLink: "https://arpih.github.io/live_now/",
  },
  {
    name: "NFC Scanner",
    tags: "#javascript, #html, #css",
    image: NfcScanner,
    githubLink: "https://arpih.github.io/nfc-scanner/",
  }
];

class Projects extends React.Component<{}> {
  render() {
    const projTypes = projectTypes.map((project: any, index: number) => {
      return (
        <a
          href={project.githubLink}
          className="project-card"
          target="_blank"
          rel="noreferrer"
          key={index}
        >
          <img src={project.image} alt="" />
          <div className="content">
            <h1 className="project-name">{project.name}</h1>
            <span className="tags">{project.tags}</span>
          </div>
        </a>
      );
    });
    return (
      <div className="projects-page">
        <h2 className="heading">Project<span className="highlight">s</span></h2>
        <p className="sub-heading">You can get acquainted to my projects!</p>
        <div className="seperator"></div>

        <div className="project-container">{projTypes}</div>
      </div>
    );
  }
}

export default Projects;
