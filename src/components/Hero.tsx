import Link from 'next/link';

export default function Hero() {
  return (
    <section className="bg-[#f2653f] py-12 px-4 sm:py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 md:mb-8">
          Ζήσε την Εμπειρία του Αθλητικού Κέντρου Πάφου
        </h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white mb-6 sm:mb-8 md:mb-10 max-w-xl sm:max-w-2xl mx-auto">
          Υπερσύγχρονες εγκαταστάσεις, ποικιλία αθλημάτων και δραστηριοτήτων για όλες τις ηλικίες στην καρδιά της Πάφου.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
          <Link
            href="/sports"
            className="px-4 py-2 sm:px-6 sm:py-3 bg-white text-[#f2653f] rounded-lg hover:bg-gray-100 text-sm sm:text-base font-medium transition-colors"
          >
            Εξερεύνησε τα Αθλήματα
          </Link>
          <Link
            href="/signup"
            className="px-4 py-2 sm:px-6 sm:py-3 border border-white text-white rounded-lg hover:bg-white hover:text-[#f2653f] text-sm sm:text-base font-medium transition-colors"
          >
            Εγγραφή Τώρα
          </Link>
        </div>
      </div>
    </section>
  );
}