import Home from "components/home";
import Other from "components/other";
import Header from "core/app-bar";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hi" element={<Other />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
