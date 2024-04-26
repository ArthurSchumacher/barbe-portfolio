import Image from "next/image";

function Hero() {
  return (
    <>
      <Image
        width={1920}
        height={790}
        src={"/hero.png"}
        alt="Hero Image Background"
        className="object-contain sm:object-cover w-full h-full sm:h-[50vh] mt-20 sm:mt-0 rounded-b-xl"
      />
    </>
  );
}

export default Hero;
