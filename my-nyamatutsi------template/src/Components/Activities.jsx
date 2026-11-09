const lorem =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

const activities = [
  {
    title: "Game drives",
    text: "Game drives are what gets us up in the morning in the African bush. They are a great avenue for exploring the land in a safe and exciting way",
    image: "/walking safari.png",
    featured: true,
  },
  { title: "Walking safari", text: lorem, image: "/tour.png" },
  { title: "Bird watching", text: lorem, image: "/explore.png" },
  { title: "Canoeing", text: lorem, image: "/canoeing.png" },
  { title: "Fishing", text: lorem, image: "/fishing.png" },
];

export default function Activities() {
  return (
    <section id="Activities" className="bg-white px-6 py-20 text-gray-800">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-10 text-3xl font-light tracking-wide">Our activities</h2>

        <div className="grid grid-cols-2 gap-3 md:flex md:h-[380px]">
          {activities.map((item) => (
            <div
              key={item.title}
              className={`group relative h-72 overflow-hidden md:h-full ${
                item.featured ? "col-span-2 md:flex-[1.3]" : "md:flex-1"
              }`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/30 transition-colors duration-300 group-hover:bg-black/60"></div>

              <div className="absolute inset-x-0 bottom-0 p-4 text-white">
                <h3 className="text-sm font-semibold">{item.title}</h3>
                <p className="overflow-hidden text-[10px] leading-snug transition-all duration-300 md:max-h-0 md:opacity-0 md:group-hover:mt-1 md:group-hover:max-h-32 md:group-hover:opacity-100">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}