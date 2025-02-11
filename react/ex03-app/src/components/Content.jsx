import "../index.css";
const Content = () => {
  const contentStyle = {
    maxWidth: "1200px",
    margin: "0 auto",
    display: "flex",
  };

  const infoStyle = {
    padding: "20px",
    border: "1px solid rgba(128, 128, 128, 0.201)",
    borderRadius: "10px",
    backgrounClor: "white",
    margin: "10px",
    boxShadow: "0 0 10px rgba(224, 224, 224, 0.588)",
  };

  const spanStyle1 = {
    fontSize: "18px",
    fontWeight: "900",
  };
  const spanStyle2 = {
    fontSize: "16px",
    float: "right",
    color: "rgb(37 99 235 / var(--tw-text-opacity, 1))",
    fontWeight: "700",
  };
  const btnGroupStype = {
    display: "flex",
    justifyContent: "space-between",
  };
  const pStyle = {
    color: "grey",
    margin: "15px 0",
    fontSize: "14px",
  };
  return (
    <div style={contentStyle}>
      <ol className="flex flex-wrap grow">
        <li className="responsive">
          <div style={infoStyle}>
            <span style={spanStyle1}>프리미엄 노트북</span>
            <span style={spanStyle2}>1,599,000원</span>
            <p style={pStyle}>최신 사양의 고성능 노트북</p>
            <div style={btnGroupStype}>
              <button type="button" className="button1">
                전자기기
              </button>
              <button type="button" className="button2">
                장바구니담기
              </button>
            </div>
          </div>
        </li>
        <li className="responsive">
          <div style={infoStyle}>
            <span style={spanStyle1}>무선 헤드폰</span>
            <span style={spanStyle2}>299,000원</span>
            <p style={pStyle}>프리이멈 사운드의 노이즈 캔슬링 헤드폰</p>
            <div style={btnGroupStype}>
              <button type="button" className="button1">
                전자기기
              </button>
              <button type="button" className="button2">
                장바구니담기
              </button>
            </div>
          </div>
        </li>
        <li className="responsive">
          <div style={infoStyle}>
            <span style={spanStyle1}>스마트 워치</span>
            <span style={spanStyle2}>399,000원</span>
            <p style={pStyle}>최신 사양의 고성능 노트북</p>
            <div style={btnGroupStype}>
              <button type="button" className="button1">
                전자기기
              </button>
              <button type="button" className="button2">
                장바구니담기
              </button>
            </div>
          </div>
        </li>
      </ol>
    </div>
  );
};

export default Content;
