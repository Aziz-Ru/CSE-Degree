// eslint-disable-next-line react/prop-types
const Button = ({ children, handler }) => {
  return <button onClick={handler}>{children}</button>;
};

export default Button;
