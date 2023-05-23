import { useState, useEffect } from "react";
import axios from 'axios';


function App() {
  
  const [Question, setQuestion] = useState("");

  const [QuestionID, setQuestionID] = useState({
    id: 0}
  );

function handle(e){
  const newdata={...QuestionID}
  newdata[e.target.id] = e.target.value
  setQuestionID(newdata)
}

function submit(e){
  e.preventDefault()
  axios.post('http://localhost:5000/question', {
    id: QuestionID.id
  })
  .then(function (response) {
    setQuestion(response.data)
    console.log(response.data);
  })
  .catch(function (error) {
    console.log(error);
  });
}


  return (
    <div className="App">
      <h1>Question</h1>
      <form onSubmit={(e)=> submit(e)}>
        <input onChange={(e)=>handle(e)} id="id" value={QuestionID.id} type="text" placeholder="id" />
        <h1>Question</h1>
        <h1>{Question}</h1>
        <button>Get Question</button>
      </form>
      </div>
  );
}

export default App;