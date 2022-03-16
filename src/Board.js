import { useState } from 'react';
import './board.css'
import Button from './Button';
function Board() {
  const [turn, setTurn] = useState('x');
  const switchTurn = ()=>{
    if(turn==='x') setTurn('o')
    else setTurn('x')
  }
  return (
    <table >
    <tbody>
      <tr>
        <td><Button currentTurn={turn} onAction={switchTurn}/></td>
        <td><Button currentTurn={turn} onAction={switchTurn}/></td>
        <td><Button currentTurn={turn} onAction={switchTurn}/></td>
      </tr>
      <tr>
        <td><Button currentTurn={turn} onAction={switchTurn}/></td>
        <td><Button currentTurn={turn} onAction={switchTurn}/></td>
        <td><Button currentTurn={turn} onAction={switchTurn}/></td>
      </tr>
      <tr>
        <td><Button currentTurn={turn} onAction={switchTurn}/></td>
        <td><Button currentTurn={turn} onAction={switchTurn}/></td>
        <td><Button currentTurn={turn} onAction={switchTurn}/></td>
      </tr>
    </tbody>
  </table>
  );
}

export default Board;
