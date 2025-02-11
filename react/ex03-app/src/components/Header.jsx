import Nav from "./Nav";
const Header = () => {
  const headerStyle = {
    position: "relative",
    padding: "18px",
    borderBottom: "1px solid rgba(211, 211, 211, 0.849)",
    boxShadow: "5px 5px 5px rgba(224, 224, 224, 0.521)",
  };
  return (
    <div id="header" style={headerStyle}>
      <h1 className="text-2xl text-blue-600 font-bold">TechStore</h1>
      <Nav />
    </div>
  );
};
export default Header;
