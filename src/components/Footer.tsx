import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[#f2653f] py-6 px-4">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Logo */}
        <div className="mb-4">
          <Link href="/">
            <Image
              src="/assets/logos/mwpMED.png"
              alt="Pafos Sports Center Logo"
              width={60}
              height={20}
              className="object-contain w-[50%] h-[50%]"
            />
          </Link>
        </div>
        {/* Navigation Links */}
        <nav className="flex flex-col sm:flex-row sm:space-x-4 text-sm sm:text-base mb-4">
          <Link href="/about" className="text-white hover:text-gray-200 font-medium py-1 sm:py-0">
            About
          </Link>
          <Link href="/sports" className="text-white hover:text-gray-200 font-medium py-1 sm:py-0">
            Sports
          </Link>
          <Link href="/cafe" className="text-white hover:text-gray-200 font-medium py-1 sm:py-0">
            Cafe
          </Link>
          <Link href="/proshop" className="text-white hover:text-gray-200 font-medium py-1 sm:py-0">
            Proshop
          </Link>
          <Link href="/contact" className="text-white hover:text-gray-200 font-medium py-1 sm:py-0">
            Contact
          </Link>
        </nav>
        {/* Copyright */}
        <p className="text-white text-sm">© 2025 Pafos Sports Center. All rights reserved.</p>
      </div>
    </footer>
  );
}