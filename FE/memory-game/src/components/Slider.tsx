type SliderProps = {
  difficulty: any;
  changeDifficulty: any;
};

function Slider(props: SliderProps) {
  const {difficulty, changeDifficulty} = props;
  const handleSlideChange = (event: any) => {
    changeDifficulty(event.target.value);
  }
  return (
    <>
      <p>Slider</p>
      <input type="range" min="2" max="12" value={difficulty} onChange={handleSlideChange}/>
    </>
  );
}

export default Slider;
