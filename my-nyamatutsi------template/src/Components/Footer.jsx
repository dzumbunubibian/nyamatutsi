const columns = [
  {
    title: "Useful information",
    links: ["Travel information", "Safari logistics", "Privacy policy", "Terms and conditions"],
  },
  {
    title: "Sitemap",
    links: ["Home", "About", "Suggested itineraries", "Gallery"],
  },
  {
    title: "Get in touch",
    links: ["Plan your safari", "Contact us", "Careers"],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#e8501a] text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 sm:grid-cols-2 md:grid-cols-5">
        {columns.map((col) => (
          <div key={col.title}>
            <h4 className="mb-5 text-xs font-semibold italic">{col.title}</h4>
            <ul className="space-y-3 text-xs">
              {col.links.map((link) => (
                <li key={link}>
                  <a href="#" className="transition-opacity hover:opacity-70">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="md:col-span-2">
          <h4 className="mb-5 text-xs font-semibold italic">
            Sign up for our newsletter
          </h4>
          <div className="flex">
            <input
              type="email"
              placeholder="Email"
              className="w-full bg-white px-3 py-2 text-xs text-gray-800 placeholder-gray-400 focus:outline-none"
            />
            <button
              type="button"
              className="bg-slate-900 px-5 py-2 text-xs font-semibold italic text-white transition-colors hover:bg-black"
            >
              Submit
            </button>
          </div>
        </div>
      </div>

      <div className="border-t border-white/40 py-4 text-center text-[10px]">
        &copy; Copyright 2026 Nyamatutsi camp. All rights reserved
      </div>
    </footer>
  );
}