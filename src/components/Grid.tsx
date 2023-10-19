import Image from "next/image";

export const Grid = () => {
  return (
    <section className="mt-48 border-y border-black px-6">
      <div className="max-w-screen-xl mx-auto flex">
        <div className="border-x border-black w-[500px]">
          <div className="p-8">
            <Image
              width={1750}
              height={1782}
              src="/images/masskara-pic.png"
              className="w-full"
              alt="Masskara"
            />

            <div className="uppercase flex justify-between items-center mt-6 text-sm">
              <p className="font-semibold">Masskara 2023</p>
              <a href="#">Learn More</a>
            </div>
          </div>

          <div className="flex p-8 border-t border-black">
            <Image
              width={864}
              height={417}
              src="/images/logo-text.png"
              className="w-full object-contain"
              alt="Masskara"
            />

            <Image
              width={967}
              height={218}
              src="/images/yuhum.png"
              className="w-full object-contain"
              alt="Masskara"
            />
          </div>
        </div>

        <div className="w-[500px] border-r border-black">
          <div className="p-8 text-xl leading-relaxed">
            <p>
              “Come to Super City and savor the delightful MassKara Festival!
              Enjoy good food and experience the warm embrace of
              Bacolodnon&apos;s hospitality. Immerse yourself in the vibrant
              parade, cultural exhibits, and dance with joy among colorful masks
              and costumes. Feel the captivating rhythms and indulge in
              delicious dishes. Join us for pure joy and a celebration like no
              other!”
            </p>

            <p className="mt-6 font-semibold">Mayor Albee Benitez</p>
            <p>Bacolod City — City of Smiles</p>
          </div>

          <div className="p-8 border-t border-black">
            <div className="uppercase flex justify-between items-center mt-6 text-sm">
              <p className="font-semibold">Masskara 2023</p>
              <a href="#">The Logo</a>
            </div>

            <Image
              width={1462}
              height={1155}
              src="/images/full-logo.png"
              className="w-full object-contain"
              alt="Masskara"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
