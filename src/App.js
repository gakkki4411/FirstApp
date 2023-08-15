import * as React from 'react'
import {Header} from "./components/Header.js";
import {Footer} from "./components/Footer.js";
import {Quiz} from "./components/Quiz.js";
import {useState} from "react";
import {QuestionsAndHints, NumberOfQuestion} from "./components/questions/QuestionsAndHints.js";
const numbers = ()=>{
  var ans = [];
  for(var i=1; i<=NumberOfQuestion(); i++){
    ans.push(i);
  }
  return ans;
}
const list = numbers();

export default function App() {
  const [selectedQuestions, setSelectedQuestions] = useState(1);
  function change(e){
    setSelectedQuestions(e.target.value);
  }
  const Questions = list.map((number) => 
  <option key={number} value={number}>{number}</option>
  );
  return (
    <div className="home"> 
      <Header />
      問題番号を選択してstartを押してください
      <select onChange={change} value={selectedQuestions}>
          {Questions}
      </select>
      <Quiz hints={QuestionsAndHints(selectedQuestions-1)["Hints"]} 
      selection={QuestionsAndHints(selectedQuestions-1)["Selections"]} 
      answer={QuestionsAndHints(selectedQuestions-1)["Answer"]}/>
      <Footer />
    </div>
  );
}