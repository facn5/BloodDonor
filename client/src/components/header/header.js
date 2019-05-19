import React from 'react';
import './header.css';
import '../../containers/style'

export class Header extends React.Component {
  state = {
    slideClass: 'nav-links',
    animate: '',
    mbNavBarClass: 'mobile-navBar',
  };

  ToggleSlide = () => {
    if (this.state.slideClass === 'nav-links')
      this.setState({ slideClass: 'nav-links nav-active' });
    else this.setState({ slideClass: 'nav-links' });

    if (this.state.animate === '') this.setState({ animate: 'navLinkFade 0.5s ease forwards' });
    else this.setState({ animate: '' });

    if (this.state.mbNavBarClass === 'mobile-navBar') this.setState({ mbNavBarClass: 'mobile-navBar toggle' });
    else this.setState({ mbNavBarClass: 'mobile-navBar' });
  };

  onLogin = () => {
    this.props.history.push('/login');
  }

  onInspiration = () => {
    this.props.history.push('/inspiration');
  }

  onDonate = () => {
    this.props.history.push('/');
  }

  onAbout = () => {
    this.props.history.push('/about');
  }

  render() {
    return (
      <div className="nav-container">
        <div className="nav">
          <div className="logo">
            <a href="#">
              <p>Save a Life</p>
            </a>
          </div>
          <ul className={this.state.slideClass}>
            <li style={{ animation: `${this.state.animate} 0.4s` }}>
              <a onClick={this.onLogin}>Login</a>
            </li>
            <li style={{ animation: `${this.state.animate} 0.6s` }}>
              <a onClick={this.onInspiration}>Inspiration</a>
            </li>
            <li style={{ animation: `${this.state.animate} 0.8s` }}>
              <a onClick={this.onDonate}>Donate</a>
            </li>
            <li style={{ animation: `${this.state.animate} 1.0s` }}>
              <a href="#">Request</a>
            </li>
            <li style={{ animation: `${this.state.animate} 1.2s` }}>
              <a onClick={this.onAbout}>About</a>
            </li>
          </ul>
          <div className={this.state.mbNavBarClass} onClick={this.ToggleSlide}>
            <div className="line1" />
            <div className="line2" />
            <div className="line3" />
          </div>
        </div>
      </div>
    );
  }
}
