import Header from "./Header";
import Nav from "./Nav";
import Main from "./Main";
import Footer from "./Footer";
export default function Wrap() {
  return (
    <div className="w-[100%] h-[100%] m-0 bg-cyan-300">
      <Header />
      <Nav />
      <Main />
      <Footer />
    </div>
  );
}
