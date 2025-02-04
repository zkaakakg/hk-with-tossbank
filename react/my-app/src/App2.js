import React from "react";
import * as ex from "./2-jsx/Ex";

function App() {
  // return <Library />;
  // return (
  //   <MainApp>
  //     <Header />
  //     <Nav />
  //     <Main>
  //       <Section />
  //       <Side />
  //     </Main>
  //     <Footer />
  //   </MainApp>
  // );

  // return <ex.Hello name="홍길동" />;
  // return <ex.Sum num1={1} num2={2} />;
  // return <ex.DrinkMachine price="200원" />;
  return <ex.Greeting hour={4} />;
}

export default App;
