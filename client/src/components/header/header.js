import React from 'react';
import './header.css';
import '../../containers/style';
import cookie from 'react-cookie';

export class Header extends React.Component {
  state = {
    slideClass: 'nav-links',
    animate: '',
    mbNavBarClass: 'mobile-navBar',
    authenticated: '',
  };

  ToggleSlide = () => {
    this.checkAuth();
    if (this.state.slideClass === 'nav-links')
      this.setState({ slideClass: 'nav-links nav-active' });
    else this.setState({ slideClass: 'nav-links' });

    if (this.state.animate === '') this.setState({ animate: 'navLinkFade 0.5s ease forwards' });
    else this.setState({ animate: '' });

    if (this.state.mbNavBarClass === 'mobile-navBar')
      this.setState({ mbNavBarClass: 'mobile-navBar toggle' });
    else this.setState({ mbNavBarClass: 'mobile-navBar' });
  };

  componentDidMount = () => {
    this.checkAuth();
  };

  checkAuth = () => {
    fetch('/checkauth')
      .then(res => res.json())
      .then(data => {
        if (data.authenticated) {
          if (this.state.authenticated !== 'Log out') this.setState({ authenticated: 'Log out' });
        } else {
          if (this.state.authenticated !== 'Login') this.setState({ authenticated: 'Login' });
        }
      });
  };

  exitNavbar = () => {
    this.setState({
      slideClass: 'nav-links',
      mbNavBarClass: 'mobile-navBar',
      animate: '',
    });
  };

  onLogin = () => {
    const { authenticated } = this.state;
    if (authenticated === 'Login') this.props.history.push('/login');
    else {
      cookie.remove('udetails');
      this.props.history.push('/');
    }
    this.exitNavbar();
  };

  onInspiration = () => {
    this.props.history.push('/inspiration');
    this.exitNavbar();
  };

  onDonate = () => {
    this.props.history.push('/');
    this.exitNavbar();
  };

  onAbout = () => {
    this.props.history.push('/about');
    this.exitNavbar();
  };

  onProfile = () => {
    this.props.history.push('/profile');
    this.exitNavbar();
  };

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
            <li style={{ animation: `${this.state.animate} 0.2s` }}>
              <a onClick={this.onLogin}>{this.state.authenticated}</a>
            </li>
            <li style={{ animation: `${this.state.animate} 0.3s` }}>
              <a onClick={this.onInspiration}>Inspiration</a>
            </li>
            <li style={{ animation: `${this.state.animate} 0.4s` }}>
              <a onClick={this.onDonate}>Donate</a>
            </li>
            <li style={{ animation: `${this.state.animate} 0.5s` }}>
              <a href="#">Request</a>
            </li>
            <li style={{ animation: `${this.state.animate} 0.6s` }}>
              <a onClick={this.onAbout}>About</a>
            </li>
            <li
              className={this.state.authenticated !== 'Log out' ? 'hideProfile' : ''}
              style={{ animation: `${this.state.animate} 0.7s` }}
            >
              <a onClick={this.onProfile}>My profile</a>
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
