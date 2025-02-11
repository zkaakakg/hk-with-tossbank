import Content from "./Content";
const Main = () => {
  const mainStyle = {
    height: "1000px",
    backgroundColor: "rgba(205, 213, 228, 0.196)",
  };
  const h1Style = {
    padding: "20px",
    fontWeight: "1000",
    fontSize: "24px",
  };
  return (
    <div style={mainStyle}>
      <h1 style={h1Style}>추천 제품</h1>
      <Content />
    </div>
  );
};

export default Main;
