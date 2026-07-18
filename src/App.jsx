import { useEffect, useRef } from 'react';
import './App.css';
import backgroundPath from './assets/background.jpg';
import memojiPath from './assets/memoji.png';
import workSuwonPath from './assets/work_suwon.png';
import workLevitePath from './assets/work_levite.png';
import workMoodonPath from './assets/work_moodon.png';
import contactGithubPath from './assets/contact_github.png';
import contactCursorPath from './assets/contact_cursor.png';

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
      // Only trigger parallax when user is near the top hero fold
      if (window.scrollY < window.innerHeight) {
        state.mouseX = (e.clientX - windowHalfX) / windowHalfX;
        state.mouseY = (e.clientY - windowHalfY) / windowHalfY;
      }
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

  // Scroll reveal animation for any sections with the 'scroll-reveal' class
  useEffect(() => {
    const revealSections = document.querySelectorAll('.scroll-reveal');
    if (revealSections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15, // Trigger when 15% of the section is visible
      }
    );

    revealSections.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
    };
  }, []);


  // Scroll Indicator Click Handler (focuses directly to About Section)
  const handleScrollClick = () => {
    const aboutSection = document.getElementById('about-section');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth'
      });
    }
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
      {/* 1. Hero Section Container */}
      <section 
        id="hero-section" 
        className="hero-section" 
        aria-label="이채연 포트폴리오 메인 소개"
      >
        {/* Parallax Background Layer */}
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

      {/* 2. About Me Section Container */}
      <section 
        id="about-section" 
        className="about-section scroll-reveal" 
        aria-label="이채연 소개 및 핵심 약력"
      >
        {/* Display Title with Linear Gradient styling */}
        <h2 className="about-title reveal-item" style={{ '--reveal-delay': '0.08s' }}>ABOUT ME</h2>

        <div className="about-content-grid">
          {/* Left Column: Visual Profile Card */}
          <div className="profile-visual-card reveal-item" style={{ '--reveal-delay': '0.23s' }}>
            <div className="memoji-wrapper">
              <img 
                src={memojiPath} 
                alt="이채연 캐릭터 미모지 프로필 이미지" 
                className="profile-memoji-img"
              />
            </div>
            <h3 className="profile-name">
              이채연 <span className="profile-name-en">LEE CHAEYEON</span>
            </h3>
          </div>

          {/* Right Column: Detailed Philosophy & Story */}
          <div className="profile-biography reveal-item" style={{ '--reveal-delay': '0.38s' }}>
            <p className="bio-lead-paragraph">
              기획부터 구현까지 책임감 있게 조율하는 웹 퍼블리셔가 되겠습니다. 웹 접근성에 근거한<br />
              마크업으로 소외되는 사람 없이 누구나 쉽고 편하게 사용할 수 있는 웹을 만들겠습니다.
            </p>
            <p className="bio-sub-paragraph">
              평소 자주 이용하던 지역 도서관 앱의 단조롭고 불친절한 UX/UI를 보며, 모두가 이용하는 공공 서비스일수록 사용자의 입장을 더 면밀히 살펴야 한다는 깊은 문제의식을 느꼈습니다. 이는 제가 사용자 중심의 웹을 고민하게<br />된 첫 계기였습니다. '내가 만약 이 페이지를 만든다면 어떻게 바꿀까?'를 고민하던 중, 단순히 보기 좋은 디자인에 머무르지 않고 이를 사용성 높은 화면으로 구현해 내는 실무 역량이 웹 시장에서 얼마나 중요한지 깨달았습니다.
            </p>
            <p className="bio-sub-paragraph">
              저는 이번 프로젝트에서, 변화하는 기술 트렌드를 수용해 AI를 활용한 가설 주도 설계 방식을 적용했습니다.<br />
              가상의 사용자를 설정하고 발생 가능한 불편함과 예외 케이스를 AI로 미리 시뮬레이션함으로써 설계 오류를 획기적으로 줄이고 프로젝트를 안정적으로 완성할 수 있었습니다.
            </p>
          </div>
        </div>

        {/* Bottom Details Grid: Education & Skills/Contact */}
        <div className="about-details-table reveal-item" style={{ '--reveal-delay': '0.53s' }}>
          {/* Left Block: Education */}
          <div className="details-col education-col">
            <div className="details-divider" aria-hidden="true" />
            <div className="details-col-body">
              <h3 className="details-col-title">Education</h3>
              <ul className="details-list">
                <li className="details-item">
                  <span className="item-date">2026. 07</span>
                  <span className="item-value">
                    AI 기반 UI/UX 디지털디자인 및 영상제작 실무자 양성 수료 
                    <span className="item-institute"> - 엠비씨(MBC) 아카데미 컴퓨터교육센터</span>
                  </span>
                </li>
                <li className="details-item">
                  <span className="item-date">2025. 02</span>
                  <span className="item-value">수원여자대학교 시각디자인과 졸업</span>
                </li>
                <li className="details-item">
                  <span className="item-date">2020. 01</span>
                  <span className="item-value">안화고등학교 졸업</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Block: Skills & Contact */}
          <div className="details-col skills-contact-col">
            <div className="details-divider" aria-hidden="true" />
            <div className="details-col-body skills-contact-body">
              {/* Skills Sub-section */}
              <div className="details-group-row">
                <h3 className="details-col-title">Skills</h3>
                <p className="skills-content-text">
                  Photoshop, Illustrator, Figma, Vibe Coding
                </p>
              </div>

              {/* Email Contact Sub-section */}
              <div className="details-group-row">
                <h3 className="details-col-title">Email</h3>
                <p className="contact-email-text">
                  whgus118@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Works Section Container */}
      <section 
        id="works-section" 
        className="works-section scroll-reveal" 
        aria-label="이채연 주요 작업 및 프로젝트 목록"
      >
        <h2 className="works-title reveal-item" style={{ '--reveal-delay': '0.08s' }}>WORKS</h2>

        <div className="works-cards-grid">
          {/* Card 1: 수원시립미술관 */}
          <div className="reveal-item" style={{ '--reveal-delay': '0.23s' }}>
            <div className="work-card">
              <h3 className="work-card-title">수원시립미술관</h3>
              <div className="work-card-img-wrapper">
                <img 
                  src={workSuwonPath} 
                  alt="수원시립미술관 프로젝트 3D 그래픽" 
                  className="work-card-img" 
                />
              </div>
              <div className="work-card-info">
                <span className="work-card-tag">UX/UI</span>
                <p className="work-card-desc">웹 접근성 개선</p>
              </div>
            </div>
          </div>

          {/* Card 2: 하이엔드 조명 레비테 */}
          <div className="reveal-item" style={{ '--reveal-delay': '0.38s' }}>
            <div className="work-card">
              <h3 className="work-card-title">하이엔드 조명 레비테</h3>
              <div className="work-card-img-wrapper">
                <img 
                  src={workLevitePath} 
                  alt="하이엔드 조명 레비테 프로젝트 3D 그래픽" 
                  className="work-card-img" 
                />
              </div>
              <div className="work-card-info">
                <span className="work-card-tag">마이크로 인터랙션</span>
                <p className="work-card-desc">브랜드 홍보 랜딩 페이지</p>
              </div>
            </div>
          </div>

          {/* Card 3: 무드온 AI 대시보드 */}
          <div className="reveal-item" style={{ '--reveal-delay': '0.53s' }}>
            <div className="work-card">
              <h3 className="work-card-title">무드온 AI 대시보드</h3>
              <div className="work-card-img-wrapper">
                <img 
                  src={workMoodonPath} 
                  alt="무드온 AI 대시보드 프로젝트 3D 그래픽" 
                  className="work-card-img" 
                />
              </div>
              <div className="work-card-info">
                <span className="work-card-tag">Open API 연동</span>
                <p className="work-card-desc">사용자 맞춤 페이지</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Contact Section */}
      <section
        className="contact-section scroll-reveal"
        aria-label="이채연 연락처 및 GitHub 링크"
      >
        <div className="contact-inner">
          <h2 className="contact-title reveal-item" style={{ '--reveal-delay': '0.08s' }}>CONTACT</h2>
          <p className="contact-subtitle reveal-item" style={{ '--reveal-delay': '0.2s' }}>
            저에게 궁금한 점이 있으시다면 언제든 연락해 주세요 :)<br />
            확인하는 대로 빠르게 회신드리겠습니다.
          </p>

          <div className="contact-links reveal-item" style={{ '--reveal-delay': '0.35s' }}>
            <a
              href="https://github.com/whgus118"
              className="contact-github-btn"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="이채연 GitHub 프로필 열기"
            >
              <img src={contactGithubPath} alt="GitHub 아이콘" className="contact-github-icon" />
              <span className="contact-github-label">GitHub</span>
            </a>
          </div>

          <div className="contact-email-block reveal-item" style={{ '--reveal-delay': '0.5s' }}>
            <img src={contactCursorPath} alt="" className="contact-cursor-icon" aria-hidden="true" />
            <a href="mailto:whgus118@gmail.com" className="contact-email-link">
              whgus118@gmail.com
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
