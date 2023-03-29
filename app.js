// function c(year, month, day){
//   return {
//     year: year,
//     month: month,
//     day: day
//   }
// }

// const test = c(2023, 3, 29).year;
// console.log(test) //b와 같은 결과를 내지만 c는 함수로써 객체를 리턴해준거라 가변적으로 수정이 쉬움


// function c(a, b, c){
//   this.year = a;
//   this.month = b;
//   this.day = c;
// }
//   const test = new c(2023, 3, 29).year;
//   console.log(test);

const fs = require('fs');

function user(id, password, email){
  this.id = id,
  this.password = password,
  this.email = email
}
const d = new user("euni", "1234", "euni@gmail.com");
const e = new user("daljae", "1234", "daljae@naver.com");
const f = new user("jieun", "1234", "jieun@naver.com");

// console.log(d);
// console.log(e);
// console.log(f);


let names = ["euni","daljae","jieun"];
let password = ["1234","1234","1234"];
let emails = ["euni@gmail.com","daljae@naver.com","jieun@naver.com"];

let members = [];
for(let i = 0; i < 3; i++){
  members.push(new user(names[i], password[i], emails[i]));
}

//members내용을 적은 JSON파일을 새로 만들어 준다.
//JSON.stringify에 null, 2를 적어주면 보기 좋은 형태로 만들어진다.
fs.writeFileSync("members.json", JSON.stringify(members, null, 2), "utf-8");

console.dir(members);