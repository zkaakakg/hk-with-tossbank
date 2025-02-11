export default function Aside() {
  return (
    <div className="box m-3 p-4 border-2 border-green-500 ">
      <h4 className="font-bold">Golden Retriever</h4>
      <img
        className="w-[200px] h-[200px] object-cover"
        src="https://github.com/zkaakakg/hk-with-tossbank/blob/main/tailwind-css/dog.png?raw=true"
        alt="리트리버"
      />
      <ul className="list-none	">
        <li>● 기본특성</li>
        <li>● 단점</li>
        <li>● 키울 시 주의점</li>
        <li>● 파생 혼종견</li>
      </ul>
    </div>
  );
}
