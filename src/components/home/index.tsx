import React from "react";
import styled from "@emotion/styled";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Text = styled.div`
  font-size: 21px;
  line-height: 21px;
  color: #111;
`;

const Home = () => {
  return (
    <Container>
      <Text>This is home</Text>
      <Text>I will fix it</Text>
    </Container>
  );
};

export default Home;
