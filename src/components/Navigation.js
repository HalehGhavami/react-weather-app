import './Navigation.css';

export default function Navigation() {
  return (
    <header>
      <ul class="navigation-items">
        <li class="navigation-item">
          <a href="/">Lisbon</a>
        </li>
        <li class="navigation-item">
          <a href="/paris">Paris</a>
        </li>
        <li class="navigation-item">
          <a href="/sydney">Sydney</a>
        </li>
        <li class="navigation-item">
          <a href="/san-francisco">San Francisco</a>
        </li>
      </ul>
    </header>
  );
}
