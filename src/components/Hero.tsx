import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import edselProfile from '@/assets/edsel-profile.png';
import { useNavigate } from 'react-router-dom';
// import edselProfileSmall from '@/assets/edsel-profile-small-dev.png'; // No longer needed

const Hero: React.FC = () => {
  // We keep isSmall to potentially adjust other elements if needed,
  // but it's no longer used for the image source itself.
  const breakpointPx =900;
  const [isSmall, setIsSmall] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    return window.innerWidth <= breakpointPx;
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const update = () => setIsSmall(window.innerWidth <= breakpointPx);
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  // const imgSrc = isSmall ? edselProfileSmall : edselProfile; // No longer needed
  const imgSrc = edselProfile; // Always use the larger profile image

  const navigate = useNavigate();

  return (
    <section id="home" className="relative bg-white pt-32 pb-20 md:pb-300 lg:pb-40" style={{ background: '#fff' }}>
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-primary-foreground space-y-8 fade-in-up">
            {/* Greeting Tags */}
            <div className="flex flex-wrap gap-3">
              {/* This is where the Hello There! component should go */}
              <div style={{ border: '3px solid black', position: 'relative', display: 'inline-block' }}>
              <p 
                className="text-lg font-medium" 
                style={{ 
                  padding: '8px', 
                  color: '#00033cff', // same as "I'm"
                  fontWeight: 550,    // keep it light like in your image
                  fontFamily: 'Arial, sans-serif'
                }}
              >
                Hello There!
              </p>
                <div style={{ position: 'absolute', width: '11px', height: '11px', backgroundColor: '#ebbe40ff', border: '1px solid black', top: '-6px', left: '-6px' }}></div>
                <div style={{ position: 'absolute', width: '11px', height: '11px', backgroundColor: '#ebbe40ff', border: '1px solid black', top: '-6px', right: '-6px' }}></div>
                <div style={{ position: 'absolute', width: '11px', height: '11px', backgroundColor: '#ebbe40ff', border: '1px solid black', bottom: '-6px', left: '-6px' }}></div>
                <div style={{ position: 'absolute', width: '11px', height: '11px', backgroundColor: '#ebbe40ff', border: '1px solid black', bottom: '-6px', right: '-6px' }}></div>
              </div>
            </div>

            {/* Main Heading */}
            <div className="space-y-2">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                <span style={{ color: '#00033cff' }}>I'm </span>
                <span style={{ color: '#ebbe40ff' }}>Edsel Vaflor</span>
              </h1>
              <h1 className="text-2xl md:text-3xl font-semibold text-muted-foreground">
                <span style={{ color: '#00033cff' }}>Ecommerce Specialist</span><br />
                <span style={{ color: '#00033cff' }}>Based in the Philippines</span>
              </h1>
            </div>

            {/* Description */}
            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
              I specialize in ecommerce operations, project & data-driven management,
              and digital optimization to deliver efficient & measurable results.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 items-stretch">
              {/* View My Portfolio - full width on mobile, icon hidden on mobile to keep width consistent */}
              <button
                aria-label="View my portfolio"
                className="group w-full sm:w-auto flex items-center justify-center rounded-full bg-[#d8a900ff] p-1
                           transition-transform duration-300 ease-in-out hover:scale-105" // Added hover effect
                style={{ padding: '6px' }}
                onClick={() => navigate('/projects')}
              >
                <span className="inline-flex items-center justify-center bg-[#020b14ff] text-white rounded-full px-6 py-3 text-lg md:text-2xl font-semibold tracking-tight w-full text-center">
                  View My Portfolio
                </span>
                <span className="ml-4 hidden sm:inline-flex items-center justify-center bg-white rounded-full w-10 h-10 md:w-12 md:h-12 border-2 border-[#d8a900ff]">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 6L16 12L8 18V6Z" fill="#020b14" />
                  </svg>
                </span>
              </button>

              {/* Hire Me - full width on mobile */}
              <a
                aria-label="Hire me"
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center bg-white text-[#020b14ff] px-6 py-3 rounded-full text-lg md:text-2xl font-semibold border border-[#020b14ff]/10
                           transition-transform duration-300 ease-in-out hover:scale-105" // Added hover effect
              >
                Hire Me
              </a>
            </div>
          </div>

          {/* Profile Image (now always uses edselProfile) */}
          <div className="flex justify-center lg:justify-end fade-in-up">
            <div className="relative w-full pr-6 lg:pr-0" style={{ minHeight: 320 }}>
              <img
                src={imgSrc}
                alt="Edsel Vaflor - Ecommerce Specialist"
                // Adjusted styling for the image
                className="block mx-auto object-cover z-20"
                style={{
                  width: isSmall ? 'min(400px,70vw)' : 'min(550px,50vw)', // Slightly larger on small for better visibility
                  height: 'auto',
                  maxWidth: isSmall ? '70vw' : '50vw',
                  position: 'absolute', // Absolute positioning for precise placement
                  left: isSmall ? '50%' : undefined, // Center on small screens
                  transform: isSmall ? 'translateX(-50%)' : undefined, // Center on small screens
                  bottom: isSmall ? -96 : -180, // Adjust bottom to hide behind separator. Tweak -120 as needed
                  right: isSmall ? undefined : 0, // Keep right aligned on larger screens
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Separator */}
      <div className="w-full relative h-10 md:h-16 lg:h-20 overflow-visible mt-6 md:mt-8 lg:mt-10">
        <div style={{ background: '#d8a900ff', width: '120%', height: '100%', position: 'absolute', left: '-10%', top: '100%', zIndex: 1 }} />
        <div
          aria-hidden
          style={{
            background: '#020b14ff',
            width: '120%',
            height: '100%',
            position: 'absolute',
            left: '-10%',
            top: '90%',
            transform: 'skewY(-2deg)',
            zIndex: 50, // Increased z-index to be on top of the image
            boxShadow: '0 2px 0 rgba(0,0,0,0.12)',
          }}
        />
      </div>
    </section>
  );
};

export default Hero;