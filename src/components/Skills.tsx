import Image from "next/image";

function Skills() {
  return (
    <div className="grid grid-cols-2">
      <div
        className={`sm:col-span-1 col-span-2 flex items-center justify-center p-6`}
      >
        <Image
          width={368}
          height={368}
          src={"/foto1.png"}
          alt="Foto 1 sobre mim."
          className="rounded-full object-contain border-4 border-primarylighter"
        />
      </div>
      <div className="sm:col-span-1 col-span-2 flex flex-col items-center justify-center p-6">
        <h2 className="sm:text-4xl text-2xl py-4">Skills</h2>
        <ul>
          <li className="text-xl">C#</li>
          <li className="text-xl">Unity</li>
          <li className="text-xl">
            Conhecimento sólido em Matemática e Física#
          </li>
          <li className="text-xl">Aseprite</li>
          <li className="text-xl">Adaptabilidade#</li>
          <li>Resolução de problemas</li>
        </ul>
      </div>
    </div>
  );
}

export default Skills;
