"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

interface HeaderProps {
  backgroundColor: string;
}

export default function Header({ backgroundColor = '#1a202c' }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { href: '/about', label: 'About' },
    { href: '/padel', label: 'Padel' },
    { href: '/football', label: 'Football' },
    { href: '/volleyball', label: 'Volleyball' },
    { href: '/basketball', label: 'Basketball' },
    { href: '/tennis', label: 'Tennis' },
    { href: '/pickleball', label: 'Pickleball' },
    { href: '/cafe', label: 'Cafe' },
    { href: '/proshop', label: 'Proshop' },
    { href: '/contact', label: 'Contact' },
  ];

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
        <nav className="hidden sm:flex flex-row sm:space-x-4 mt-0 text-sm sm:text-base">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-white hover:text-gray-200 font-medium py-1 sm:py-0"
              aria-current={undefined}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        {/* Mobile Navigation with Swiper */}
        {isMenuOpen && (
          <div className="sm:hidden w-full mt-4">
            <Swiper
              spaceBetween={10}
              slidesPerView={3}
              centeredSlides={true}
              className="w-full"
            >
              {navLinks.map((link) => (
                <SwiperSlide key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white hover:text-gray-200 font-medium text-center block py-2 px-4"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        )}
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