import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import { MainContainer } from "./styles/GlobalComponents";
function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Header />
      <MainContainer>
        <Routes>
          <Route exact path="/" element={<Hero />} />
        </Routes>
      </MainContainer>
    </BrowserRouter>
  );
}

export default App;
