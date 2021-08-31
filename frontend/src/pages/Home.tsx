import React from 'react';
import DevImg from '../images/developer1.png';

type Props = {
  setPage: any,
}

class Home extends React.Component<Props> {
  render() {
    const { setPage } = this.props;
    return (
      <div className="home-page">
        <div className="dev-content">
          <h1 className="dev-heading"><span className="highlight">Hi, </span>I am Arpine</h1>
          <p className="profession">Web Developer</p>
          <p className="info">Welcome to my portfolio. Let's build something amazing together!</p>
          <div
            role="button"
            className="btn"
            tabIndex={0}
            onKeyUp={() => setPage('Contact')}
            onClick={() => setPage('Contact')}
          >
            Contact
          </div>
        </div>
        <img src={DevImg} className="image" alt="" />
      </div>
    );
  }
}

export default Home;
