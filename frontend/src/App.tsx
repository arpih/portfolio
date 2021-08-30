import React from 'react';
import './App.scss';
import Header from './components/Header';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './components/Footer'

type State = {
  page: Pages,
}

enum Pages {
  home = 'Home'
  , projects = 'Projects'
  , about = 'About'
  , contact = 'Contact'
}

class App extends React.Component<{}, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      page: Pages.home, // eslint-disable-line react/no-unused-state
    };
  }

  setPage = (page: Pages) => {
    this.setState({ page });
  }

  render() {
    const { page } = this.state;
    let pageHTML: any;
    switch (page) {
      case Pages.home:
        pageHTML = <Home setPage={this.setPage} />
        break;
      case Pages.projects:
        pageHTML = <Projects />
        break;
      case Pages.about:
        pageHTML = <About />
        break;
      case Pages.contact:
        pageHTML = <Contact />
        break;
    
      default:
        break;
    }
    return (
      <div className="App">
        <Header appState={this.state} setPage={this.setPage} />
        {pageHTML}
        <Footer />
      </div>
    );
  }
}

export default App;
