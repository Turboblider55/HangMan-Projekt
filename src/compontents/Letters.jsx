import React from 'react'
import { betuk } from './abc';

const Letters = ({WrongLetter,SetWrongLetter,WordToFind,FoundLetters,SetFoundLetters}) =>{
    const EvalLetter = (letter) => {
        if([...WordToFind.toUpperCase()].indexOf(letter.betu) === -1){
            SetWrongLetter(WrongLetter + 1);
            //console.log(WrongLetter);
        }else if(!FoundLetters.includes(letter.betu)){
            //console.log(letter);
            //console.log([...FoundLetters].push(letter.betu))
            SetFoundLetters(FoundLetters.concat([letter.betu]));
        }
    }
  return (
        <div className='Letters'>
            {betuk.map(betu=><div className='Letter' key={betu} onClick={() => EvalLetter({betu})} >{betu}</div>)}
        </div>
  )
}

export default Letters;
