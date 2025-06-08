import Link from 'next/link';
import Image from 'next/image';

interface HeaderProps {
  backgroundColor: string;
}

export default function Header({ backgroundColor = '#1a202c' }: HeaderProps) {
  return (
    <header className="py-4 px-4 sticky top-0 z-50 bg-gray-800" style={{ backgroundColor }}>
      <div className="max-w-7xl mx-auto flex justify-between items-center flex-wrap gap-4">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" aria-label="Pafos Sports Center Home">
            <Image
              src="/assets/logos/mwpMED.png"
              alt="Pafos Sports Center Logo"
              width={30}
              height={10}
              priority={true}
              className="object-contain w-6 sm:w-8 md:w-10"
            />
          </Link>
        </div>
        {/* Navigation */}
        <nav className="flex flex-col sm:flex-row sm:space-x-4 mt-4 sm:mt-0 text-sm sm:text-base">
          <Link
            href="/about"
            className="text-white hover:text-gray-200 font-medium py-1 sm:py-0"
            aria-current={undefined}
          >
            About
          </Link>
          <Link
            href="/padel"
            className="text-white hover:text-gray-200 font-medium py-1 sm:py-0"
            aria-current={undefined}
          >
            Padel
          </Link>
          <Link
            href="/football"
            className="text-white hover:text-gray-200 font-medium py-1 sm:py-0"
            aria-current={undefined}
          >
            Football
          </Link>
          <Link
            href="/volleyball"
            className="text-white hover:text-gray-200 font-medium py-1 sm:py-0"
            aria-current={undefined}
          >
            Volleyball
          </Link>
          <Link
            href="/basketball"
            className="text-white hover:text-gray-200 font-medium py-1 sm:py-0"
            aria-current={undefined}
          >
            Basketball
          </Link>
          <Link
            href="/tennis"
            className="text-white hover:text-gray-200 font-medium py-1 sm:py-0"
            aria-current={undefined}
          >
            Tennis
          </Link>
          <Link
            href="/pickleball"
            className="text-white hover:text-gray-200 font-medium py-1 sm:py-0"
            aria-current={undefined}
          >
            Pickleball
          </Link>
          <Link
            href="/cafe"
            className="text-white hover:text-gray-200 font-medium py-1 sm:py-0"
            aria-current={undefined}
          >
            Cafe
          </Link>
          <Link
            href="/proshop"
            className="text-white hover:text-gray-200 font-medium py-1 sm:py-0"
            aria-current={undefined}
          >
            Proshop
          </Link>
          <Link
            href="/contact"
            className="text-white hover:text-gray-200 font-medium py-1 sm:py-0"
            aria-current={undefined}
          >
            Contact
          </Link>
        </nav>
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row sm:space-x-2 mt-4 sm:mt-0 text-sm sm:text-base">
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