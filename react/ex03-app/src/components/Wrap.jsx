import Header from "./Header";
import Main from "./Main";
// export default function Wrap() {
//   return(
//     <div className="w-full h-full mx-auto">
//       <Header/>
//     </div>
//   );
// }

const Wrap = () => {
  const wrapStyle = {
    width: "100%",
    height: "100%",
    margin: "0 auto",
  };

  return (
    <div id="wrap" style={wrapStyle}>
      <Header />
      <Main />
    </div>
  );
};

export default Wrap;
