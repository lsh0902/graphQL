export const SH = [
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

];

export const getById = id => {
  const filtered = SH.filter(person => id === SH.id);
  return filtered[0]
}