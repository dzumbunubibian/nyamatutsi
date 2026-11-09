import Header from "./Components/Header.jsx";
import OurStory from "./Components/OurStory.jsx";
import Activities from "./Components/Activities.jsx";
import Sightings from "./Components/sightings.jsx";
import Itineraries from "./Components/Iteneries.jsx";
import Testimonials from "./Components/Testimonials.jsx";
import Gallery from "./Components/Gallery.jsx";
import Footer from "./Components/Footer.jsx";

function App() {
  return (
    <>
      <div className="relative h-screen min-h-[600px] overflow-hidden text-white font-[Montserrat]">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/zebra-banner.png')" }}
        >
          <div className="absolute inset-0 bg-slate-950/10"></div>
        </div>

        <div className="relative z-10 flex h-full flex-col">
          <Header />

          <main className="relative flex-1">
            <p
              className="absolute left-1/2 -translate-x-1/2 -translate-y-full whitespace-nowrap text-center text-[7vw] font-light leading-none tracking-wide drop-shadow-lg"
              style={{ top: "43%" }}
            >
              Indulge in
            </p>
          </main>

          <div className="absolute right-6 top-1/3 hidden flex-col gap-6 md:flex">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook" className="hover:text-slate-300 transition-colors">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.8c4.56-.93 8-4.96 8-9.8z" />
              </svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className="hover:text-slate-300 transition-colors">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter" className="hover:text-slate-300 transition-colors">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
              </svg>
            </a>
          </div>

          <a href="#About" aria-label="Scroll down" className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce">
            <svg className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
            </svg>
          </a>
        </div>
      </div>

      <OurStory />
      <Activities />
      <Sightings />
      <Itineraries />
      <Testimonials />
      <Gallery />
      <Footer />
      </>
  );
}

export default App;