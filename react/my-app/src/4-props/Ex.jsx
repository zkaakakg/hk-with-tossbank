//Ex.jsx
// 1. 문제 1: 단일 Props 전달하기
// 목표: 단일 `props`를 활용하여 간단한 문구를 출력하는 컴포넌트를 작성하세요.
// 요구사항:
// - `Greeting`이라는 자식 컴포넌트를 만드세요.
// - `name`이라는 `props`를 받아 "환영합니다,
//   [이름]님!"이라는 문구를 렌더링합니다.
// - 부모 컴포넌트에서 여러 사람의 이름을 넘겨 출력합니다.

function Greeting(props) {
  return (
    <div>
      <h1>환영합니다. {props.name}님!</h1>
    </div>
  );
}
export function Props1() {
  return (
    <div>
      <Greeting name="홍길동"></Greeting>
      <Greeting name="이영희"></Greeting>
      <Greeting name="김철수"></Greeting>
    </div>
  );
}

// 2. 문제 2: 여러 Props 전달하기
// 목표: 여러 개의 `props`를 활용하여 사용자의 정보를 출력하는 컴포넌트를 작성하세요.
// 요구사항:
// - `UserCard`라는 자식 컴포넌트를 작성하세요.
// - `name`, `age`, `job`을 `props`로 받아 사용자 정보를 표시합니다.
// - 부모 컴포넌트에서 두 명의 사용자 정보를 전달해 렌더링합니다.

function UserCard(props) {
  return (
    <div>
      <p>이름: {props.name}</p>
      <p>나이: {props.age}</p>
      <p>직업: {props.job}</p>
    </div>
  );
}
export function Props2() {
  return (
    <div>
      <UserCard name="홍길동" age="28" job="개발자"></UserCard>
      <UserCard name="이영희" age="24" job="엔지니어"></UserCard>
    </div>
  );
}

// 3. 문제 3: 배열 Props 전달하기
// 목표: 배열 데이터를 `props`로 전달하여 리스트 형태로 출력하는 컴포넌트를 작성하세요.
// 요구사항:
// - `ItemList`라는 자식 컴포넌트를 작성하세요.
// - `items`라는 배열을 `props`로 받아 `<li>` 태그로 각 항목을 렌더링합니다.
// - 부모 컴포넌트에서 두 개의 다른 배열을 전달해 두 개의 목록을 출력합니다.

function ItemList(props) {
  return (
    <div>
      <ul>
        {props.items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export function Props3() {
  return (
    <div>
      <ItemList items={["사과", "바나나", "포도"]} />
      <ItemList items={["자바스크립트", "자바", "파이썬"]} />
    </div>
  );
}

// 4. 문제 4: 이벤트 Props 전달하기
// 목표: 버튼을 클릭했을 때 이벤트를 처리하는 컴포넌트를 작성하세요.
// 요구사항:
// - `ClickButton`이라는 자식 컴포넌트를 작성하세요.
// - 부모 컴포넌트에서 클릭 시 경고창이 뜨도록 이벤트 핸들러를 전달하세요.

function ClickButton(props) {
  return <button onClick={props.onClickFunc}>클릭하세요</button>;
}
export function Props4() {
  function handleClick() {
    alert("버튼이 클릭되었습니다.");
  }
  return (
    <div>
      <ClickButton onClickFunc={handleClick} />
    </div>
  );
}

// 5. 문제 5: children을 이용한 컴포넌트 구성
// 목표: `children`을 활용하여 컴포넌트 내부에서 콘텐츠를 자유롭게 구성하는 연습을 합니다.
// 요구사항:
// - `InfoCard`라는 자식 컴포넌트를 작성하세요.
// - `title`이라는 `props`와 `children`을 사용하여 제목과 본문 콘텐츠를 렌더링합니다.
// - 부모 컴포넌트에서 두 개의 카드를 렌더링하세요.

function InfoCard(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.children}
    </div>
  );
}
export function Props5() {
  return (
    <div>
      <InfoCard title="카드제목1">
        <p>카드 내용1</p>
        <button>자세히 보기1</button>
      </InfoCard>
      <InfoCard title="카드제목2">
        <p>카드 내용2</p>
        <button>자세히 보기2</button>
      </InfoCard>
    </div>
  );
}
