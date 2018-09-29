// Code EyesOnMe Component Here
import React from 'react';
export default class Keypad extends React.Component {
  constructor() {
    
  }
  onKeyUp=()=>{
    console.log("Good!")
  }

  render(){
    return (<input type='text' onKeyUp={onKeyUp} />)
  }
}