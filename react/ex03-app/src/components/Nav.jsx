import "../App.css";
const Nav = () => {
  const navStyle = {
    position: "absolute",
    top: "18px",
    right: "20px",
  };

  return (
    <div id="nav" style={navStyle}>
      <ul>
        <li>
          <a href="#">제품</a>
          <ul id="dropdown">
            <li>
              <a href="#">전자기기</a>
            </li>
            <li>
              <a href="#">의류</a>
            </li>
            <li>
              <a href="#">도서</a>
            </li>
            <li>
              <a href="#">악세서리</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">서비스</a>
          <ul id="dropdown">
            <li>
              <a href="#">컨설팅</a>
            </li>
            <li>
              <a href="#">교육</a>
            </li>
            <li>
              <a href="#">고객지원</a>
            </li>
            <li>
              <a href="#">유지보수</a>
            </li>
          </ul>
        </li>
        <li>
          <a>회사소개</a>
          <ul id="dropdown">
            <li>
              <a href="#">회사정보</a>
            </li>
            <li>
              <a href="#">팀소게</a>
            </li>
            <li>
              <a href="#">채용정보</a>
            </li>
            <li>
              <a href="#">연락처</a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
