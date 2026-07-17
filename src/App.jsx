import { useEffect, useRef } from 'react';
import './App.css';
import backgroundPath from './assets/background.jpg';

function App() {
  const bgRef = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    // 1. Mouse coordinates and animation loops references
    const state = {
      mouseX: 0,
      mouseY: 0,
      currentX: 0,
      currentY: 0,
      animationFrameId: null
    };

    // Physics parameters for premium smooth ease-in-out movement
    const easeAmount = 0.08;
    const maxBgMove = 25;      // Max translation offset for parallax background (pixels)
    const maxCardRotate = 4;   // Max rotation angle for 3D card perspective tilt (degrees)

    // Device performance guard (skip mouse track on mobile touch screens)
    const isTouchDevice = 
      'ontouchstart' in window || 
      navigator.maxTouchPoints > 0 || 
      navigator.msMaxTouchPoints > 0;

    // Track half dimensions for normalization
    let windowHalfX = window.innerWidth / 2;
    let windowHalfY = window.innerHeight / 2;

    const handleResize = () => {
      windowHalfX = window.innerWidth / 2;
      windowHalfY = window.innerHeight / 2;
    };

    // Normalized coordinate calculation (-1 to 1 based on center)
    const handleMouseMove = (e) => {
      state.mouseX = (e.clientX - windowHalfX) / windowHalfX;
      state.mouseY = (e.clientY - windowHalfY) / windowHalfY;
    };

    const handleMouseLeave = () => {
      state.mouseX = 0;
      state.mouseY = 0;
    };

    // 2. High-performance Render loop (RequestAnimationFrame)
    const updatePhysics = () => {
      // Easing formula
      state.currentX += (state.mouseX - state.currentX) * easeAmount;
      state.currentY += (state.mouseY - state.currentY) * easeAmount;

      // Parallax transformation to background (opposite direction)
      if (bgRef.current) {
        const transX = -state.currentX * maxBgMove;
        const transY = -state.currentY * maxBgMove;
        bgRef.current.style.transform = `translate3d(${transX}px, ${transY}px, 0) scale(1.03)`;
      }

      // 3D Perspective Tilt on Card (towards mouse pointer)
      if (cardRef.current) {
        const rotY = state.currentX * maxCardRotate;
        const rotX = -state.currentY * maxCardRotate;
        cardRef.current.style.transform = `perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg)`;
      }

      state.animationFrameId = requestAnimationFrame(updatePhysics);
    };

    // 3. Bind listeners & Start animation on Desktop devices
    if (!isTouchDevice) {
      window.addEventListener('resize', handleResize);
      window.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseleave', handleMouseLeave);
      
      // Start loop
      state.animationFrameId = requestAnimationFrame(updatePhysics);
    }

    // 4. Memory cleanup on unmount
    return () => {
      if (!isTouchDevice) {
        window.removeEventListener('resize', handleResize);
        window.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseleave', handleMouseLeave);
        if (state.animationFrameId) {
          cancelAnimationFrame(state.animationFrameId);
        }
      }
    };
  }, []);

  // Scroll Indicator Click Handler
  const handleScrollClick = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  // Keyboard accessibility handler for scroll button (Enter / Space key)
  const handleScrollKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleScrollClick();
    }
  };

  return (
    <main id="main-content">
      {/* Hero Section Container */}
      <section 
        id="hero-section" 
        className="hero-section" 
        aria-label="이채연 포트폴리오 메인 소개"
      >
        {/* Parallax Background Layer (aria-hidden for screen reader noise reduction) */}
        <div 
          ref={bgRef}
          id="hero-background-layer" 
          className="hero-bg" 
          aria-hidden="true"
          style={{ backgroundImage: `url(${backgroundPath})` }}
        />
        
        {/* Flat content container */}
        <div 
          ref={cardRef}
          id="hero-content" 
          className="hero-content-wrapper"
        >
          <header className="hero-header">
            {/* Semantic Headings for Screen Reader & SEO */}
            <h1 id="hero-main-title" className="hero-title">
              <span aria-hidden="true">PORTFOLIO</span>
              <span className="sr-only">이채연 웹 퍼블리셔 포트폴리오 메인 화면</span>
            </h1>
          </header>
          
          {/* Description text from Figma */}
          <p id="hero-description-text" className="hero-desc">
            웹 접근성과 시각적 피드백을 중심으로, 누구나 막힘없이 사용할 수 있는<br className="desktop-only" />
            인터랙티브 웹을 구현하는 웹 퍼블리셔 <strong id="highlighted-name" className="highlight-name">이채연</strong>입니다.
          </p>
          
          {/* Keyboard navigable & Screen reader readable scroll button */}
          <div 
            className="scroll-indicator" 
            id="scroll-indicator" 
            role="button"
            tabIndex={0}
            aria-label="하단 소개글 본문 콘텐츠로 이동"
            onClick={handleScrollClick}
            onKeyDown={handleScrollKeyDown}
          >
            <span className="mouse-icon" aria-hidden="true">
              <span className="wheel"></span>
            </span>
            <span className="scroll-text" aria-hidden="true">Scroll Down</span>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
