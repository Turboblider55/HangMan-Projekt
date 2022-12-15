import React from 'react'
import { Button } from 'reactstrap'
const Restart = ({ResetHangMan}) => {
  return (
    <div className='Elements'>
    <Button color='secondary' onClick={()=>ResetHangMan()}>New Game</Button>
    </div>
  )
}

export default Restart;
