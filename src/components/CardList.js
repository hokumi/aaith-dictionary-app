import React from 'react';
import Card from './Card';

const CardList = ({words}) =>{
    const cardsArray = words.map((user, i) => {
        return (
        <Card key={i} 
        id={words[i].id} 
        word={words[i].word} 
        rom={words[i].rom} 
        phon={words[i].phon} 
        gram={words[i].gram} 
        meaning={words[i].meaning}
        />)
        })
    return(
    <div className='wrapper'>
      {cardsArray}
    </div>
    );
    }

export default CardList;