import './index.css';
import Letters  from './compontents/Letters';
import Restart from './compontents/Restart';
import HangMan from './compontents/HangMan';
import SecretWord from './compontents/SecretWord';
import { useEffect, useState } from 'react';
import Modal from './compontents/Modal';
import { useQuery } from 'react-query';
import { RandomWord } from './compontents/RandomWord';
function App() {

  const [modal, setModal] = useState(false);
  //A kitalálandó szó
  const [WordToFind,SetWordToFind] = useState("");
  //A hibák száma
  const [WrongLetter,SetWrongLetter] = useState(0);
  //Az eltalált betűk
  const [FoundLetters,SetFoundLetters] = useState([]);
  //A végén felugró modal szövege
  const [Text,SetText] = useState({});
  //A játékmenet állapota
  const [GameOver,SetGameOver] = useState(true)
  //A véletlen kért szó
  let {data,status} = useQuery(['RandomWord',GameOver],RandomWord);
  //A játék újraindítása
  const ResetHangMan = () => {
    SetGameOver(true);
    SetWrongLetter(0);
    SetFoundLetters([]);
  }
  useEffect(()=>{
    //Ha a hibák száma eléri a tized, a játékos veszít, a játéknak vége
    if(WrongLetter === 10){
      SetText({msg:"Sajnálom 😥! Ez nem jött össze",word:WordToFind});
      setModal(true);
      SetGameOver(true)
      ResetHangMan();
      //Ha a megtalált betűk hossza megegyezik a kitalálandó szó egyedi betűinek hosszával a játékos győz, a játéknak vége
    }else if([...new Set([...WordToFind.toUpperCase()])].length === FoundLetters.length && GameOver === false){
      SetText({msg:"Wow 😀! Szép Munka. Összesen "+WrongLetter+" db hibát ejtettél.",word:WordToFind});
      setModal(true);
      SetGameOver(true);
      ResetHangMan();
    }
    //Ha a kért véletlen szó sikeresen megérkezett, akkor az lesz a megtalálandó szó
    if(status==='success'){
      SetWordToFind(data.data[0].word)
      SetGameOver(false)
    }
      
  })

  return (
    <div className="App">
      <h3 className='text-white'>Hangman</h3>
      <HangMan WrongLetter={WrongLetter}/>
      <SecretWord SecretWord={WordToFind} FoundLetters = {FoundLetters}/>
      <Letters WrongLetter = {WrongLetter} SetWrongLetter = {SetWrongLetter}  WordToFind = {WordToFind} FoundLetters={FoundLetters} SetFoundLetters={SetFoundLetters}/>
      <Restart ResetHangMan = {ResetHangMan}/>
      <Modal modal={modal} setModal = {setModal} Text={Text}/>
    </div>
  );
}

export default App;
