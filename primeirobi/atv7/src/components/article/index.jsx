export default function Article({ titulo, autor, data, conteudo, imagem, legenda }) {
  return (
    <article>
      <div>
        <h2>{titulo}</h2>
        <p><strong>{autor}</strong></p>
        <time dateTime={data}>{new Date(data).toLocaleDateString()}</time>
        {conteudo.map((paragrafo, index) => (
          <p key={index}>{paragrafo}</p>
        ))}
      </div>
      <figure>
        <img src={imagem} alt={legenda} />
        <figcaption>{legenda}</figcaption>
      </figure>
    </article>
  );
}
