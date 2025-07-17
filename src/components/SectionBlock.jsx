import React from 'react';
import { Link } from 'react-router-dom';
import { useSlideUpOnScroll } from '../hooks/useScrollAnimation';

const SectionBlock = ({ 
  title, 
  content, 
  buttonText, 
  buttonLink, 
  image, 
  imagePosition = 'right', 
  backgroundColor = 'bg-festival-green-100',
  textColor = 'text-gray-800',
  isExternalLink = false 
}) => {
  const animation = useSlideUpOnScroll({ threshold: 0.2 });
  
  const imageElement = (
    <div className="section-image">
      <img 
        src={image} 
        alt={title}
        className="w-full h-64 md:h-80 object-cover rounded-lg shadow-lg"
      />
    </div>
  );
  
  const textElement = (
    <div className="section-text">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
        {title}
      </h2>
      <p className={`text-lg mb-8 ${textColor}`}>
        {content}
      </p>
      {buttonText && buttonLink && (
        <div>
          {isExternalLink ? (
            <a
              href={buttonLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-block"
            >
              {buttonText}
            </a>
          ) : (
            <Link to={buttonLink} className="btn-primary inline-block">
              {buttonText}
            </Link>
          )}
        </div>
      )}
    </div>
  );
  
  return (
    <section className={`section-block ${backgroundColor}`}>
      <div 
        ref={animation.ref}
        className={`section-content transition-all duration-700 ${animation.className}`}
      >
        {imagePosition === 'left' ? (
          <>
            {imageElement}
            {textElement}
          </>
        ) : (
          <>
            {textElement}
            {imageElement}
          </>
        )}
      </div>
    </section>
  );
};

export default SectionBlock;