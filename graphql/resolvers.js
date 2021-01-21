const SH = [
    {
    id = "1",
    name : "lsh",
    age : 13,
    schoooool : "아주대대대"
  },
  {
    id = "2",
    name : "hwj",
    age : 23,
    schoooool : "벳푸국제"
  },
  {
    id = "3",
    name : "ㅇㅇㅇ",
    age : 22,
    schoooool : "얻ㄴ가"
  }

]

const resolvers = {
  Query: {
    name : () => "seunghwan",
    people : () => SH
  }
};

export default resolvers;