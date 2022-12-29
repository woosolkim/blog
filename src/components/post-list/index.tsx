import React from "react";
import styled from "@emotion/styled";
import { BLOG_DATA } from "data/blog-data";

import PostPreview from "core/post-prev";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 24px 12px;
`;

const Wrap = styled.div`
  cursor: pointer;
`;

const PostList = () => {
  const navigate = useNavigate();

  return (
    <Container>
      {BLOG_DATA.map((p) => {
        return (
          <Wrap onClick={() => navigate(`/post/${p.id}`)}>
            <PostPreview
              title={p.mainTitle}
              createdAt={p.createdAt}
              author={p.author}
              prevText={p.prevText}
            />
          </Wrap>
        );
      })}
    </Container>
  );
};

export default PostList;
