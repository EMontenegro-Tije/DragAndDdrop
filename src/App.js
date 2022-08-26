import { useState, useEffect } from "react";
import "./styles.css";
import { Sum } from "./operators/components/sum";
import { sum } from "./operators/functions/sum";
import skeletonIf from "./skeletons/ifSkeleton.json";

export default function App() {
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  const [structureSum, setStructureSum] = useState({});
  const [conditional, setConditional] = useState(skeletonIf);

  useEffect(() => {
    if (left !== 0 && right !== 0) {
      setStructureSum({
        add: [JSON.parse(left), JSON.parse(right)]
      });
    }
  }, [left, right]);

  useEffect(() => {
    console.log("structureSum: ", structureSum);
  }, [structureSum]);

  const onchangeLeftInput = (event) => {
    let valueLeft = event.target.value;
    setLeft(valueLeft);
  };

  const onchangeRightInput = (event) => {
    let valueRight = event.target.value;
    setRight(valueRight);
  };

  return (
    <div className="App">
      <Sum />
    </div>
  );
}
