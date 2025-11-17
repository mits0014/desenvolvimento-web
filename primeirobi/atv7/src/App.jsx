// App.jsx
import Header from "./components/header/index";
import Navigation from "./components/navigation/index";
import Article from "./components/article/index";
import Sidebar from "./components/side_bar/index";
import Footer from "./components/footer/index";

export default function App() {
  // dados do post
  const post = {
    titulo: "Welcome to My Website",
    autor: "Admin",
    data: "2023-10-01",
    conteudo: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultrices tempus ante ac mollis. Suspendisse pellentesque, metus sit amet pellentesque feugiat, nisl metus sodales nulla, eget commodo nunc odio vel purus. Nam imperdiet erat augue, vitae varius ex cursus eget. In tempor malesuada finibus. Aliquam at vulputate lorem. Donec at iaculis lectus. Aliquam eget vestibulum odio, id tincidunt urna.",
      "Ut dignissim nisl felis, eu elementum metus tincidunt eu. Sed ultricies condimentum orci. Etiam sit amet facilisis sapien, in efficitur sapien. Nullam est nulla, semper quis gravida in, luctus in nunc. Proin in neque nec quam commodo scelerisque. Sed eget ex vel nulla congue dignissim eget eu nulla. Fusce ac venenatis nunc. Morbi laoreet in magna vel viverra. Nullam mollis ut lorem quis pharetra."
    ],
    imagem: "Luva de Pedreiro em FIFA 24.png",
    legenda: "imagem do luva de Pedreiro na capa do fifa 24"
  };

  const links = ["Home", "Sobre", "Contato"];

  const postsRelacionados = [
    { id: "atributos", titulo: "atributos" },
    { id: "jogadores", titulo: "Top 10 jogadores" },
    { id: "campeonatos", titulo: "campeonatos" }
  ];

  return (
    <>
      <Header>
        <Navigation links={links} />
      </Header>
      <main>
        <Sidebar posts={postsRelacionados} />
        <Article {...post} />
      </main>
      <Footer />
    </>
  );
}
