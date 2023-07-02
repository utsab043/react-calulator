import React from 'react'

import CalculatorBtn from './Button';
import { ScreenDisplay } from './Screen';

// named export ma chai {} vitra rakhnu
function showNine(){}

export const App = () => {
  let ScreenText = "99999";
  const DisplayText = (text) => {
    ScreenText = text;
  }
  return (
    <div> <ScreenDisplay text="9999"/>
    <CalculatorBtn text="0" handelclick={()=>DisplayText(0)}/>
    <CalculatorBtn text="1" handelclick={()=>DisplayText(1)}/>
    <CalculatorBtn text="2" handelclick={()=>DisplayText(2)}/>
    <CalculatorBtn text="3" handelclick={()=>DisplayText(3)}/>
    <CalculatorBtn text="4" handelclick={()=>DisplayText(4)}/>
    <CalculatorBtn text="5" handelclick={()=>DisplayText(5)}/>
    <CalculatorBtn text="6" handelclick={()=>DisplayText(6)}/>
    <CalculatorBtn text="7" handelclick={()=>DisplayText(7)}/>
    <CalculatorBtn text="8" handelclick={()=>DisplayText(8)}/>
    <CalculatorBtn text="9" handelclick={()=>DisplayText(9)}/>
    </div>
  )
}
