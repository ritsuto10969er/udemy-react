 /* POINT 式と文
式：何らかの値を返すもの（変数に代入できるもの）
文：変数宣言、for文、if文、switch文やセミコロンで区切るもの。
*/

import "./Child.css";

const Child = ({ color = '', fn, bool, obj }) => {
  return (
    <div className={`component ${color}`}>
      <h3>Hello Component</h3>
      <p>Number: {obj.num}</p>
      <p>{fn("Props")}</p>
      <p>Boolean: {bool ? "true" : "false"}</p>
      <p>Object : {obj.name} - {obj.age}</p>
    </div>
  );
};

export default Child;
