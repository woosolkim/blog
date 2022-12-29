import React from "react";
import styled from "@emotion/styled";

const TitleStyle = styled.div`
  font-size: 32px;
  line-height: 32px;
  font-weight: 600;
  color: #212121;
  margin-bottom: 16px;
  padding-left: 8px;
`;

const Title = ({ title }: { title: string }) => {
  return <TitleStyle>{title}</TitleStyle>;
};

export default Title;
