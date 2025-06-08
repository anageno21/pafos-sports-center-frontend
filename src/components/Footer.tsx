import Link from 'next/link';
import Image from 'next/image';

interface FooterProps {
  backgroundColor: string;
}

export default function Footer({ backgroundColor }: FooterProps) {
  return (
    <footer className="py-6 px-4 bg-gray-800" style={{ backgroundColor }}>
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Logo */}
        <div className="mb-4">
          <Link href="/" aria-label="Pafos Sports Center Home">
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
          <Link href="/padel" className="text-white hover:text-gray-200 font-medium py-1 sm:py-0">
            Padel
          </Link>
          <Link href="/football" className="text-white hover:text-gray-200 font-medium py-1 sm:py-0">
            Football
          </Link>
          <Link href="/volleyball" className="text-white hover:text-gray-200 font-medium py-1 sm:py-0">
            Volleyball
          </Link>
          <Link href="/basketball" className="text-white hover:text-gray-200 font-medium py-1 sm:py-0">
            Basketball
          </Link>
          <Link href="/tennis" className="text-white hover:text-gray-200 font-medium py-1 sm:py-0">
            Tennis
          </Link>
          <Link href="/pickleball" className="text-white hover:text-gray-200 font-medium py-1 sm:py-0">
            Pickleball
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