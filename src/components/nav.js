import logo from "../images/logo.png";
export default function NavBar() {
  return (
    <nav>
      <a href="/">
        <img src={logo} alt="logo" />
        <p>my travel journal</p>
      </a>
    </nav>
  );
}
