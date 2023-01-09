import headerlogo from '../images/header-logo.svg';

export function Header() {
  return (
    <header className="header">
      <img className="logo" src={headerlogo} alt="Логотип проекта Mesto" />
    </header>
  );
}
