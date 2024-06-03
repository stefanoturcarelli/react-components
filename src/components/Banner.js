import Button from "./Button";

function Banner(props) {
  let isLoggedIn = false;

  return (
    <section className="banner-background">
      <div className="container">
        <div className="container-text">
          <p className="banner-text">{props.line1}</p>
          <p className="banner-text">{props.line2}</p>
        </div>
        <Button className="primary-button-style" isLoggedIn={isLoggedIn} />
        <Button className="secondary-button-style" isLoggedIn={isLoggedIn} />
      </div>
    </section>
  );
}

export default Banner;
