import React from 'react';
import './inspirationPage.css';
import { Inspiration } from './inspiration/inspiration.js';
import Spinner from 'react-spinner-material';

export class InspirationPage extends React.Component {
    state = {
    cards:[]
  }
    componentDidMount() {
      fetch('/getInsp').then(res => res.json()).then(data=>{this.setState({cards:data})})
    }
    render() {
      const {cards}=this.state;
      if(cards.length === 0) return (<Spinner className="spinner" size={60} spinnerColor={"#333"} spinnerWidth={2} visible={true} />
)

      return(
        <>
          {cards.data.slice(0,10).map(card =>(
          <Inspiration title={card.title} desc={card.description} imgSrc={card.picture}/>
        )
      )}

      </>
      );
    }

}
