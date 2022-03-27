import React, {useState} from 'react';
import TextBox from "./TextBox";
import './App.css';

//@ts-ignore
import {AwesomeButton} from "react-awesome-button";
import "react-awesome-button/dist/styles.css"; // for external button
import axios from 'axios';

function Horoscope() {
  //define constants outside the return statement (return handles html-like code?)
  //these components that use the "useState" hook can only be changed using the defined setter method in brackets
  const [sun,setSun] = useState("");
  const[moon, setMoon] = useState("");
  const [rising, setRising] = useState("");
  const [horoscope, setHoroscope] = useState([]);
    const requestHoroscope = () => {

        const toSend = { //this inner method returns variables to the server, and it's important that the "" part has a definition in server
            //the form: variable in server: variable/value defined in this tsx file
            "sun": sun,
            "moon": moon,
            "rising": rising,

    };

        let config = {
            headers: {
                "Content-Type": "application/json",
                'Access-Control-Allow-Origin': '*',
            }
        }

        //Install and import axios!
        //TODO: Fill in 1) location for request 2) your data 3) configuration
        axios.post('http://localhost:4567/horoscope', toSend, config)
            .then(response => {
                console.log(response.data);
                setHoroscope(response.data['horoscope']);
            })
            .catch(error => {
                console.log(error);
            });
    }

    return (

    <div className="Horoscope">
        <h1>Horoscopes</h1>
      <TextBox label={"Sun Sign"} changeHandler={setSun}/>
      <TextBox label={"Moon Sign"} changeHandler={setMoon}/>
      <TextBox label={"Rising Sign"} changeHandler={setRising}/>

        <AwesomeButton type="primary" onPress={requestHoroscope}>Submit</AwesomeButton>
        <p>
            {horoscope.map((trait: String) => <p>{trait}</p>)}
        </p>
    </div>
  );
}

export default Horoscope;
