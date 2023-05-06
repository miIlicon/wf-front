import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./pages/Index/Index";
import Header from "./components/common/Header";
import Banner from "./components/common/Banner";
import GlobalStyles from "./styles/GlobalStyles";
import Detail from "./pages/Detail/Detail";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <GlobalStyles />
        <Header />
        <Banner />
        <Routes>
          <Route path="/" element={<Index />}></Route>
          <Route path="/detail" element={<Detail />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
