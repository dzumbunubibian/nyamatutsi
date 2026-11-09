import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-transparent text-white w-full sticky top-0 z-50 border-b border-white/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          <div className="flex-shrink-0 flex items-center">
            <span className="text-xl font-light tracking-wider text-red-400 font-[Montserrat]">
              Nyamatutsi
            </span>
          </div>

          <div className="flex items-center space-x-8 font-[Montserrat] tracking-widest">

            <div className="hidden md:flex space-x-8 items-center text-sm" font>
              <a href="#About" className="hover:text-slate-300 transition-colors duration-200">About</a>
              <a href="#Activities" className="hover:text-slate-300 transition-colors duration-200">Activities</a>
              <a href="#Iteneries" className="hover:text-slate-300 transition-colors duration-200">Iteneries</a>
              <a href="#Reviews" className="hover:text-slate-300 transition-colors duration-200">Reviews</a>
              <a href="#Gallery" className="hover:text-slate-300 transition-colors duration-200">Gallery</a>
            </div>
             
             <button
                      onClick={() => setIsOpen(!isOpen)}
                      type="button"
                      className="inline-flex items-center justify-center p-2 text-white hover:text-slate-300 focus:outline-none transition-colors duration-200"
                      aria-controls="mobile-menu"
                      aria-expanded={isOpen}
                    >
                <span className="sr-only">Open main menu</span>
                    {isOpen ? (
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                      ) : (
                       <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="butt" strokeWidth="1.5" d="M3 6h18M3 12h18M10 18h11" />
                        </svg>
                       )}
              </button>
       </div>
        </div>
      </div>

      <div className={`${isOpen ? "block" : "hidden"} bg-slate-900/90 backdrop-blur-lg border-t border-white/10`} id="mobile-menu">
        <div className="px-4 pt-4 pb-3 space-y-2 max-w-7xl mx-auto sm:px-6 lg:px-8 text-left">
          <a href="#About" className="block px-3 py-2 rounded-md text-base hover:bg-slate-700 hover:text-white transition-colors">About</a>
          <a href="#Activities" className="block px-3 py-2 rounded-md text-base hover:bg-slate-700 hover:text-white transition-colors">Activities</a>
          <a href="#Iteneries" className="block px-3 py-2 rounded-md text-base hover:bg-slate-700 hover:text-white transition-colors">Iteneries</a>
          <a href="#Reviews" className="block px-3 py-2 rounded-md text-base hover:bg-slate-700 hover:text-white transition-colors">Reviews</a>
          <a href="#Gallery" className="block px-3 py-2 rounded-md text-base hover:bg-slate-700 hover:text-white transition-colors">Gallery</a>
        </div>
      </div>
    </nav>
  );
}