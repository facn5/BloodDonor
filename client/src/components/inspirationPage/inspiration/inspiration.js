import React from 'react';
import './inspiration.css';
import  {InspCardDetails}  from "./inspCard/inspCard.js";

export class Inspiration extends React.Component {
  state = {
    opened:false
  }
  render(){
    const {
      title,
      imgSrc,
      desc
    } = this.props;
    return(
      <>
        <div className='container-inspCard'>
          <div className={this.state.opened?'container-card container-card--opened':'container-card'}>
            <div>
              <img className="img" src={imgSrc} />
            </div>
          <div>
            <p className="title">{title}</p>
            <p className="shortDescription">{desc}</p>
            <button className='readmore' onClick={()=>{this.setState({opened:!this.state.opened})}}>{this.state.opened?'Close':'Read more...'}</button>
            </div>
          </div>
         <div>
             <InspCardDetails isVisible={this.state.opened} description={desc}/>
         </div>
       </div>
    </>
  );
}
}
