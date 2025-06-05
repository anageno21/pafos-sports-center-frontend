import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="bg-[#f2653f] py-12 px-4 sm:py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center">
        {/* First Frame (55%) - Logo */}
        <div className="w-full sm:w-[55%] flex justify-center sm:justify-start mb-6 sm:mb-0">
          <Image
            src="/assets/logos/mwpMED.png"
            alt="Pafos Sports Center Logo"
            width={225}
            height={75}
            className="object-contain w-full h-auto"
          />
        </div>
        {/* Second Frame (45%) - Text & Buttons */}
        <div className="w-full sm:w-[45%] text-center sm:text-left p-6 sm:p-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
            Experience Pafos Sports Center
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white mb-6 sm:mb-8 max-w-xl mx-auto sm:mx-0">
            State-of-the-art facilities, a variety of sports and activities for all ages in the heart of Pafos.
          </p>
          <div className="flex flex-col sm:flex-row justify-center sm:justify-start gap-4 sm:gap-6">
            <Link
              href="/sports"
              className="px-4 py-2 sm:px-6 sm:py-3 bg-white text-[#f2653f] rounded-lg hover:bg-gray-100 text-sm sm:text-base font-medium transition-colors"
            >
              Explore Sports
            </Link>
            <Link
              href="/signup"
              className="px-4 py-2 sm:px-6 sm:py-3 border border-white text-white rounded-lg hover:bg-white hover:text-[#f2653f] text-sm sm:text-base font-medium transition-colors"
            >
              Sign Up Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}