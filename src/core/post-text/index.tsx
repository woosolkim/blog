import React from "react";
import styled from "@emotion/styled";

const TextWrap = styled.div`
  color: #24292e;
  display: block;
  font-size: 0.9rem;
`;

const PostText = ({ text }: { text: string }) => {
  return <TextWrap>{text}</TextWrap>;
};

export default PostText;
