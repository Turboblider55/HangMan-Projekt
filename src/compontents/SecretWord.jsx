import React from 'react'
import { betuk } from './abc';
const SecretWord = ({SecretWord,FoundLetters}) => {
    const CheckTheLetters = (letter) => {
      //Teszt szavak esetében meg jelenítette azokat a szavakat amelyek nem lehetnek lehetséges beviteli karakterek,
      //Ilyen minden olyan karakter ami nincs benne az abj.js tömbjébe
      //console.log(FoundLetters);
        if(betuk.indexOf(letter) === -1 )
          return <div key={letter+""+Math.random()} className='text-white'>{ letter }</div>
        
        if(FoundLetters.indexOf(letter) !== -1)
          return <div key={letter+""+Math.random()} className='Secret'>{ letter }</div>
        
          return <div key={letter+""+Math.random()} className='Secret'></div>
    }
  return (
    <div className='SecretWord Elements'>
        {/*[...SecretWord.toUpperCase()].map(letter=>betuk.indexOf(letter) !== -1 ? <div className='Secret' key={letter+''+Math.random()}></div>:<div key={letter+''+Math.random()} className='Secret'>{letter}</div>)*/}
        {[...SecretWord.toUpperCase()].map(letter=>CheckTheLetters(letter))}
    </div>
  )
}
export default SecretWord;
