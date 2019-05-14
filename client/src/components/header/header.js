import React from 'react';
import './header.css';


export class Header extends React.Component {
    state = {
        slideClass: "nav-links",
        animate: "",
        burger: "burger"
    }
    ToggleSlide = () => {
        if( this.state.slideClass === "nav-links" ) 
        this.setState({ slideClass: "nav-links nav-active"})
        else
        this.setState({ slideClass: "nav-links"})

        if( this.state.animate === "" ) 
            this.setState({animate: "navLinkFade 0.5s ease forwards"})
    
        else
        this.setState({ animate: ""})

        if( this.state.burger === "burger" ) 
        this.setState({ burger: "burger toggle"})
        else
        this.setState({ burger: "burger"})

    }
    render() {

    return ( 
        <div className="nav">
        <div className="logo">
           <a href="#">
           <p>Save a Life</p>
           </a>
        </div>
<ul className={this.state.slideClass}>
 <li style={{animation: (`${this.state.animate} 1.0s`)}}><a href="#">Login</a></li>
 <li style={{animation: (`${this.state.animate} 1.2s`)}}><a href="#">Inspiration</a></li>
 <li style={{animation: (`${this.state.animate} 1.4s`)}}><a href="#">Donate</a></li>
 <li style={{animation: (`${this.state.animate} 1.6s`)}}><a href="#">Request</a></li>
 <li style={{animation: (`${this.state.animate} 1.8s`)}}><a href="#">About</a></li>

</ul>
<div className={this.state.burger} onClick={this.ToggleSlide}>
     <div className="line1"></div>
     <div className="line2"></div>
     <div className="line3"></div>

</div>
    </div>
    );
}
}