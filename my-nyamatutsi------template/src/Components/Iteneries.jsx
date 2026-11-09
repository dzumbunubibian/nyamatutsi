const featured = {
  title: "Zimbabwe luxury",
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor",
  perks: ["2 people", "All meals provided", "Luxury transport"],
  price: "$3,880 per person",
};

const photos = [
  { title: "Lodge pool", sub: "", img: "/Pool.png", alt: "Couple relaxing by a lodge pool", overlay: false },
  { title: "The best of the Zambezi", sub: "6 day tour deluxe plan", img: "/Zambezi river.png", alt: "The Zambezi river from above", overlay: true },
  { title: "The best of the Zambezi", sub: "6 day tour deluxe plan", img: "/Zambezi Lodge.png", alt: "Safari tent with a plunge pool", overlay: true },
];

const cardSize = "h-[450px] w-full lg:h-[600px]";

export default function Itineraries() {
  return (
    <section id="Itineraries" className="mx-auto max-w-[1780px] scroll-mt-20 px-6 py-20">
      <h2 className="mb-12 text-4xl font-light tracking-wide">Suggested itineraries</h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-[30px]">
        <div className={`relative flex flex-col justify-between bg-[#e8501a] text-white ${cardSize}`}>
          <div className="absolute right-6 top-0 flex h-[61px] w-[52px] items-center justify-center bg-white">
            <svg role="img" className="h-7 w-7 text-red-600" viewBox="0 0 24 24" fill="currentColor" aria-label="Favourite">
              <path d="M12 21s-7.5-4.6-9.6-9.2C.9 8.4 2.7 5 6 5c2 0 3.4 1.1 4 2.3h4c.6-1.2 2-2.3 4-2.3 3.3 0 5.1 3.4 3.6 6.8C19.5 16.4 12 21 12 21z" />
            </svg>
          </div>

          <div className="px-6 pt-14 lg:px-[38px] lg:pt-[62px]">
            <h3 className="mb-5 text-2xl font-semibold">{featured.title}</h3>
            <p className="mb-6 text-base leading-8">{featured.text}</p>
            <ul className="space-y-3 text-base">
              {featured.perks.map((p) => (
                <li key={p} className="flex items-center gap-3">
                  <span className="h-3 w-3 shrink-0 rounded-full bg-white"></span>
                  {p}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="border-y border-white/40 px-6 py-3 text-2xl font-semibold lg:px-[38px]">{featured.price}</p>
            <a href="#" className="flex items-center justify-between px-6 py-6 text-lg font-semibold lg:px-[44px]">
              See full itinerary
              <svg className="h-6 w-8" viewBox="0 0 32 24" fill="currentColor" aria-hidden="true">
                <path d="M0 9h22V3l10 9-10 9v-6H0z" />
              </svg>
            </a>
          </div>
        </div>

        {photos.map((p, i) => (
          <article key={i} className={`relative ${cardSize}`}>
            <img src={p.img} alt={p.alt} className="h-full w-full object-cover" />
            {p.overlay && (
              <>
                <div className="absolute inset-0 bg-gradient-to-t from-[#3d3730]/95 via-[#3d3730]/20 to-transparent"></div>
                <div className="absolute inset-x-0 bottom-8 text-center text-white">
                  <h3 className="text-2xl font-semibold italic">{p.title}</h3>
                  <p className="mt-3 text-lg">{p.sub}</p>
                </div>
              </>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}