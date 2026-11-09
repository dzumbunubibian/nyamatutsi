const images = [
  { src: "/Rooze.png", alt: "Safari vehicle on a dirt road", span: "col-span-2 md:col-span-3" },
  { src: "/Elephant.png", alt: "Elephant seen from a safari vehicle", span: "md:col-span-1" },
  { src: "/dia.png", alt: "Woman canoeing on the river", span: "md:col-span-1" },
  { src: "/Giraffe.png", alt: "Giraffe at sunset", span: "md:col-span-1" },
  { src: "/savanna.png", alt: "Acacia tree at sunset", span: "md:col-span-1" },
  { src: "/foot.png", alt: "Paw prints in the sand", span: "col-span-2 md:col-span-1" },
  { src: "/lodge3.png", alt: "Lodge tent interior", span: "col-span-2 md:col-span-2" },
];

export default function Gallery() {
  return (
    <section id="Gallery" className="mx-auto max-w-7xl scroll-mt-20 px-6 py-20">
      <h2 className="mb-12 text-4xl font-light tracking-wide">Our gallery</h2>

      <div className="grid auto-rows-[200px] grid-cols-2 gap-3 md:auto-rows-[260px] md:grid-cols-[251fr_251fr_251fr_345fr_345fr] md:gap-5 lg:auto-rows-[369px]">
        {images.map((img) => (
          <img
            key={img.src}
            src={img.src}
            alt={img.alt}
            className={`h-full w-full object-cover ${img.span}`}
          />
        ))}
      </div>
    </section>
  );
}