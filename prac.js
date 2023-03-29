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


const example = {
  order: 0,
  name: "강지민"
}

//생성자 함수 방식
// function makeConstruct(order, name){
//     this.order = order;
//     this.name = name;
// }
function makeConstruct(order, name){
  if(typeof(order) === "number"){
    this.order = order;
    this.name = name;
  }
  else{
    console.log("order가 숫자여야 합니다.")
  }
}

class User{
  constructor(order, name){
    this.order = order;
    this.name = name;
  }
  set order(order){
    if(typeof(order) === "number"){
      this._order = order;
    }
  }
}

//객체 리턴 방식
function makeObject(order, name){
  return {
    order: order,
    name: name
  }
}

let a = makeObject(0, studentList[0]);
let b = new makeConstruct(0, studentList[0]);

console.dir(a);
console.dir(b);

//? 강사님은 왜 객체 리턴 방식 보다 생성자 함수 방식을 강조하는지 생각해 보자