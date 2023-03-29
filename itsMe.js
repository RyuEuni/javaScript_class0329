const itsMe = {
  firstName: "Ryu",
  lastName: "Euni",
  age: 27,
  email: "euni@gmail.com",
  phone: "010-3333-3333",
  address: "대전 서구 갈마동",
  like: "ott 서비스",
  hate: "여름, 벌레",
  hobby: "평범한 삶",
  coffee: "like",
  food: "해산물",
  sleepTime: "12:30"
}

function gaeIn(firstName, lastName){
  this.firstName = firstName;
  this.lastName = lastName;
}

const a = new gaeIn(itsMe.firstName, itsMe.lastName)
console.log(a);