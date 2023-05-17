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
      {typeof data.message === 'undefined' ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h1>Messages</h1>
          <ul>
            {data.message.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}

    </div>
  );
}

export default App;