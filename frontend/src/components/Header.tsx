import React from 'react';
import Logo from '../images/logo.png';

type Props = {
  appState: any,
  setPage: any,
}

type State = {
  toggleBtn: boolean,
}

class Header extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      toggleBtn: false,
    };
  }

  handleToggleBtn = () => {
    const { toggleBtn } = this.state;
    this.setState({ toggleBtn: !toggleBtn });
  }

  render() {
    const { appState, setPage } = this.props;
    const { page } = appState;
    const { toggleBtn } = this.state;
    const pageNames: string[] = ['Home', 'Projects', 'About', 'Contact'];

    const link = pageNames.map((el: string, index: number) => {
      const active: string = el === page ? 'active' : '';
      return (
        <li className="links-item" key={index}>
          <div
            role="button"
            className={`link ${active}`}
            tabIndex={0}
            onKeyUp={() => setPage(el)}
            onClick={() => setPage(el)}
          >
            {el}
          </div>
        </li>
      );
    });

    return (
      <div className="header-component">
        <img src={Logo} className="brand" alt="" />
        <div
          role="button"
          className={`toggle-btn ${toggleBtn ? 'active' : ''}`}
          tabIndex={0}
          onKeyUp={() => this.handleToggleBtn()}
          onClick={() => this.handleToggleBtn()}
        >
          <span></span>
          <span></span>
        </div>
        <ul className={`links-container ${toggleBtn ? 'show' : ''}`}>
          {link}
        </ul>
      </div>
    );
  }
}

export default Header;
