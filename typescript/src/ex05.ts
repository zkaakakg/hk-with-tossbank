// 열거형 타입
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입

// 자동차 게임
let myCarType = 0 //0 세단, 1 스포츠카, 2 SUV, 3 Jeep카

enum CarType {
  Sedan = 0, // 기본값 0
  Sport, // +1
  Suv, // +2
  Jeep, // +3
}

myCarType = CarType.Sedan
myCarType = CarType.Sport

// 문자열 타입
enum Lang {
  Korean = 'ko',
  english = 'en',
}

let user = {
  name: '홍길동',
  lang: Lang.Korean,
  Car: CarType.Sedan,
}
