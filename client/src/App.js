import React from "react";
import { useState, useEffect } from "react";

function App() {
  
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/message")
    .then( 
      response => response.json())
    .then( 
      data => {
        setData(data)
        console.log(data)
      });
  }, []
  );

  return (
    <div>
      <h1>Messages</h1>
      {data.message.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </div>
  );
}

export default App;