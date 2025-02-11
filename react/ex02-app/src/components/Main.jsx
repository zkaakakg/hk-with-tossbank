import Aside from "./Aside";
import Section from "./Section";

export default function Main() {
  return (
    <div className="box flex flex-row m-3 ">
      <Aside />
      <Section />
    </div>
  );
}
