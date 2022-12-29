import { PostOne } from "./posts/post-1";

export interface BlogDataType {
  id: number;
  mainTitle: string;
  prevText: string;
  mainImage: ImagesType;
  createdAt: string;
  author: string;
  tag: string[];
  innerList: InnerListType[];
}

export interface InnerListType {
  seq: number;
  title: string;
  desc?: string;
  text: string[];
  images?: ImagesType[];
}

export interface ImagesType {
  seq: number;
  url: string;
  desc?: string;
}

export const BLOG_DATA: BlogDataType[] = [PostOne];
