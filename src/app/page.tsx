import Image from "next/image";
import localFont from "next/font/local";
import { Grid } from "@/components";

const bosch = localFont({
  src: "./fonts/BoschRegular.woff2",
  display: "swap",
  weight: "400",
  variable: "--font-bosch",
});

export default function Home() {
  return (
    <main>
      <div className="max-w-screen-xl mx-auto lg:mt-52 mt-24 text-black">
        <div className='px-6'>
          <h1
            className={`${bosch.className} uppercase lg:text-[150px] text-8xl md:text-9xl leading-none anim-tr`}
          >
            Masskara
          </h1>

          <div className="flex items-center lg:space-x-12 space-x-6 font-ppmori anim-tr">
            <h2 className="font-extralight lg:text-8xl text-5xl">2023 </h2>
            <a href="#" className="lg:text-3xl text-xl uppercase font-extralight">
              Learn More &rarr;
            </a>
          </div>
        </div>

        <p className="md:text-xl md:max-w-sm max-w-xs xl:text-right px-6 mt-32 lg:ml-[200px] 2xl:ml-[500px] font-extralight anim-tt">
          Renowned for its captivating masks, colorful costumes, and energetic
          street dances, symbolizing the community’s resilience, happiness, and
          unity in the face of challenges.
        </p>

        <div className="mt-72 px-6">
          <h1
            className={`${bosch.className} uppercase lg:text-8xl text-3xl md:text-4xl leading-none text-black trig-tr`}
          >
            Embrace the Smiles
          </h1>
          <h1
            className={`${bosch.className} uppercase lg:text-8xl text-4xl leading-none text-black trig-tr`}
          >
            Feel the Rhythm
          </h1>

          <button
            type="button"
            className="rounded-md border border-black px-6 py-3 lg:text-xl mt-6 trig-tr"
          >
            View Schedule &rarr;
          </button>
        </div>
      </div>

      <Grid />

      <Image
        id="mask"
        priority
        src="/images/half-logo.png"
        width={713}
        height={1201}
        quality={100}
        alt="Masskara Logo"
        className="absolute right-0 object-contain xl:w-[600px] w-[200px] lg:top-40 xl:top-0 top-96 md:top-80 pointer-events-none sm:w-[300px] md:w-[400px]"
      />
    </main>
  );
}
