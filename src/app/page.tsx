import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="container py-8 text-neutral-50 px-16">
      <About title="Sobre Mim" imagePath="/foto1.png">
        Olá! Sou Gabriel, um estudante de Ciência da Computação na UFMS
        apaixonado por desenvolvimento de jogos. Desde jovem, mergulhei no mundo
        dos jogos 2D e pixel art, encontrando neles minha verdadeira paixão.
      </About>

      <About imagePath="/foto1.png" link="Ver mais" pathToLink="/" isReverse>
        Com alguns anos de experiência como programador, tenho me dedicado a
        aprimorar minhas habilidades técnicas e criativas, transformando minhas
        ideias em jogos e mecânicas divertidas. Agora, convido você a explorar
        meu portfólio, onde compartilho um pouco da minha jornada e de algumas
        aventuras que criei.
      </About>

      <Portfolio />
      <Skills />
    </main>
  );
}
