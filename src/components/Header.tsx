import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="bg-[#f2653f] py-4 px-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center flex-wrap">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/assets/logos/mwpMED.png"
              alt="Pafos Sports Center Logo"
              width={120}
              height={40}
              className="object-contain w-24 sm:w-32 md:w-40"
            />
          </Link>
        </div>
        {/* Navigation */}
        <nav className="flex flex-col sm:flex-row sm:space-x-4 mt-4 sm:mt-0 text-sm sm:text-base">
          <Link href="/about" className="text-white hover:text-gray-200 font-medium py-1 sm:py-0">
            Σχετικά
          </Link>
          <Link href="/sports" className="text-white hover:text-gray-200 font-medium py-1 sm:py-0">
            Αθλήματα
          </Link>
          <Link href="/cafe" className="text-white hover:text-gray-200 font-medium py-1 sm:py-0">
            Καφέ
          </Link>
          <Link href="/proshop" className="text-white hover:text-gray-200 font-medium py-1 sm:py-0">
            Proshop
          </Link>
          <Link href="/contact" className="text-white hover:text-gray-200 font-medium py-1 sm:py-0">
            Επικοινωνία
          </Link>
        </nav>
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row sm:space-x-2 mt-4 sm:mt-0 text-sm sm:text-base">
          <Link
            href="/login"
            className="px-3 py-2 text-white border border-white rounded-lg hover:bg-white hover:text-[#f2653f] mb-2 sm:mb-0"
          >
            Σύνδεση
          </Link>
          <Link
            href="/signup"
            className="px-3 py-2 bg-white text-[#f2653f] rounded-lg hover:bg-gray-200"
          >
            Εγγραφή
          </Link>
        </div>
      </div>
    </header>
  );
}