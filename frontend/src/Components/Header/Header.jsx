import "./Header.css";

export function Header() {
  return (
    <header className="header">
      <h1 className="title">Milenas tårtor</h1>
      <div className="burger-menu">
        <div className="strech strech--1"></div>
        <div className="strech strech--2"></div>
        <div className="strech strech--3"></div>
      </div>
    </header>
  );
}
