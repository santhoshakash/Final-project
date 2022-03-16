import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Firstroutes } from "./router/firstrouter";
import { LogincontextProvider } from "./context/logincontext";

function App() {
  return (
    <BrowserRouter>
      <LogincontextProvider>
        <Firstroutes />
      </LogincontextProvider>
    </BrowserRouter>
  );
}

export default App;
