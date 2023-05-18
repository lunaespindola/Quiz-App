import { useState, useEffect } from "react";
import axios from 'axios';

function App() {
  
  const [data, setData] = useState([]);
  const [message, setMessage] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/message')
    .then( 
      response => {
        console.log(response)
        return response.data
      })
    .then( 
      data => {
        setData(data)
        console.log(data)
      });
  }, []
  );

  useEffect(() => {
    axios.get('http://localhost:5000/message/0')
    .then(
      response => {
        console.log(response)
        return response.data
      })
    .then(
      data => {
        setMessage(data)
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


      {typeof message.message === 'undefined' ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h1>Message</h1>
          <ul>
            {message.message.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          </div>
      )}

    </div>
  );
}

export default App;