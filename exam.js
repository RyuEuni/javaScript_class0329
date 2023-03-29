
const studentList = [
  "강지민",
  "곽윤호",
  "권예준",
  "김동주",
  "김은아",
  "김종윤",
  "김지섭",
  "김형진",
  "노수민",
  "류은이",
  "박달재",
  "박수연",
  "박준형",
  "성해경",
  "이경택",
  "이세민",
  "이재권",
  "임지성",
  "장루빈",
  "정성철",
  "정지은",
  "정희은",
  "최대건",
  "한유진",
  "허진",
];

function addEmail(email){
    return {
      email: email + "@gmail.com",
    }
}

let em = [];
studentList.forEach((element) => {
  em.push(addEmail(element));
});
// console.log(em);

function addEmail2(email){
  this.email = email + "@naver.com";
}

class AddEmail{
  constructor(email){
    this.email = email ;
  }
  set email(email){
    if(typeof(email) === "string"){
      this.emailVal = email + "@daum.net";
    }
  }
}

let t = [1,2,3,4,5,6,7,8,9,10];

studentList.forEach((element) => {
  em.push(new AddEmail(element));
});
console.log(em);
