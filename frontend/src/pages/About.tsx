import React from 'react';
import DevImg from '../images/developer2.jpg';

const skillCards = [
  {
    type: "HTML",
    color: "#f06529",
  },
  {
    type: "CSS",
    color: "#379ad6",
  },
  {
    type: "SCSS",
    color: "#cc6699",
  },
  {
    type: "JavaScript",
    color: "#f7df1e",
  },
  {
    type: "ReactJS",
    color: "#5ed9fb",
  },
  {
    type: "NodeJS",
    color: "#83cd29",
  },
  {
    type: "TypeScript",
    color: "#5ed9fb",
  },
  {
    type: "ExpressJS",
    color: "#83cd29",
  },
  {
    type: "Firebase",
    color: "#ffa000",
  }
];

class About extends React.Component<{}> {
  render() {
    const skillCard = skillCards.map((card: any, index: number) => {
      const style = { "--bg": card.color } as React.CSSProperties;
      const largCard = [4, 5].includes(index);
      return (
        <div className={`skill-card ${largCard ? 'large' : ''}`} style={style}>
          <p className="skill">{card.type}</p>
        </div>
      );
    });
    return (
      <div className="about-page">
        <h2 className="heading">About <span className="highlight">Me</span></h2>
        <p className="sub-heading">Allow me to introduce myself.</p>
        <div className="seperator"></div>

        <div className="about-me-container">
          <div className="left-col">
            <img src={DevImg} className="about-image" alt="" />
          </div>
          <div className="right-col">
            <p className="about-para">Hello, dear friend. My name is Arpine, born on the 10th of September 1994. I live in Armenia. I am a full-stack web developer. I have 3 years experience on IT sphere. I specialise in creating interactive experience and functional interfaces using ReactJS, TypeScript, Express, Firebase, HTML, CSS, SCSS.</p>
            <a href="/CV.pdf" className="btn" download> Download CV</a>
          </div>
        </div>

        <h2 className="heading">Laguages and Framework I know</h2>
        <div className="seperator"></div>
        <div className="skill-container">
          {skillCard}
        </div>
      </div>
    );
  }
}

export default About;
