//
// https://stackoverflow.com/questions/62514479/smooth-javascript-progress-bar
//
const Complex = (props) => {
  // const { percentage, start, setStart, duration, barId } = props;
  const { barId } = props;
  // console.log("in complex component", percentage);
  const duration = 10000;
  let element = document.getElementById(barId);
  let previousTimeStamp;
  let start;
  let done = false;
  const stepFn = (timestamp) => {
    // console.log("in complex stepFn function", {
    //   start,
    //   timestamp,
    //   done,
    //   // percentage,
    // });
    if (done) {
      console.log("done!");
      return;
    }
    if (start === undefined) {
      start = timestamp;
    }
    const elapsed = timestamp - start;

    if (!element) {
      console.warn("no element", element);
      return;
    }
    if (previousTimeStamp !== timestamp) {
      // Math.min() is used here to make sure the element stops at exactly 100%
      // 10 seconds to fill bar
      // means the time elapsed should fill x%
      // 10000ms = 10s = 100%
      // so (elapsed / 10000) * 100 = x = count
      // console.log("times", { start, timestamp, elapsed });
      const count = Math.min((elapsed / duration) * 100, 100);
      console.log("count", count);
      element.style.width = `${count}%`;
      if (count === 100) done = true;
      if (count < 100) {
        // console.log("percentage less than 100", percentage);
        // setTimeout(stepFn, 1000);
        previousTimeStamp = timestamp;
        if (!done) {
          window.requestAnimationFrame(stepFn);
        }
      } else {
        // console.log("p greater than or equal to 100", percentage);
      }
    }
  };

  window.requestAnimationFrame(stepFn);

  return (
    <div class="complexProgress">
      <div class="complexBar" id={barId}></div>
    </div>
  );
};

export default Complex;
