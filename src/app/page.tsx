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
      <div className="max-w-screen-xl mx-auto mt-52 text-black">
        <div>
          <h1
            className={`${bosch.className} uppercase text-[150px] leading-none anim-tr`}
          >
            Masskara
          </h1>

          <div className="flex items-center space-x-12 font-ppmori anim-tr">
            <h2 className="font-extralight text-8xl">2023 </h2>
            <a href="#" className="text-3xl uppercase font-extralight">
              Learn More &rarr;
            </a>
          </div>
        </div>

        <p className="text-xl max-w-sm text-right mt-32 ml-[500px] font-extralight text anim-tt">
          Renowned for its captivating masks, colorful costumes, and energetic
          street dances, symbolizing the community’s resilience, happiness, and
          unity in the face of challenges.
        </p>

        <div className="mt-72">
          <h1
            className={`${bosch.className} uppercase text-8xl leading-none text-black trig-tr`}
          >
            Embrace the Smiles
          </h1>
          <h1
            className={`${bosch.className} uppercase text-8xl leading-none text-black trig-tr`}
          >
            Feel the Rhythm
          </h1>

          <button
            type="button"
            className="rounded-md border border-black px-6 py-3 text-xl mt-6 trig-tr"
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
        className="absolute right-0 object-contain w-[600px] top-0 pointer-events-none"
      />
    </main>
  );
}
