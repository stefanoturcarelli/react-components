import Button from "./Button";

function Banner(props) {
  let primaryButton = "primary-button-style";
  let secondaryButton = "secondary-button-style";

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
