import { useState, useEffect } from "react";

const Navbar: React.FC<{ 
    sections: { 
        id: string; 
        label: string 
    }[]; 
    active: string 
}> = ({ sections, active }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={`fixed top-0 left-0 right-0 z-30 backdrop-blur transition-colors duration-300 ${
        scrolled ? "bg-background/85" : "bg-transparent"
      }`}>
      <div className="mx-auto flex max-w-6xl items-center justify-end px-4 py-3">
        <nav className="flex gap-8">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={`rounded-full py-1.5 text-sm transition ${active === s.id ? "text-pink-custom" : "text-white/80 hover:text-white"}`}
            >
              {s.label}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Navbar;