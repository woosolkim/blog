import styled from "@emotion/styled";
import Home from "components/home";
import Other from "components/other";
import Header from "core/app-bar";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path={"/post/:id"} element={<Other />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
};

export default App;
