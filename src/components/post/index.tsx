import React from "react";
import styled from "@emotion/styled";
import PostParagraph from "core/post-paragraph";
import { BLOG_DATA } from "data/blog-data";
import PostHeader from "core/post-header";
import { useParams } from "react-router-dom";
const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 24px 12px;
`;

const Other = () => {
  const { id } = useParams();
  const postNumber = id || -1;

  const post = BLOG_DATA?.[postNumber];
  const postParagraph = post?.innerList;

  if (!post) {
    return <div>포스트가 없어요</div>;
  }

  return (
    <Container>
      <PostHeader
        mainTitle={post.mainTitle}
        mainImage={post.mainImage}
        createdAt={post.createdAt}
        author={post.author}
        tag={post.tag}
      />

      {postParagraph.map((p) => {
        const title = p.title;
        const desc = p.desc;
        const text = p.text;
        const images = p.images;
        return (
          <div key={p.seq}>
            <PostParagraph
              title={title}
              desc={desc}
              text={text}
              images={images}
            />
          </div>
        );
      })}
    </Container>
  );
};

export default Other;
