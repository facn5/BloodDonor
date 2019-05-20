import React from 'react';
import './inspirationPage.css';
import { Inspiration } from './inspiration/inspiration.js';

export class InspirationPage extends React.Component {
    state = {
    cards:[]
  }
    componentDidMount() {
      fetch('/getInsp').then(res => res.json()).then(data=>{this.setState({cards:data});
    console.log(this.state.cards);})
    }
    render() {

      const {cards}=this.state;
      console.log(cards.data);

      if(cards.length === 0) return (<h1>Loading...</h1>)

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
