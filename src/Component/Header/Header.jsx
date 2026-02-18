import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const headerRef = useRef(null);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = window.location.pathname;
  console.log(location);


  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      if (headerRef.current) {
        if (scrollTop > lastScrollTop && scrollTop > 100) {
          // Scrolling down hide header
          headerRef.current.style.transform = "translateY(-100%)";
        } else {
          // Scrolling up show header
          headerRef.current.style.transform = "translateY(0)";
        }

        // Add background when scrolled
        setIsScrolled(scrollTop > 20);
      }

      setLastScrollTop(scrollTop);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollTop]);

  const navItems = [
    { to: "/", icon: "fa-house", label: "الصفحة الرئيسية" },
    { to: "/quran", icon: "fa-book-quran", label: "القرآن الكريم" },
    { to: "/Prayer-times", icon: "fa-mosque", label: "أوقات الصلاة" },
    { to: "/audio-quran", icon: "fa-play", label: "مصاحف صوتية" },
    { to: "/radio", icon: "fa-radio", label: "راديو" },
    { to: "/read-quran", icon: "fa-book-open-reader", label: "أقرأ" },
    { to: "/hadith", icon: "fa-book", label: "أحاديث" },
    {
      to: "/questions-answers",
      icon: "fa-circle-question",
      label: "أسئلة وأجوبة",
    },
    { to: "/favorite-verses", icon: "fa-heart", label: "آيات" },
    { to: "/azkar", icon: "fa-book-open", label: "أذكار" },
  ];

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || open || location !== "/"
          ? "bg-slate-900/95 backdrop-blur-lg shadow-xl"
          : "bg-transparent"
      }`}>
      <div className="px-4">
        <nav className="flex items-center justify-between py-4 lg:py-5">
          {/* Logo */}
          <Link
            to="/"
            className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent hover:from-emerald-300 hover:to-teal-300 transition-all duration-300 relative z-50"
            style={{ fontFamily: "'thuluth-decorated', serif" }}>
            أيات          </Link>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setOpen((prev) => !prev)}
            className="xl:hidden relative z-50 w-12 h-12 flex items-center justify-center text-white hover:text-emerald-400 transition-colors"
            aria-label="Toggle menu">
            <i
              className={`fa-solid text-2xl transition-all duration-300 ${
                open ? "fa-xmark rotate-90" : "fa-bars"
              }`}></i>
          </button>

          {/* Nav Menu */}
          <ul
            className={`fixed xl:static top-0 right-0 h-screen xl:h-auto w-80 xl:w-auto bg-slate-900 xl:bg-transparent flex flex-col xl:flex-row items-start xl:items-center justify-start xl:justify-center gap-1 lg:gap-6 xl:gap-8 pt-24 xl:pt-0 px-8 xl:px-0 transition-transform duration-300 ease-in-out ${
              open ? "translate-x-0" : "translate-x-full xl:translate-x-0"
            }`}>
            {navItems.map((item, index) => (
              <li key={index} className="w-full lg:w-auto">
                <Link
                  to={item.to}
                  className="flex items-center gap-3 text-white hover:text-emerald-400 transition-all duration-300 py-3 lg:py-2 px-4 lg:px-0 rounded-lg lg:rounded-none hover:bg-slate-800/50 lg:hover:bg-transparent group relative overflow-hidden">
                  <i
                    className={`fa-solid ${item.icon} text-lg group-hover:scale-110 transition-transform duration-300`}></i>
                  <span className="font-medium text-base">{item.label}</span>

                  {/* Hover underline for desktop */}
                  <span className="hidden lg:block absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-400 to-teal-400 group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
            ))}
          </ul>

          {/* Overlay for mobile menu */}
          {open && (
            <div
              onClick={() => setOpen(false)}
              className="xl:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40"></div>
          )}
        </nav>
      </div>
    </header>
  );
}
