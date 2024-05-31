function Header(props) {
  return (
    <header>
      <div className="container flex space-between">
        <h1>{props.title}</h1>
        <nav>
          <ul className="flex space-between gap-15">
            <li>
              <a href="#">{props.home}</a>
            </li>
            <li>
              <a href="#">{props.about}</a>
            </li>
            <li>
              <a href="#">{props.contact}</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
