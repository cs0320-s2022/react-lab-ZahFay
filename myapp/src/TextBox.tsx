import React from 'react';
import './App.css';


interface text{
    label: string;
    changeHandler: (value: string) => void;
}


function TextBox(props: text) {
  return (
      <div>
          <label>{props.label}: </label>
          <input type="text" onChange={event => props.changeHandler(event.target.value)}/>
      </div>

  );
}

export default TextBox;