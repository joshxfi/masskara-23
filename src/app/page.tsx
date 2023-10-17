import Image from "next/image";
import localFont from "next/font/local";

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
            className={`${bosch.className} uppercase text-[150px] leading-none text`}
          >
            Masskara
          </h1>

          <div className="flex items-center space-x-12 font-ppmori text">
            <h2 className="font-extralight text-8xl">2023 </h2>
            <a href="#" className="text-3xl uppercase font-extralight">
              View Schedule &rarr;
            </a>
          </div>
        </div>

        <p className="text-xl max-w-sm text-right mt-32 ml-[500px] font-extralight text">
          Renowned for its captivating masks, colorful costumes, and energetic
          street dances, symbolizing the community’s resilience, happiness, and
          unity in the face of challenges.
        </p>
      </div>

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
