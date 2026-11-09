const photos = [
  {
    src: "/Giraffe.png",
    alt: "Giraffe at sunset",
    pos: "md:left-[6.875%] md:top-[50.185%] md:h-[33.981%]",
  },
  {
    src: "/Impala.png",
    alt: "Impalas",
    pos: "md:left-[24.375%] md:top-[56.667%] md:h-[33.704%]",
  },
  {
    src: "/Zebra.png",
    alt: "Zebras",
    pos: "md:left-[41.875%] md:top-[42.685%] md:h-[31.759%]",
  },
  {
    src: "/Elephant.png",
    alt: "Elephants",
    pos: "md:left-[59.375%] md:top-[14.444%] md:h-[44.815%]",
  },
  {
    src: "/wildebeest.png",
    alt: "Wildebeest herd",
    pos: "md:left-[59.375%] md:top-[61.481%] md:h-[25.093%]",
  },
  {
    src: "/Lion.png",
    alt: "Roaring lion",
    pos: "md:left-[76.875%] md:top-[27.13%] md:h-[63.241%]",
  },
];

export default function Sightings() {
  return (
    <section id="Sightings" className="bg-white py-16 text-gray-800 md:py-0">
      <div className="relative mx-auto w-full max-w-[1920px] px-6 md:aspect-video md:px-0">
        <div className="md:absolute md:left-[8.177%] md:top-[10.5%] md:w-[45%]">
          <h2 className="mb-6 text-3xl font-light tracking-wide md:mb-0 md:text-[2.7vw] md:leading-none">
            Recent wildlife sightings
          </h2>
        </div>

        <p className="mb-10 text-sm leading-relaxed md:absolute md:left-[8.177%] md:top-[29.2%] md:mb-0 md:w-[43%] md:text-[1.1vw] md:leading-[1.8vw]">
          Wildlife sightings include elephant, kudu, sable antelope, zebra,
          wildebeest, the rare and endangered roan antelope, buffalo, lion,
          leopard, hyena, and many other wildlife species.
        </p>

        <div className="grid grid-cols-2 gap-3 md:block">
          {photos.map((photo) => (
            <img
              key={photo.src}
              src={photo.src}
              alt={photo.alt}
              className={`h-64 w-full object-cover md:absolute md:w-[16.25%] ${photo.pos}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}