var express = require("express");

interface Person {
  name: string;
  phone: string;
}

let names: Person[] = [
  {
    name: "박중현",
    phone: "010-7510-6589",
  },
];

names = [
  ...names,
  {
    name: "길동이",
    phone: "010-1111-1111",
  },
];
//서버를 만든다
const app = express();

//이름을 저장하는 서버
// {POST} /name : 이름을 넣는다

interface T {
  Params: {
    name: string;
    number: string;
  };
}

app.post<T>("/add-name/:name/phone/:number", async (req) => {
  return "";
});

// {GET} /name : 이름을 출력한다

app.get("/name", async () => {
  return {
    name: names,
  };
});

// "/" 에서 GET으로 받겠다
// app.get("/", async () => {
//   return {
//     name: "어쩔냉장고",
//   };
// });

app.listen(8000);
