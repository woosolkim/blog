import { BlogDataType } from "data/blog-data";

export const PostOne: BlogDataType = {
  id: 0,
  mainTitle: "직접 만든 블로그의 첫 포스팅",
  prevText: "블로그를 왜 만들었는가.., 무엇을 포스팅할 것인가..",
  mainImage: {
    seq: 1,
    url: "https://openimage.interpark.com/goods_image_big/6/5/4/1/10110716541_l.jpg",
    desc: "온더룩 복지로 구매한 도커 교과서",
  },

  createdAt: "Dec. 29. 2022",
  author: "woosolkim",
  tag: ["일상"],
  innerList: [
    {
      seq: 1,
      title: "왜 블로그를 만들었는가?",
      desc: "좀 잘 써놓을걸..",
      text: [
        "2022년도 해가 다 져가고, 온더룩에서에서의 세번째 분기도 마무리 되어간다.",
        "우리 회사에선 분기가 마무리될 때, 스스로 리뷰를 하는 시간을 준다. 이번 분기에 내가 어떤 액션을 진행했는지, 그 액션의 결과는 어떤자, 그것을 바탕으로 지속해나갈 점, 아쉬웠던 점, 시도해볼 점 등을 추론하게 되고 스스로를 평가하게 된다.",
        "(서로를 리뷰해줄수도 있다.)",
        "스스로를 평가하는 시간을 가지면서 아쉬웠던 점도 있다.",
        "사진외에도 많은 기능들을 개발하고, 고쳐가며 모르는 것들을 빠르게 습득하고, 사용하였지만 어설펐다.",
      ],
      images: [
        {
          seq: 1,
          url: "https://images.onthelook.co.kr/p/5XVZmNeP36A5YfevATZe1q.png",
          desc: "인기제품코디",
        },
        {
          seq: 2,
          url: "https://images.onthelook.co.kr/p/gpKFKH3Pu7nyfk1CVWtBFd.png",
          desc: "제품 북마크",
        },
        {
          seq: 3,
          url: "https://images.onthelook.co.kr/p/cQuQ2q3zv4RAbp8VA3w3rT.png",
          desc: "온더룩 앳 중 하나의 페이지",
        },
      ],
    },
    {
      seq: 2,
      title: "잘 기록했어야 했다",
      desc: "기억은 빠르게 지워진다",
      text: [
        "내가 온더룩에 입사하고 가장 먼저 세웠던 목표는 1인분을 하자였다. 늦게 시작한 개발 생활에 조바심이났고 빠르게 적응해야 살아남을 수 있다는 강박이 있었다.",
        "그 때문이었을까? 빠르게 적응하기 위해 무언가를 배울때 항상 겉핥기 식으로 배워왔고 적용했다.",
        "기억은 빠르게 지워져서 결국 남은것은 누군가에게 설명하기 힘든, 사용하기 어려운 어설픈 지식뿐이었다",
        "내 것으로 만드려면 이것이 무엇인지 왜 이것을 사용하는지 스스로 자문하고 깊게 파보고 기록해야 했다.",
      ],
      images: [
        {
          seq: 1,
          url: "https://images.onthelook.co.kr/p/5SQRhqre7RqY5qPZkF5q8G.png",
          desc: "나름 적었지만.. 보기도 불편하고 내용도 형편없다.",
        },
        {
          seq: 2,
          url: "https://images.onthelook.co.kr/p/9zPatqMPQzKpujt3eET2rb.png",
          desc: "이딴게.. 기록..?",
        },
      ],
    },
    {
      seq: 3,
      title: "새해에는 잘 적자",
      desc: "나중에 읽어도 술술 읽히도록",
      text: [
        "그래서 블로그를 시작하려고 티스토리, 네이버 블로그, Velog 등 여러곳을 물색헀는데 썩 마음에 들지 않아서 결정적으로 내 것 같지 않아서 내 페이지를 새로 만들게 됐다",
        "초기 셋팅까지 약 6시간 정도 걸린 것 같다. 포스팅 하다보면 불편한것들을 수정해가면서 포스팅을 하려고 한다.",
        "지금은 github pages에서 무료 호스팅을 하고 있지만 여러가지 문제사항들이 있어 (나는 react로 페이지를 만들었는데 이걸 서빙하려면 요걸 빌드해서 필드 파일만 github.io 레포에 넣어야 한다던지.. 포스팅을 하려면 하드코딩해서 재배포를 해야 한다던지..) 포스팅을 열심히 하다가 코드 수정 없이 포스팅이 되게 간단한 서버와 함께 좀 더 나은곳으로 이전해보려고 한다.",
      ],
      images: [
        {
          seq: 1,
          url: "https://images.onthelook.co.kr/p/7wJ7pPF8g3BaWPbMmiBUHw.png",
          desc: "이렇게 빌드한 파일을 직접 레포에 넣고 있다...",
        },
      ],
    },
    {
      seq: 4,
      title: "무엇을 포스팅할까?",
      desc: "자주 할 수 있을까",
      text: [
        "나는 글을쓰는 일을 참 좋아 했었는데 지난 몇년간 일기 비슷한 것도 제대로 쓰지 않았네.. 쓰다보니 나름 재밌군..",
        "아무래도 개발관련 공부쪽과, 일상 생활, 여행등을 포스팅하게 될 것 같다.",
        "우선은 업무적으로 필요한 도커를 공부하고 포스팅을 해보자.",
        "이 환경에서 포스팅이 불편하고 비 효율적이면 뚝딱 또 만들어서 이전해야지..",
        "첫번째 포스팅 끝!",
      ],
      images: [
        {
          seq: 1,
          url: "https://images.onthelook.co.kr/p/qpPiDfYzeX9KHHeJaC6Qj1.jpeg",
          desc: "DevOps 핸드북. 재밌을 것 같아서 샀다. (회사님이 사주셧따)",
        },
        {
          seq: 2,
          url: "https://images.onthelook.co.kr/p/phksVacWnoAymS5ymsXQyo.jpeg",
          desc: "도커 교과서. 기술이 재밌고 실습이 흥미로워서 샀다. (회사님이 사주셧따)",
        },
      ],
    },
  ],
};
