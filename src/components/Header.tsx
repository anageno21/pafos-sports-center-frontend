"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

interface HeaderProps {
  backgroundColor: string;
}

export default function Header({ backgroundColor = '#1a202c' }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="py-4 px-4 sticky top-0 z-50 bg-gray-800" style={{ backgroundColor }}>
      <div className="max-w-7xl mx-auto flex justify-between items-center flex-wrap gap-4">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" aria-label="Pafos Sports Center Home">
            <Image
              src="/assets/logos/mwpMED.png"
              alt="Pafos Sports Center Logo"
              width={60}
              height={20}
              priority={true}
              className="object-contain"
            />
          </Link>
        </div>
        {/* Burger Icon for Small Screens */}
        <button
          className="sm:hidden text-white focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>
        {/* Navigation */}
        <nav
          className={`${
            isMenuOpen ? 'flex' : 'hidden'
          } sm:flex flex-col sm:flex-row sm:space-x-4 w-full sm:w-auto mt-4 sm:mt-0 text-sm sm:text-base`}
        >
          <Link
            href="/about"
            className="text-white hover:text-gray-200 font-medium py-1 sm:py-0"
            aria-current={undefined}
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          <Link
            href="/padel"
            className="text-white hover:text-gray-200 font-medium py-1 sm:py-0"
            aria-current={undefined}
            onClick={() => setIsMenuOpen(false)}
          >
            Padel
          </Link>
          <Link
            href="/football"
            className="text-white hover:text-gray-200 font-medium py-1 sm:py-0"
            aria-current={undefined}
            onClick={() => setIsMenuOpen(false)}
          >
            Football
          </Link>
          <Link
            href="/volleyball"
            className="text-white hover:text-gray-200 font-medium py-1 sm:py-0"
            aria-current={undefined}
            onClick={() => setIsMenuOpen(false)}
          >
            Volleyball
          </Link>
          <Link
            href="/basketball"
            className="text-white hover:text-gray-200 font-medium py-1 sm:py-0"
            aria-current={undefined}
            onClick={() => setIsMenuOpen(false)}
          >
            Basketball
          </Link>
          <Link
            href="/tennis"
            className="text-white hover:text-gray-200 font-medium py-1 sm:py-0"
            aria-current={undefined}
            onClick={() => setIsMenuOpen(false)}
          >
            Tennis
          </Link>
          <Link
            href="/pickleball"
            className="text-white hover:text-gray-200 font-medium py-1 sm:py-0"
            aria-current={undefined}
            onClick={() => setIsMenuOpen(false)}
          >
            Pickleball
          </Link>
          <Link
            href="/cafe"
            className="text-white hover:text-gray-200 font-medium py-1 sm:py-0"
            aria-current={undefined}
            onClick={() => setIsMenuOpen(false)}
          >
            Cafe
          </Link>
          <Link
            href="/proshop"
            className="text-white hover:text-gray-200 font-medium py-1 sm:py-0"
            aria-current={undefined}
            onClick={() => setIsMenuOpen(false)}
          >
            Proshop
          </Link>
          <Link
            href="/contact"
            className="text-white hover:text-gray-200 font-medium py-1 sm:py-0"
            aria-current={undefined}
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
        </nav>
        {/* CTA Buttons */}
        <div className="hidden sm:flex flex-col sm:flex-row sm:space-x-2 mt-4 sm:mt-0 text-sm sm:text-base">
          <Link
            href="/login"
            className="px-3 py-2 text-white border border-white rounded-lg hover:bg-white hover:text-[var(--bg-color)] mb-2 sm:mb-0"
            style={{ '--bg-color': backgroundColor } as React.CSSProperties}
          >
            Login
          </Link>
          <Link
            href="/signup"
            className="px-3 py-2 bg-white text-[var(--bg-color)] rounded-lg hover:bg-gray-200"
            style={{ '--bg-color': backgroundColor } as React.CSSProperties}
          >
            Sign Up
          </Link>
        </div>
      </div>
    </header>
  );
}