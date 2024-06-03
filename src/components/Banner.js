import Button from "./Button.js";

function Banner(props) {
  const primaryButton = "primary-button-style";
  const secondaryButton = "secondary-button-style";

  let isLoggedIn = false;

  return (
    <section className="banner-background">
      <div className="container">
        <div className="container-text">
          <p className="banner-text">{props.line1}</p>
          <p className="banner-text">{props.line2}</p>
        </div>
        <Button style={primaryButton} isLoggedIn={isLoggedIn} />
        <Button style={secondaryButton} isLoggedIn={isLoggedIn} />
      </div>
    </section>
  );
}

export default Banner;
