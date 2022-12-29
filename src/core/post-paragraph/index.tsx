import React from "react";
import styled from "@emotion/styled";
import { ImagesType } from "data/blog-data";
import PostText from "core/post-text";

interface Props {
  title: string;
  desc?: string;
  text?: string[];
  images?: ImagesType[];
}

const Container = styled.div`
  padding: 64px 0;
  width: 100%;
`;

const SemiTitleWrap = styled.div`
  border-bottom: 1px solid #eaecef;
`;

const SemiTitle = styled.div`
  font-size: 24px;
  line-height: 21px;
  font-weight: 600;
  color: #212121;
  margin-bottom: 16px;
  padding-left: 8px;
`;

const Desc = styled.div`
  padding: 8px;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5em;
  color: #6a737d;
`;

const TextWrap = styled.div`
  padding: 12px;
`;

const ImgWrap = styled.div<{ imgLength: number }>`
  display: grid;
  grid-template-columns: repeat(${(prop) => prop.imgLength}, minmax(0, 1fr));
  grid-gap: 2px;
`;

const ImgInnerWrap = styled.div``;
const Img = styled.img`
  width: 100%;
`;

const ImgDesc = styled.div`
  text-align: center;
  color: #6a737d;
  font-size: 0.8rem;
`;

const PostParagraph = ({ title, desc, text, images }: Props) => {
  return (
    <Container>
      <SemiTitleWrap>
        <SemiTitle>{title}</SemiTitle>
      </SemiTitleWrap>
      {desc && <Desc>| {desc}</Desc>}
      {text && (
        <TextWrap>
          {text?.map((t) => {
            return (
              <>
                <PostText text={t} />
                <div style={{ marginBottom: "8px" }} />
              </>
            );
          })}
        </TextWrap>
      )}
      {images && (
        <ImgWrap imgLength={images?.length}>
          {images?.map((img) => {
            return (
              <ImgInnerWrap>
                <Img src={img.url} />
                {img.desc && <ImgDesc>{img.desc}</ImgDesc>}
              </ImgInnerWrap>
            );
          })}
        </ImgWrap>
      )}
    </Container>
  );
};

export default PostParagraph;
