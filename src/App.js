import React from "react";
import Header from "./components/Header";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import './App.css';
import Display from "./components/Display";


function App() {
  return (
    <div className="App">
      <Header />
      <Display/>
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
