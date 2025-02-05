// Ex.jsx
import React, { Component, useEffect, useState } from "react";
import axios from "axios";
// 연습문제1: 컴포넌트 마운트 시 콘솔에 메시지 출력하기
// 목표: 컴포넌트가 마운트될 때 콘솔에 "컴포넌트가 마운트되었습니다." 메시지를 출력하세요.
// 요구사항:
// useEffect를 사용하여 컴포넌트가 마운트될 때 한 번만 실행되도록 설정하세요.
// 힌트: 빈 배열 []을 의존성 배열로 사용하세요.

export function Problem1() {
  useEffect(() => {
    console.log("컴포넌트가 마운트되었습니다.");
  }, []);

  return (
    <div>
      <h1>마운트</h1>
    </div>
  );
}

// 연습문제2. 상태값이 변경될 때 메시지 출력하기
// 목표: 버튼을 클릭하여 상태값을 변경할 때마다 콘솔에 상태값이 출력되도록 만드세요.
// 요구사항:
// useEffect를 사용하여 상태값이 변경될 때마다 메시지를 출력하세요.
// 힌트: useEffect의 의존성 배열에 상태값을 넣으세요.

export function Problem2() {
  const [count, setcount] = useState(0);
  useEffect(() => {
    console.log(count);
  }, [count]);

  return (
    <div>
      <button
        onClick={() => {
          setcount(count + 1);
        }}
      >
        +1
      </button>
    </div>
  );
}

//연습문제3: 타이머 기능 (마운트 및 언마운트)
// 목표: 컴포넌트가 마운트되면 1초마다 상태값이 증가하는 타이머를 시작하고, 컴포넌트가 언마운트될 때 타이머를 정리하세요.
// 요구사항:
// useEffect를 사용하여 마운트 시 타이머를 시작하고, 언마운트 시 타이머를 정리하세요.
// 1초마다 상태값을 증가시키세요.
// 힌트: setInterval과 clearInterval 사용

export function Problem3() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((count) => count + 1);
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return (
    <div>
      <p>{count}</p>
    </div>
  );
}
export function Lifecycle() {
  const [showComponent, setShowComponent] = useState(true);

  return (
    <div style={{ padding: "20px" }}>
      {showComponent && <Problem3 />}
      <button
        onClick={() => {
          setShowComponent(!showComponent);
        }}
      >
        {showComponent ? "컴퍼넌트 제거" : " 컴퍼넌트 추가"}
      </button>
    </div>
  );
}

// 4. 윈도우 크기 변경 감지
// 목표: 윈도우의 크기가 변경될 때마다 현재 창의 너비를 화면에 표시하세요.
// 요구사항:
// useEffect로 이벤트 리스너를 등록하고 창 크기가 변경될 때마다 상태를 업데이트하세요.
// 언마운트 시 이벤트 리스너를 해제하세요.
// 힌트: window.addEventListener와 window.removeEventListener

export function Problem4() {
  function handleResize() {
    console.log("상태가 변경되었습니다.");
  }
  useEffect(() => {
    const resizeId = window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener(resizeId);
    };
  }, []);
}

//연습문제5: API 호출 및 데이터 로드
// 목표: 컴포넌트가 마운트될 때 API 호출을 통해 데이터를 가져와 화면에 표시하세요.
// 요구사항:
// 1. URL: https://jsonplaceholder.typicode.com/posts
// 2. 상위 10개의 포스트 테이터만 출력하세요.
// 3. useEffect를 사용하여 컴포넌트가 마운트될 때 데이터를 로드하세요.
// 4. 데이터를 로드한 후 상태에 저장하고 화면에 출력하세요.
// 힌트: fetch 또는 axios 모듈 사용 가능합니다.
export function Problem5() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
      // axios 함수는 기본 응답이 json 형태이다.
      setData(res.data.slice(0, 10));
    });
  }, []);

  return (
    <div>
      <ul style={{ listStyle: "none" }}>
        {data.map((post) => (
          <li key={post.id}>
            <h2>
              {post.id} {post.title}
            </h2>
            {post.body}
          </li>
        ))}
      </ul>
    </div>
  );
}

// fetch 방식
export function DataFetcher() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // 비동기 함수로 API호출
    // async/await 구문 : JS에서 비동기적인 처리를 할 때 사용하는 구문
    // promise/then 구문 :
    const fetchData = async () => {
      // try/catch구문 : 오류(예외)가 발생하기 쉬운 코드에 넣어서 오류처리를 한다.
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        // response : HTTP 통신의 결과(헤더 + 데이터)
        // json() : JSON형태의 문자열을 JSON객체로 변환시키는 함수
        const result = await response.json();
        setData(result.slice(0, 10));
      } catch (error) {
        console.error("데이터 로드 중 오류 발생:", error);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      <h1>데이터 로드</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <b>id:</b>
            {item.id}
            <br />
            <b>title:</b>
            {item.title}
            <br />
            <b>body:</b>
            {item.body}
          </li>
        ))}
      </ul>
    </div>
  );
}

// 통신응담으로 반환된 JSON형태의 데이터
// {
//   "userId": 1,
//   "id": 1,
//   "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
//   "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
// }

//JS 객체
// {
//   userId : 1,
//   id: 1,
//   title: "sunt aut facere repel",
//   body : "quia et suscip"
// }
