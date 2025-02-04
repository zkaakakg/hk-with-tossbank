//   default 그외
import * as E from "./1-element/Ex";
function App() {
  // 이방 식은 JSX로 렌더링하지 않고 React 컴퍼넌트 자체 도는 JSX요소로 작성된 변수를 반환하는 경우
  // return E.E6;

  //이 방식은 React의 함수형(클래스형) 컴퍼넌트를 JSX 문법으로 호출하여 반환하는 경우
  return <E.ProductList />;
}

export default App;
