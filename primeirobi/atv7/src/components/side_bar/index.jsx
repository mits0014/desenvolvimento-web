export default function Sidebar({ posts }) {
  return (
    <aside>
      <h3>Outros posts que você pode gostar</h3>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <a href={`#${post.id}`}>
              <h4>{post.titulo}</h4>
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}
