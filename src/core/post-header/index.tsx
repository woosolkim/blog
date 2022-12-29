import React from "react";
import styled from "@emotion/styled";
import Chips from "core/chip";
import LinkIcon from "images/link.svg";
import { ImagesType } from "data/blog-data";

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
`;

const Title = styled.div`
  font-size: 32px;
  line-height: 32px;
  font-weight: 600;
  color: #212121;
  margin-bottom: 16px;
  padding-left: 8px;
`;

const HeaderDesc = styled.div`
  padding: 8px;
  display: flex;
  justify-content: space-between;
  color: #6a737d;
  font-size: 0.9rem;
`;

const Left = styled.div`
  display: flex;
`;
const CreatedAt = styled.div`
  margin-right: 8px;
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

const Author = styled.div``;
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
        <Title>{mainTitle}</Title>
      </TitleWrap>
      <HeaderDesc>
        <Left>
          <CreatedAt>{createdAt}</CreatedAt>
          <Author>{author}</Author>
        </Left>
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
