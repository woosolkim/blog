import React from "react";
import styled from "@emotion/styled";
import Chips from "core/chip";
import LinkIcon from "images/link.svg";
import { ImagesType } from "data/blog-data";
import Title from "core/title";
import TitleDesc from "core/title-desc";

interface Props {
  mainTitle: string;
  mainImage: ImagesType;
  createdAt: string;
  author: string;
  tag: string[];
}

const Container = styled.div`
  width: 100%;
`;

const TitleWrap = styled.div`
  border-bottom: 1px solid #eaecef;
  padding-left: 8px;
`;

const HeaderDesc = styled.div`
  padding: 8px;
  display: flex;
  justify-content: space-between;
`;

const ChipsWrap = styled.div`
  padding-left: 8px;
`;
const MainImgWrap = styled.div`
  padding: 24px 24px;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
const MainImg = styled.img``;

const ImgDesc = styled.div`
  padding: 8px;
  text-align: center;
  color: #6a737d;
  font-size: 0.8rem;
`;

const Right = styled.div``;
const Link = styled.img`
  height: 1rem;
  width: auto;
`;

const PostHeader = ({
  mainTitle,
  mainImage,
  createdAt,
  author,
  tag,
}: Props) => {
  return (
    <Container>
      <TitleWrap>
        <Title title={mainTitle} />
      </TitleWrap>
      <HeaderDesc>
        <TitleDesc createdAt={createdAt} author={author} />
        <Right>
          <Link src={LinkIcon} />
        </Right>
      </HeaderDesc>
      <ChipsWrap>
        <Chips title={tag} />
      </ChipsWrap>
      <MainImgWrap>
        <MainImg src={mainImage.url} />
        <ImgDesc>{mainImage.desc}</ImgDesc>
      </MainImgWrap>
    </Container>
  );
};

export default PostHeader;
