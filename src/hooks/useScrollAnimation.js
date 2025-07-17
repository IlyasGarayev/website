import { useEffect, useRef, useState } from 'react';

/**
 * Custom hook for scroll-based animations using Intersection Observer
 * @param {Object} options - Options for the Intersection Observer
 * @param {number} options.threshold - Threshold for triggering the animation (0-1)
 * @param {string} options.rootMargin - Root margin for the observer
 * @param {boolean} options.triggerOnce - Whether to trigger animation only once
 * @returns {Object} - Object containing ref and inView state
 */
export const useScrollAnimation = (options = {}) => {
  const {
    threshold = 0.1,
    rootMargin = '0px',
    triggerOnce = true
  } = options;

  const [inView, setInView] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (triggerOnce) {
            setHasTriggered(true);
          }
        } else {
          if (!triggerOnce || !hasTriggered) {
            setInView(false);
          }
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [threshold, rootMargin, triggerOnce, hasTriggered]);

  return {
    ref: elementRef,
    inView: inView || hasTriggered,
  };
};

/**
 * Hook for fade-in animation on scroll
 * @param {Object} options - Options for the animation
 * @returns {Object} - Object containing ref and animation classes
 */
export const useFadeInOnScroll = (options = {}) => {
  const { ref, inView } = useScrollAnimation(options);
  
  return {
    ref,
    className: inView ? 'fade-in' : 'opacity-0',
  };
};

/**
 * Hook for slide-up animation on scroll
 * @param {Object} options - Options for the animation
 * @returns {Object} - Object containing ref and animation classes
 */
export const useSlideUpOnScroll = (options = {}) => {
  const { ref, inView } = useScrollAnimation(options);
  
  return {
    ref,
    className: inView ? 'slide-up' : 'opacity-0 translate-y-8',
  };
};

/**
 * Hook for staggered animations (useful for lists)
 * @param {number} itemCount - Number of items to animate
 * @param {number} staggerDelay - Delay between each item animation in ms
 * @param {Object} options - Options for the scroll animation
 * @returns {Object} - Object containing ref and array of animation states
 */
export const useStaggeredAnimation = (itemCount, staggerDelay = 100, options = {}) => {
  const { ref, inView } = useScrollAnimation(options);
  const [animatedItems, setAnimatedItems] = useState([]);

  useEffect(() => {
    if (inView && animatedItems.length === 0) {
      const timeouts = [];
      
      for (let i = 0; i < itemCount; i++) {
        const timeout = setTimeout(() => {
          setAnimatedItems(prev => [...prev, i]);
        }, i * staggerDelay);
        
        timeouts.push(timeout);
      }

      return () => {
        timeouts.forEach(timeout => clearTimeout(timeout));
      };
    }
  }, [inView, itemCount, staggerDelay, animatedItems.length]);

  return {
    ref,
    isItemAnimated: (index) => animatedItems.includes(index),
  };
};

export default useScrollAnimation;