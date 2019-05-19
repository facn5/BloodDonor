import React from 'react';
import './inspirationPage.css';
import { Inspiration } from './inspiration/inspiration.js';

export class InspirationPage extends React.Component {
    state = {
    cards:[{title:'first title',imgSrc:'./noimage.png',desc:'first desc'},{title:'second title',imgSrc:'../noimage.png',desc:'second desc'},{title:'third title',imgSrc:'../noimage.png',desc:'third desc'}]
  }
    render() {

      const {cards}=this.state;
      return(
        <>
        <Inspiration title={cards[0].title} imgSrc={cards[0].imgSrc} desc={cards[0].desc} />
        <Inspiration title={cards[1].title} imgSrc={cards[1].imgSrc} desc={cards[1].desc} />
        <Inspiration title={cards[2].title} imgSrc={cards[2].imgSrc} desc={cards[2].desc} />
        </>
      );
    }

}
