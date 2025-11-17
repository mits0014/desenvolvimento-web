export default function Navigation({ links }) {
  return (
    <nav>
      <ul>
        {links.map((link) => (
          <li key={link}>
            <a href={`#${link}`}>{link}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
