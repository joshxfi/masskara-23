import localFont from "next/font/local";

const bosch = localFont({
  src: "./BoschRegular.woff2",
  display: "swap",
  weight: "400",
  variable: "--font-bosch",
});

export default function Home() {
  return (
    <main>
      <h1 className={`${bosch.className}`}>hello world</h1>
    </main>
  );
}
