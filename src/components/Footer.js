export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer class="footer">
      <p class="footer__copyright">&copy; {currentYear} Mesto Russia</p>
    </footer>
  );
}