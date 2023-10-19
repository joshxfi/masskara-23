import Image from "next/image";

export const Grid = () => {
  return (
    <section className="mt-48 border-y-2 border-black px-6">
      <div className="max-w-screen-xl mx-auto">
        <div className="border-x-2 border-black w-[500px]">
          <div className="p-6">
            <Image
              width={1750}
              height={1782}
              src="/images/masskara-pic.png"
              className="w-full"
              alt="Masskara"
            />

            <div className="uppercase flex justify-between items-center mt-4 text-sm">
              <p className="font-semibold">Masskara 2023</p>
              <a href="#">Learn More</a>
            </div>
          </div>

          <div className="flex p-6 border-t-2 border-black">
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
      </div>
    </section>
  );
};
