//
// https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame
//
const RAFexample = () => {
  const element = document.getElementById("some-element-you-want-to-animate");
  let start, previousTimeStamp;
  let done = false;

  function step(timeStamp) {
    if (start === undefined) {
      start = timeStamp;
    }
    const elapsed = timeStamp - start;

    // Update the element's position
    if (previousTimeStamp !== timeStamp) {
      // Math.min() is used here to make sure the element stops at exactly 200px
      const count = Math.min(0.1 * elapsed, 300);
      if (element) element.style.transform = `translateX(${count}px)`;
      if (count === 300) done = true;
    }

    if (elapsed < 3000) {
      // Stop the animation after 2 seconds
      previousTimeStamp = timeStamp;
      if (!done) {
        window.requestAnimationFrame(step);
      }
    }
  }

  window.requestAnimationFrame(step);

  return <div id="some-element-you-want-to-animate" />;
};

export default RAFexample;
