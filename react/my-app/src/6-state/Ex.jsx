import React, { useState } from "react";

// 연습문제 1: 입력된 텍스트를 화면에 바로 보여주기
// 설명: 입력 필드에 사용자가 입력한 텍스트를 바로 화면에 표시하세요.
// 힌트: onChange 이벤트

export function DisplayInput() {
  const [data, setData] = useState("");
  return (
    <div>
      <input
        type="text"
        onChange={(data) => {
          setData(data.target.value);
        }}
      />
      <p>{data}</p>
    </div>
  );
}

// 연습문제 2: 버튼을 클릭할 때마다 색상 변경하기
// 설명: 버튼을 클릭할 때마다 배경 색상이 빨강, 초록, 파랑으로
//    순차적으로 변경되도록 만드세요.

export function ChangeColor() {
  const colors = ["#FF0000 ", "#00FF00", "#0000FF"];
  const [color, setColor] = useState(colors[0]);
  const [idx, setIdx] = useState(0);
  const changeColor = () => {
    const nextIdx = (idx + 1) % colors.length;
    setIdx(nextIdx);
    setColor(colors[idx]);
  };
  return (
    <div style={{ backgroundColor: color, height: "100vh", width: "100vh" }}>
      <button onClick={changeColor}>배경 색상 변경</button>
    </div>
  );
}

// 연습문제 3: 체크박스 상태 관리하기
// 설명: 체크박스를 클릭하면 "ON" 또는 "OFF"라는 텍스트가
//   화면에 표시되도록 만드세요.
// 힌트: onChange, checked 속성을 이용

export function Checkbox() {
  const [checked, setChecked] = useState(false);
  return (
    <div>
      <input
        type="checkbox"
        onChange={(check) => {
          if (check.target.checked) {
            setChecked(true);
          } else {
            setChecked(false);
          }
        }}
      />
      <p>{checked ? "ON" : "OFF"}</p>
    </div>
  );
}

// 연습문제 4: 숫자 제한 걸기
// 설명: 숫자를 증가시키되, 숫자가 10 이상이면
//   더 이상 증가하지 않도록 제한하세요.

export function LimitNumber() {
  const [num, setNum] = useState(0);

  return (
    <div>
      <button
        onClick={() => {
          setNum(num + 1);
          if (num >= 10) {
            setNum(num);
          }
        }}
      >
        숫자 증가
      </button>
      <p>{num}</p>
    </div>
  );
}

// 연습문제 5: 버튼을 클릭할 때마다 리스트에 항목 추가하기
// 설명: 버튼을 클릭하면 입력 필드의 값을 리스트에 추가하고,
//   추가된 항목들을 화면에 표시하세요.
// 힌트: [], ["aaa", "bbb", "ccc"]

export function AddList() {
  const [list, setList] = useState([]);
  const [data, setData] = useState("");

  return (
    <div>
      <input
        type="text"
        onChange={(data) => {
          setData(data.target.value);
        }}
      />
      <button
        onClick={() => {
          let newData = data;
          setList((prev) => [...prev, newData]);
          setData("");
        }}
      >
        리스트 추가
      </button>
      <ul style={{ listStyle: "none" }}>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
