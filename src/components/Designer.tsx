import "./Designer.css";
import { useState } from "react";
const Designer = () => {
  const [number, setNumber] = useState(4);

  function countUp() {
    setNumber((pre) => pre + 1);
  }
  function countDown() {
    setNumber((pre) => pre - 1);
  }

  return (
    <div className="Designer">
      <p>Ad Designer</p>
      <div>
        <button>Vote for Strawberry</button>
        <p>What to support</p>
        <button>Chocolate</button>
        <button>Vanilla</button>
        <button>Strawberry</button>
        <p>Color Theme</p>
        <button>light</button>
        <button>dark</button>
        <p>Font Size</p>
        <button onClick={() => countDown()}>Down</button>
        <p>{number}</p>
        <button onClick={() => countUp()}>Up</button>
        {/* <button onClick={() => setNumber(0)}>Reset</button> */}
      </div>
    </div>
  );
};

export default Designer;
