function Button(props) {
  return (
    <button className={props.className}>
      {props.isLoggedIn ? "Start Here" : "Join Now"}
    </button>
  );
}

export default Button;
