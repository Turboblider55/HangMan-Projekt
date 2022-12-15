import React from 'react'

const HangMan = ({WrongLetter}) => {
  return (
    <div className='Elements'>
        
        <svg width={300} height={200}>
            {WrongLetter > 0 &&<line x1={0} y1 = {200} x2 = {250} y2 = {200} strokeWidth = {2} stroke={'white'}/>}
            {WrongLetter > 1 &&<line x1={50} y1 = {200} x2 = {50} y2 = {0} strokeWidth = {2} stroke={'white'}/>}
            {WrongLetter > 2 &&<line x1={50} y1 = {0} x2 = {150} y2 = {0} strokeWidth = {2} stroke={'white'}/>}
            {WrongLetter > 3 &&<line x1={150} y1 = {0} x2 = {150} y2 = {25} strokeWidth = {2} stroke={'white'}/>}
            {WrongLetter > 4 &&<circle cx = {150} cy = {40} r = {15} strokeWidth = {2} stroke={'white'} fill = {'rgb(25,50,75)'}/>}
            {WrongLetter > 5 &&<line x1={150} y1 = {55} x2 = {150} y2 = {120} strokeWidth = {2} stroke={'white'}/>}
            {WrongLetter > 6 &&<line x1={150} y1 = {60} x2 = {125} y2 = {80} strokeWidth = {2} stroke={'white'}/>}
            {WrongLetter > 7 &&<line x1={150} y1 = {60} x2 = {175} y2 = {80} strokeWidth = {2} stroke={'white'}/>}
            {WrongLetter > 8 &&<line x1={150} y1 = {120} x2 = {135} y2 = {150} strokeWidth = {2} stroke={'white'}/>}
            {WrongLetter > 9 &&<line x1={150} y1 = {120} x2 = {165} y2 = {150} strokeWidth = {2} stroke={'white'}/>}
            
        </svg>
    </div>
  )
}

export default HangMan;
