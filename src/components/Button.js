function Button(props) {
  return (
    <button className={props.style}>
      {props.isLoggedIn ? "Start Here" : "Join Now"}
    </button>
  );
}

export default Button;
