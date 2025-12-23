/* POINT 式と文
式：何らかの値を返すもの（変数に代入できるもの）
文：変数宣言、for文、if文、switch文やセミコロンで区切るもの。
*/

import "./Child.css";

const Child = () => {
  const hello = () => 'Hello World';
  const greet = hello();
  const a = 'a';
  return (
    <div className="component">
      <h3>式と文</h3>
      <p>{greet}</p>
      <p>{a === 'a' ? 'これは式です' : 'これは文ではありません'}</p>
    </div>
  );
};

export default Child;
