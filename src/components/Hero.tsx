import Link from 'next/link';
import Image from 'next/image';

interface HeroProps {
  backgroundColor: string;
  imageSrc?: string;
  imageAlt?: string;
  imageWidth?: number;
  imageHeight?: number;
  title: string;
  description: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
}

export default function Hero({
  backgroundColor,
  imageSrc = '',
  imageAlt = 'Pafos Sports Center Logo',
  imageWidth = 225,
  imageHeight = 75,
  title,
  description,
  primaryButtonText = '',
  primaryButtonLink = '/',
  secondaryButtonText = '',
  secondaryButtonLink = '/',
}: HeroProps) {
  console.log('Hero imageSrc:', imageSrc); // Debugging: Log the imageSrc to verify
  return (
    <section className="py-12 px-4 sm:py-16 md:py-20 lg:py-24 bg-gray-800" style={{ backgroundColor }}>
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center">
        {/* First Frame (55%) - Image */}
        <div className="w-full sm:w-[55%] flex justify-center sm:justify-start mb-6 sm:mb-0">
          {imageSrc && (
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={imageWidth}
              height={imageHeight}
              className="object-contain w-full h-auto"
            />
          )}
        </div>
        {/* Second Frame (45%) - Text & Buttons */}
        <div className="w-full sm:w-[45%] text-center sm:text-left p-6 sm:p-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
            {title}
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white mb-6 sm:mb-8 max-w-xl mx-auto sm:mx-0">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row justify-center sm:justify-start gap-4 sm:gap-6">
            {primaryButtonText && primaryButtonLink && (
              <Link
                href={primaryButtonLink}
                className="px-4 py-2 sm:px-6 sm:py-3 bg-white text-[var(--bg-color)] rounded-lg hover:bg-gray-100 text-sm sm:text-base font-medium transition-colors"
                style={{ '--bg-color': backgroundColor } as React.CSSProperties}
              >
                {primaryButtonText}
              </Link>
            )}
            {secondaryButtonText && secondaryButtonLink && (
              <Link
                href={secondaryButtonLink}
                className="px-4 py-2 sm:px-6 sm:py-3 border border-white text-white rounded-lg hover:bg-white hover:text-[var(--bg-color)] text-sm sm:text-base font-medium transition-colors"
                style={{ '--bg-color': backgroundColor } as React.CSSProperties}
              >
                {secondaryButtonText}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}