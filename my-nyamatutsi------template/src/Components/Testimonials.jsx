function PhotoCard({ img, name }) {
  return (
    <figure className="relative h-96 overflow-hidden md:h-full">
      <img src={img} alt={name} className="h-full w-full object-cover" />
      <div className="absolute inset-0 bg-[#e8501a]/40 mix-blend-multiply"></div>
      <figcaption className="absolute inset-x-0 bottom-8 text-center text-lg italic text-white">
        {name}
      </figcaption>
    </figure>
  );
}

export default function Testimonials() {
  return (
    <section id="Reviews" className="mx-auto max-w-7xl scroll-mt-20 px-6 py-20">
      <h2 className="mb-16 text-4xl font-light tracking-wide md:mb-24">Testimonials</h2>

      <div className="grid gap-6 md:h-[480px] md:grid-cols-[425fr_646fr_425fr] md:gap-6 lg:h-[687px] lg:gap-[60px]">
        <PhotoCard img="/Jacob.png" name="Jacob Stone" />

        <blockquote className="flex flex-col items-center justify-center border border-red-500 bg-white px-8 py-12 text-center">
          <img
            src="/smile.png"
            alt="Gemma Johnson"
            className="mb-12 h-28 w-28 rounded-full object-cover lg:mb-20 lg:h-[170px] lg:w-[170px]"
          />
          <p className="max-w-sm text-base leading-9 lg:text-lg">
            “ Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis,
            lectus magna fringilla urna, porttitor ”.
          </p>
          <span className="my-6 h-px w-24 bg-slate-400"></span>
          <cite className="text-base font-semibold italic">Gemma Johnson</cite>
        </blockquote>

        <PhotoCard img="Brown Family.png" name="Brown family" />
      </div>
    </section>
  );
}