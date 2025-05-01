type Props = {
  children: String;
  buttonFn?: () => void;
  style?: string;
};
export const Button = ({children, buttonFn, style}: Props) => {
  const styleClass = style ? style : 'btn-soft';
  if (!buttonFn) {
    return <button className={`btn ${styleClass}`}>{children}</button>;
  } else {
    return (
      <button className={`btn ${styleClass}`} onClick={() => buttonFn()}>
        {children}
      </button>
    );
  }
};
