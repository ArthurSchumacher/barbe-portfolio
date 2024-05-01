import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="container py-8 text-neutral-50 px-16">
      <About title="Sobre Mim" imagePath="/foto1.png">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut a,
        consequatur in ex laudantium maxime. Esse consequuntur harum asperiores,
        cum fugit tempora repellendus, minima eveniet, nisi voluptatum dolor
        facilis assumenda.
      </About>

      <About imagePath="/foto1.png" link="Ver mais" pathToLink="/" isReverse>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
        recusandae dolores atque eos molestiae numquam, neque quaerat ducimus
        aliquid eaque at doloremque nihil optio voluptate. Quos provident eos
        nihil, nesciunt laborum, ut facilis odio, iste deleniti similique iure.
        Id ipsa eius vero consequuntur numquam explicabo quibusdam voluptatibus
        quam fugiat est.
      </About>

      <Portfolio />
      <Skills />
    </main>
  );
}
