import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./pages/Index/Index";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
