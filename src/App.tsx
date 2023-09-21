/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./pages/Index/Index";
import Header from "./components/common/Header";
import Banner from "./components/common/Banner";
import GlobalStyles from "./styles/GlobalStyles";
import Detail from "./pages/Detail/Detail";
import FestivalVideoPage from "./pages/FestivalVideoPage";
import Editor from "./pages/Editor";
import Login from "./pages/Login/Login";
import ScrollToTop from "./hooks/ScrollToTop";
import VideoPost from "./pages/Video/VideoPost";
import Community from "./pages/Community/Community";
import BoothPage from "./pages/BoothPage";
import ProgramPage from "./pages/ProgramPage";
import InformPage from "./pages/InformPage";
import CategoryPage from "./pages/CategoryPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <GlobalStyles />
        <Routes>
          <Route element={<Header />}>
            <Route element={<Banner />}></Route>
            <Route path="/" element={<Index />}></Route>
            <Route path="/detail" element={<Detail />}></Route>
            <Route path="/program" element={<ProgramPage />}></Route>
            <Route path="/booth" element={<BoothPage />}></Route>
            <Route path="/inform" element={<InformPage />}></Route>
            <Route path="/video" element={<FestivalVideoPage />}></Route>
            <Route path="/edit" element={<Editor />}></Route>
            <Route path="/community" element={<Community />}></Route>
            <Route path="/videoPost" element={<VideoPost />}></Route>
          </Route>
          <Route path="/category" element={<CategoryPage />} />
          <Route path="/admin" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
