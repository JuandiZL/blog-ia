"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const navLinks = [
    { name: "Inicio", path: "/" },
    { name: "Artículos", path: "/articulos" },
    { name: "Noticias", path: "/noticias" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/50 backdrop-blur-md border-b border-gray-800">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-white text-xl font-bold tracking-tight">
          Blog <span className="text-blue-500">IA</span>
        </Link>

        <ul className="flex space-x-8 text-gray-300">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.path}
                className={`hover:text-blue-400 transition-colors ${
                  pathname === link.path ? "text-blue-500 font-semibold" : ""
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}