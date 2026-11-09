export default function Story() {
  return (
    <section id="About" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-20">
      <div className="grid items-center gap-8 md:grid-cols-12">
        <div className="md:col-span-5">
          <h2 className="mb-20 text-4xl font-light tracking-wide md:mb-28">Our story</h2>

          <div className="space-y-6 text-sm leading-8">
            <p>
              Nyamatusi Camp is our flagship in terms of its Eco-conscious style. Our Mana Pools safari lodge is set
              in one of the wildest and most remote parts of Africa, on the banks of the Zambezi, one of the world’s
              oldest rivers. Embracing comfort, this property embodies sustainable design. Fully solar-powered and
              built from all-natural materials it encompasses its wilderness location in the most elegant way. Here,
              your Mana Pools safari plays out against a sweeping riverine landscape, where epic encounters of the
              giants that roam this land await.
            </p>
            <p>
              Consisting of six luxury tented suites, with uninterrupted views of the river and escarpment beyond, our
              Mana Pools safari lodge invites a blissful escape to nature. Each romantic guest tent is adorned with
              soft drapery and is replete with……
            </p>
          </div>

          <button className="mt-8 bg-[#e8501a] px-5 py-3 text-base font-medium text-white transition-colors hover:bg-[#c94212]">
            Enquire now
          </button>
        </div>

        <div className="md:col-span-4">
          <img
            src="/Elephant.png"
            alt="Elephant seen from a safari vehicle"
            className="h-80 w-full object-cover md:h-[420px]"
          />
        </div>

        <div className="flex flex-col gap-5 md:col-span-3">
          <img
            src="/Lion.png"
            alt="Roaring lion"
            className="h-56 w-full object-cover md:h-64"
          />
          <img
            src="/Lodge.png"
            alt="Lodge deck"
            className="h-72 w-full object-cover md:h-[360px]"
          />
        </div>
      </div>
    </section>
  );
}