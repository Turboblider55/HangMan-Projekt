import axios from 'axios';

export const RandomWord= async ()=>{
    const response = await axios.get('https://hangmanphp.herokuapp.com/randomWord.php');
    return response;
}
