type ButtonProps = {
  text: string;
  ariaLabel: string;
  action: (p: any) => void;
};

function Button(props: ButtonProps) {
  const { text, ariaLabel, action } = props;
  return (
    <button aria-label={ariaLabel} onClick={action}>
      {text}
    </button>
  );
}

export default Button;
