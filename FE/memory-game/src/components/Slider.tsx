type SliderProps = {
  difficulty: any;
  setDifficulty: any;
};

function Slider(props: SliderProps) {
  const {difficulty, setDifficulty} = props;
  const handleSlideChange = (event: any) => {
    setDifficulty(event.target.value);
  }
  return (
    <>
      <p>Slider</p>
      <input type="range" min="2" max="12" value={difficulty} onChange={handleSlideChange}/>
    </>
  );
}

export default Slider;
