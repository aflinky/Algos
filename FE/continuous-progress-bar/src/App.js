import { useState } from "react";
import ComplexWrapper from "./ComplexWrapper";
import RAFexample from "./RAFexample";
import Simple from "./Simple";
import "./styles.css";

export default function App() {
  const [duration, setDuration] = useState(10000);
  const x = ((3 * 60) + 45) * 1000;
  return (
    <div className="App">
      {/* <Simple /> */}
      {/* <ComplexWrapper
        duration={x}
        setDuration={setDuration}
        barId={"meow"}
      /> */}
      <ComplexWrapper
        duration={10000}
        setDuration={setDuration}
        barId={"woof"}
      />
      {/*<ComplexWrapper
        duration={2000}
        setDuration={setDuration}
        barId={"gloop"}
      /> */}
      {/* <RAFexample /> */}
    </div>
  );
}
