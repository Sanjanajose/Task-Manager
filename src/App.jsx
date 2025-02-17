import React from "react";
import TaskList from "./components/TaskList";
import TaskSection from "./components/TaskSection";
import { GlobalStyle } from "./styles/GlobalStyles";
import Task1Section from "./components/Task1Section"; 
import FooterSection from "./components/FooterSection";

function App() {
  return (
    <>
      <GlobalStyle />

      {/* Wrapper div to encapsulate the sections */}
      <div>
        <TaskList />
        <TaskSection />
        <Task1Section />
        <FooterSection />
      </div>
    </>
  );
}

export default App;



