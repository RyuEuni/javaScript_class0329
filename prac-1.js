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

// for(let i = 0; i < array; i++){
//   if(studentList[i] === "김수연"){
//     console.log(i)
//   }
//   else{
//     console.log('해당 순서는 김수연씨가 아닙니다.')
//   }
// }


function serching(array, name){
  for(let i = 0; i < array; i++){
    if(studentList[i] === name){
      console.log(i)
    }
    else{
      console.log(`해당 순서는 ${name}씨가 아닙니다.`)
    }
  }

}
serching(studentList.length, "박달재");


//serching함수를 모듈화 시켜서 사용할 수도 있다.
// const serching = require("./search_module.js")
// serching(studentList.length, "박달재");