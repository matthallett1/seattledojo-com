'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';

const NAV_LINKS = [
  { href: '/about', label: 'About' },
  { href: '/instructors', label: 'Instructors' },
  { href: '/schedule', label: 'Schedule' },
  { href: '/membership', label: 'Membership' },
  { href: '/news', label: 'News' },
  { href: '/contact', label: 'Contact' },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-primary border-b border-[#FAF6F1]/10">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="/"
          className="font-display text-xl text-[#FAF6F1] hover:text-[#FAF6F1]/80 transition-colors"
        >
          Seattle Dojo
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
          {NAV_LINKS.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className={`text-sm transition-colors ${
                pathname === href
                  ? 'text-accent'
                  : 'text-[#FAF6F1]/70 hover:text-[#FAF6F1]'
              }`}
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 text-[#FAF6F1]"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          {isOpen ? (
            <span className="text-xl leading-none">&times;</span>
          ) : (
            <>
              <span className="block w-5 h-0.5 bg-current" />
              <span className="block w-5 h-0.5 bg-current" />
              <span className="block w-5 h-0.5 bg-current" />
            </>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-primary border-t border-[#FAF6F1]/10 px-6 py-4">
          <nav aria-label="Mobile navigation">
            {NAV_LINKS.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className={`block py-2 text-sm transition-colors ${
                  pathname === href
                    ? 'text-accent'
                    : 'text-[#FAF6F1]/70 hover:text-[#FAF6F1]'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
