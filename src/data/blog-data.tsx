export interface BlogDataType {
  id: number;
  mainTitle: string;
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

export const BLOG_DATA: BlogDataType[] = [
  {
    id: 1,
    mainTitle: "블로그 테스트",
    mainImage: {
      seq: 1,
      url: "https://techblog.woowahan.com/wp-content/uploads/2022/12/1.-%E1%84%86%E1%85%A1%E1%86%AB%E1%84%83%E1%85%B3%E1%84%82%E1%85%B3%E1%86%AB-%E1%84%89%E1%85%A1%E1%84%85%E1%85%A1%E1%86%B7%E1%84%8B%E1%85%B5.png",
      desc: "안뇽 ",
    },

    createdAt: "Dec,29,2022",
    author: "woosolkim",
    tag: ["Frontend", "일상"],
    innerList: [
      {
        seq: 1,
        title: "들어가며",
        desc: "동해물과 백두산이",
        text: [
          "오늘은 블로그 연습을 합니다. 이런저런 연습을 해봐요 줄바꿈도 해보구요 글자가 많아지면 어떻게 되는지 볼까요 공유합니다 기능 요구사항이 복잡하고 반영한 부분 프론트엔드 기본 기능들을 다 기획서가 나와",
          "동해물과",
          "백두산이",
          "요종도",
        ],
        images: [
          {
            seq: 1,
            url: "https://images.onthelook.co.kr/posts/20221223051251384212310.jpeg?w=600&q=60&f=webp",
            desc: "그림 [1] 스크롤 위치가 맨 위로 올라가는 안좋은 예시",
          },
          {
            seq: 2,
            url: "https://images.onthelook.co.kr/posts/20221223051251384212310.jpeg?w=600&q=60&f=webp",
            desc: "그림 [2] 스크롤 위치가 맨 위로 올라가는 안좋은 예시",
          },
          {
            seq: 3,
            url: "https://images.onthelook.co.kr/posts/20221223051251384212310.jpeg?w=600&q=60&f=webp",
          },
        ],
      },
      {
        seq: 2,

        title: "오널은 여기까지만 합시다",
        desc: "동해물과 백두산이",
        text: [
          "오늘은 블로그 연습을 합니다. 이런저런 연습을 해봐요 줄바꿈도 해보구요",
          "동해물과",
          "백두산이",
          "요종도",
        ],
        images: [
          {
            seq: 1,
            url: "https://images.onthelook.co.kr/posts/20221223051251384212310.jpeg?w=600&q=60&f=webp",
            desc: "그림 [1] 스크롤 위치가 맨 위로 올라가는 안좋은 예시",
          },
          {
            seq: 2,
            url: "https://images.onthelook.co.kr/posts/20221223051251384212310.jpeg?w=600&q=60&f=webp",
            desc: "그림 [2] 스크롤 위치가 맨 위로 올라가는 안좋은 예시",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    mainTitle: "블로그 두번째 테스트",
    mainImage: {
      seq: 1,
      url: "https://techblog.woowahan.com/wp-content/uploads/2022/12/1.-%E1%84%86%E1%85%A1%E1%86%AB%E1%84%83%E1%85%B3%E1%84%82%E1%85%B3%E1%86%AB-%E1%84%89%E1%85%A1%E1%84%85%E1%85%A1%E1%86%B7%E1%84%8B%E1%85%B5.png",
      desc: "안뇽 ",
    },

    createdAt: "Dec,29,2022",
    author: "woosolkim",
    tag: ["Frontend", "일상"],
    innerList: [
      {
        seq: 1,
        title: "들어가며",
        desc: "동해물과 백두산이",
        text: [
          "오늘은 블로그 연습을 합니다. 이런저런 연습을 해봐요 줄바꿈도 해보구요 글자가 많아지면 어떻게 되는지 볼까요 공유합니다 기능 요구사항이 복잡하고 반영한 부분 프론트엔드 기본 기능들을 다 기획서가 나와",
          "동해물과",
          "백두산이",
          "요종도",
        ],
        images: [
          {
            seq: 1,
            url: "https://images.onthelook.co.kr/posts/20221223051251384212310.jpeg?w=600&q=60&f=webp",
            desc: "그림 [1] 스크롤 위치가 맨 위로 올라가는 안좋은 예시",
          },
          {
            seq: 2,
            url: "https://images.onthelook.co.kr/posts/20221223051251384212310.jpeg?w=600&q=60&f=webp",
            desc: "그림 [2] 스크롤 위치가 맨 위로 올라가는 안좋은 예시",
          },
          {
            seq: 3,
            url: "https://images.onthelook.co.kr/posts/20221223051251384212310.jpeg?w=600&q=60&f=webp",
          },
        ],
      },
      {
        seq: 2,

        title: "오널은 여기까지만 합시다",
        desc: "동해물과 백두산이",
        text: [
          "오늘은 블로그 연습을 합니다. 이런저런 연습을 해봐요 줄바꿈도 해보구요",
          "동해물과",
          "백두산이",
          "요종도",
        ],
        images: [
          {
            seq: 1,
            url: "https://images.onthelook.co.kr/posts/20221223051251384212310.jpeg?w=600&q=60&f=webp",
            desc: "그림 [1] 스크롤 위치가 맨 위로 올라가는 안좋은 예시",
          },
          {
            seq: 2,
            url: "https://images.onthelook.co.kr/posts/20221223051251384212310.jpeg?w=600&q=60&f=webp",
            desc: "그림 [2] 스크롤 위치가 맨 위로 올라가는 안좋은 예시",
          },
        ],
      },
    ],
  },
];
