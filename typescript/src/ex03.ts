// 객체 타입
let user1: object = { id: 1, name: '홍길동' }
// 'dbject' 형식에 'id' 속성이 없습니다.
user1.id

let user2: {
  id: number
  name: string
} = {
  id: 1,
  name: '홍길동',
}
// (property) id:number
user2.id

let user3: {
  // 선택적 프로퍼티를 통해 속성 생략 가능
  id?: number
  name: string
} = {
  name: '홍길동',
}

let config: {
  //읽기 전용으로 속성을 가짐
  readonly apiKey: string
} = {
  apiKey: 'MY API KEY',
}

config.apiKey = 'aaaaaa'
