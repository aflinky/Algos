const Simple = () => {
  let start;
  let element = document.getElementById("myBar");
  function step(timestamp) {
    console.log("in step function");
    if (start === undefined) start = timestamp;
    const elapsed = timestamp - start;

    if (element) {
      console.log("setting width to ", (100 / 10000) * elapsed + "%");
      element.style.width = (100 / 10000) * elapsed + "%";
    }

    if (elapsed < 10000) {
      // Stop the animation after 2 seconds
      window.requestAnimationFrame(step);
    } else {
    }
  }

  window.requestAnimationFrame(step);

  return (
    <>
      <p>simple</p>
      <div id="myProgress">
        <div id="myBar"></div>
      </div>
    </>
  );
};

export default Simple;
