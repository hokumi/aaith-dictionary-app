import React from 'react';

const Card = (props) => {
    const {word, rom, phon, gram, meaning} = props;
    return(
        <div className='flashcard'>
            <div className='mword'><h1>{word}</h1></div>
            <div className='rom'>
                <h2>{rom}</h2>
            </div>            
                <div className='phon text'><p>{phon}</p></div>
                <div className='second-row'>
                <div className='gram text'><p>{gram}</p></div>
                <div className='meaning text'><p>{meaning}</p></div>
                </div>
        </div>
    );
}

//we can only return one thing


export default Card;