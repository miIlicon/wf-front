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
import FestivalPage from "./pages/FestivalPage";
import FleamarketPage from "./pages/FleamarketPage";
import FoodtruckPage from "./pages/FoodtruckPage";
import FestivalVideoPage from "./pages/FestivalVideoPage";
import Editor from "./pages/Editor";
import Login from "./pages/Login/Login";
import ScrollToTop from "./hooks/ScrollToTop";
import VideoPost from "./pages/Video/VideoPost";
import Community from "./pages/Community/Community";

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
            <Route path="/festivalInfo" element={<FestivalPage />}></Route>
            <Route path="/fleamarket" element={<FleamarketPage />}></Route>
            <Route path="/foodtruck" element={<FoodtruckPage />}></Route>
            <Route path="/video" element={<FestivalVideoPage />}></Route>
            <Route path="/edit" element={<Editor />}></Route>
            <Route path="/community" element={<Community />}></Route>
            <Route path="/videoPost" element={<VideoPost />}></Route>
          </Route>
          <Route path="/admin" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
