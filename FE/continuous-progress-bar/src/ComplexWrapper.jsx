import { useEffect, useState } from "react";
import Complex from "./Complex";

const ComplexWrapper = (props) => {
  // duration = how many ms it should take to fill the bar
  const { duration, setDuration, barId } = props;
  const [percentage, setPercentage] = useState(0);
  const [start, setStart] = useState(0);

  useEffect(() => {
    console.log('in useeffect', percentage)
    if (percentage < 100) {
      console.log("setting a timer");
      const timer = setTimeout(() => setPercentage(percentage + 10), 1000);
      return () => clearInterval(timer);
    }
  }, [percentage]);

  return (
    <>
      <p>Complex</p>
      <Complex
        percentage={percentage}
        start={start}
        setStart={setStart}
        duration={duration}
        barId={barId}
      />
    </>
  );
};

export default ComplexWrapper;
