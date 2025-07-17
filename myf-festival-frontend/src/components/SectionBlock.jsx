'use client';

import { useInView } from 'react-intersection-observer';
import Link from 'next/link';

export default function SectionBlock({ 
  title, 
  description, 
  ctaText, 
  ctaLink, 
  image, 
  imagePosition = 'right',
  backgroundColor = 'bg-festival-green-500',
  textColor = 'text-white'
}) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const isImageLeft = imagePosition === 'left';

  return (
    <section className={`py-20 ${backgroundColor}`}>
      <div className="container mx-auto px-4">
        <div 
          ref={ref}
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
            inView ? 'animate-fade-in' : 'opacity-0'
          }`}
        >
          {/* Content */}
          <div className={`space-y-6 ${isImageLeft ? 'lg:order-2' : ''}`}>
            <h2 className={`text-4xl font-bold ${textColor}`}>
              {title}
            </h2>
            
            <p className={`text-lg leading-relaxed ${textColor} opacity-90`}>
              {description}
            </p>
            
            {ctaText && ctaLink && (
              <Link
                href={ctaLink}
                className="inline-block bg-white text-festival-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
              >
                {ctaText}
              </Link>
            )}
          </div>

          {/* Image */}
          <div className={`${isImageLeft ? 'lg:order-1' : ''}`}>
            <div className="relative">
              <img
                src={image}
                alt={title}
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20 rounded-lg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}