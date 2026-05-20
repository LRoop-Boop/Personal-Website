import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Projects", path: "/projects" },
  { label: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 w-full z-50 border-b bg-white/70 backdrop-blur-md">
      <div className="w-full mx-auto px-6 h-16 flex items-center justify-between">
        
        <Link
          to="/"
          className="font-semibold text-lg tracking-tight hover:opacity-80 transition"
        >
          Lucy Roop
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;

            return (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm transition ${
                  isActive
                    ? "text-slate-900 font-medium"
                    : "text-slate-500 hover:text-slate-900"
                }`}
              >
                {item.label}
              </Link>
            );
          })}

          <a
            href="/Lucy-Roop-Resume.pdf"
            className="text-sm px-4 py-2 rounded-full border border-slate-300 hover:border-slate-900 hover:text-slate-900 transition"
          >
            Resume
          </a>
        </nav>

        <button
          className="md:hidden"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t bg-white">
          <div className="px-6 py-4 flex flex-col gap-4">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setOpen(false)}
                  className={`text-sm ${
                    isActive
                      ? "text-slate-900 font-medium"
                      : "text-slate-500"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}

            <a
              href="/Lucy-Roop-Resume.pdf" target="_blank" rel="noopener noreferrer"
              className="text-sm px-4 py-2 rounded-full border border-slate-300 w-fit"
            >
              Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
}