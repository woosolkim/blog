import React from "react";
import styled from "@emotion/styled";
import TitleDesc from "core/title-desc";
import Title from "core/title";
import PostText from "core/post-text";

interface Props {
  title: string;
  createdAt: string;
  author: string;
  prevText: string;
}
const PostPrevWrap = styled.div`
  border-bottom: 1px solid #eaecef;
  margin-bottom: 24px;
`;

const PostPrev = styled.div`
  padding: 8px;
`;

const Margin = styled.div`
  height: 12px;
`;

const PostPreview = ({ title, createdAt, author, prevText }: Props) => {
  return (
    <PostPrevWrap>
      <PostPrev>
        <TitleDesc createdAt={createdAt} author={author} />
        <Margin />
        <Title title={title} />
        <PostText text={prevText} />
        <Margin style={{ height: "48px" }} />
      </PostPrev>
    </PostPrevWrap>
  );
};

export default PostPreview;
