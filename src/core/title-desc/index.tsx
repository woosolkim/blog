import React from "react";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  display: flex;
  color: #6a737d;
  font-size: 0.9rem;
`;

const CreatedAt = styled.div`
  margin-right: 8px;
`;

const Author = styled.div``;

const TitleDesc = ({
  createdAt,
  author,
}: {
  createdAt: string;
  author: string;
}) => {
  return (
    <Wrapper>
      <CreatedAt>{createdAt}</CreatedAt>
      <Author>{author}</Author>
    </Wrapper>
  );
};

export default TitleDesc;
