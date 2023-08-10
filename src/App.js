import * as React from 'react'
import {Header} from "./components/Header.js";
import {Footer} from "./components/Footer.js";
import {Quiz} from "./components/Quiz.js";

export default function App() {
  return (
    <div> 
      <Header />
      <Quiz number={0}/>
      <Footer />
    </div>
  );
}