import { useState, useEffect } from "react";
import "./styles.css";
import { Sum } from "./operators/components/sum";
import skeletonIf from "./skeletons/ifSkeleton.json";

export default function App() {
  const [conditional, setConditional] = useState(skeletonIf);


  return (
    <div className="App">
      <Sum />
    </div>
  );
}
