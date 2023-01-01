import React from 'react';
import logo from './logo.svg';
import './App.css';
import {User} from "./05/06-callbacks";

function App() {
  const names = ["Dimych", "Katya", "viktor", "Ignat"]

  const lieElements = names.map(n=><li>{n}</li>)
  return (
      <div className={"App"}>
        <ul>
          {/*{lieElements}*/}
            <User/>
        </ul>
    </div>
  );
}

export default App;
