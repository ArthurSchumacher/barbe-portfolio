import Image from "next/image";

function Hero() {
  return (
    <>
      <Image
        width={1920}
        height={793}
        src={"/hero.png"}
        alt="Hero Image Background"
        className="object-contain"
      />
    </>
  );
}

export default Hero;
