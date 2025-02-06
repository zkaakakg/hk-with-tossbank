import React from "react";
// 연습문제 1: UserProfile 조건부 렌더링
// 사용자 프로필 정보를 표시하는 UserProfile 컴포넌트를 작성하세요.
// 요구사항:
// props.user 객체가 존재하면 사용자 이름과 이메일을 렌더링합니다.
// props.user가 null 또는 undefined이면 "사용자 정보가 없습니다."라는 메시지를 렌더링합니다.
// 힌트: if-else 또는 삼항 연산자를 활용하여 조건부 렌더링을 구현합니다.

function UserProfile(props) {
  if (props.user && props.user.name && props.user.email) {
    return (
      <h3>
        {props.user.name} {props.user.email}
      </h3>
    );
  } else {
    return <h3>사용자 정보가 없습니다.</h3>;
  }
}

export function Conditional1() {
  return (
    <div>
      <UserProfile user={{ name: "홍길동", email: "aaa@naver.com" }} />
      <UserProfile user={{}} />
    </div>
  );
}
// Notification 컴포넌트를 작성하여, 알림의 개수에 따라 메시지를 다르게 보여주세요.
// 요구사항:
// props.count가 0이면 "새로운 알림이 없습니다."를 렌더링합니다.
// props.count가 0보다 크면 "새로운 알림이 {count}개 있습니다."를 렌더링합니다.
// 힌트: 삼항 연산자를 사용하여 간결하게 구현할 수 있습니다.

function Notification(props) {
  return props.count == 0 ? (
    <h3>새로운 알림이 없습니다.</h3>
  ) : (
    <h3>새로운 알림이 {props.count}개 있습니다.</h3>
  );
}

export function Conditional2() {
  return (
    <div>
      <Notification count={0} />
      <Notification count={2} />
    </div>
  );
}

// 연습문제 3: Advertisement 컴포넌트 (&& 연산자 사용)
// 문제:
// 프리미엄 회원이 아닐 때 광고를 표시하는 Advertisement 컴포넌트를 작성하세요.
// 요구사항:
// props.isPremium이 false일 때만 광고 영역을 렌더링합니다.
// 프리미엄 회원이면 아무것도 렌더링하지 않습니다.
// 힌트: 논리 연산자(&&)를 활용하여 조건이 참일 때만 광고 영역을 표시합니다.

function Advertisement(props) {
  return <div>{props.isPremium && <h3>광고영역</h3>}</div>;
}
export function Conditional3() {
  return (
    <div>
      <Advertisement isPremium={true} />
      <Advertisement isPremium={false} />
    </div>
  );
}
