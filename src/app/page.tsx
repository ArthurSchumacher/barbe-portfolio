import About from "@/components/About";

export default function Home() {
  return (
    <main className="container py-8 text-neutral-50">
      <About title="Sobre Mim" imagePath="/foto1.png">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut a,
        consequatur in ex laudantium maxime. Esse consequuntur harum asperiores,
        cum fugit tempora repellendus, minima eveniet, nisi voluptatum dolor
        facilis assumenda.
      </About>

      <About imagePath="/foto1.png" link="Ver mais" pathToLink="/" isReverse>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut a,
        consequatur in ex laudantium maxime. Esse consequuntur harum asperiores,
        cum fugit tempora repellendus, minima eveniet, nisi voluptatum dolor
        facilis assumenda.
      </About>
    </main>
  );
}
