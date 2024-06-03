function Header(props) {
  return (
    <header>
      <div className="container flex space-between">
        <h1>{props.title}</h1>
        <nav>
          <ul className="flex space-between gap-15">
            <li>
              <a href="/public/index.html">{props.home}</a>
            </li>
            <li>
              <a href="/public/index.html">{props.about}</a>
            </li>
            <li>
              <a href="/public/index.html">{props.contact}</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
