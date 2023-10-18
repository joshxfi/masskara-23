import Image from "next/image";

export const Grid = () => {
  return (
    <section className="mt-48 border-y-2 border-black p-6">
      <div className="max-w-screen-xl mx-auto">
        <Image width={1750} height={1782} src="/images/masskara-pic.png" className="w-96 rounded" alt="Masskara" />
      </div>
    </section>
  );
};
