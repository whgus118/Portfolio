import { useEffect, useRef, useState } from 'react';
import SuwonPage from './SuwonPage';
import './App.css';
import backgroundPath from './assets/background.jpg';
import memojiPath from './assets/memoji.png';
import workSuwonPath from './assets/work_suwon.png';
import workLevitePath from './assets/work_levite.png';
import workMoodonPath from './assets/work_moodon.png';
import githubLogoPath from './assets/github_logo.png';
import contactCursorPath from './assets/contact_cursor.png';

// ==========================================
// [설정] CONTACT 섹션 에셋 및 데이터 정보 정의
// ==========================================
const CONTACT_CONFIG = {
  githubUrl: "https://github.com/whgus118", // 깃허브 링크 주소
  email: "whgus118@gmail.com",               // 연락받을 이메일 주소
  githubLogo: githubLogoPath,                // 깃허브 원형 로고 이미지 경로
  cursorIcon: contactCursorPath,              // 커서 마우스 포인터 이미지 경로
};

// ==========================================
// MainPage 컴포넌트 (메인 포트폴리오 페이지)
// ==========================================
function MainPage({ onNavigate }) {
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
    let observer;

    // 레이아웃이 끝난 후 스크롤 상태를 측정하기 위해 미세한 지연(150ms) 추가
    const timer = setTimeout(() => {
      const revealSections = document.querySelectorAll('.scroll-reveal');
      if (revealSections.length === 0) return;

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
            } else {
              // 화면에서 벗어나면 visible 클래스를 제거하여 애니메이션 초기화 (스크롤 올렸다가 내릴 때 다시 등장하도록 지원)
              entry.target.classList.remove('visible');
            }
          });
        },
        {
          threshold: 0.15, // Trigger when 15% of the section is visible
        }
      );

      revealSections.forEach((section) => observer.observe(section));
    }, 150);

    return () => {
      clearTimeout(timer);
      if (observer) {
        observer.disconnect();
      }
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
            <div className="work-card" onClick={() => onNavigate('suwon')} style={{ cursor: 'pointer' }}>
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
          <h2 className="contact-title reveal-item" style={{ '--reveal-delay': '0.1s' }}>CONTACT</h2>
          <p className="contact-subtitle reveal-item" style={{ '--reveal-delay': '0.2s' }}>
            저에게 궁금한 점이 있으시다면 언제든 연락해 주세요 :)<br />
            확인하는 대로 빠르게 회신드리겠습니다.
          </p>

            <a
              href={CONTACT_CONFIG.githubUrl}
              className="contact-github-btn reveal-item"
              style={{ '--reveal-delay': '0.3s' }}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="이채연 GitHub 프로필 열기"
            >
              <div className="contact-github-content">
                <img src={CONTACT_CONFIG.githubLogo} alt="GitHub 로고" className="github-logo-img" />
                <div className="github-enter-key-wrapper">
                  <svg width="100%" height="100%" viewBox="0 0 226 226" fill="none" xmlns="http://www.w3.org/2000/svg" className="github-enter-key-svg">
                    <g clipPath="url(#clip0_639_1821)">
                      <foreignObject x="-21.3358" y="-6.27227" width="268.672" height="273.693">
                        <div xmlns="http://www.w3.org/1999/xhtml" style={{ backdropFilter: 'blur(var(--contact-enter-blur, 12.5px))', WebkitBackdropFilter: 'blur(var(--contact-enter-blur, 12.5px))', clipPath: 'url(#bgblur_1_639_1821_clip_path)', height: '100%', width: '100%' }}></div>
                      </foreignObject>
                      <g filter="url(#filter0_d_639_1821)" data-figma-bg-blur-radius="25">
                        <path
                          d="M192.741 207.167C200.708 207.167 207.167 200.708 207.167 192.741V33.259C207.167 25.292 200.708 18.8335 192.741 18.8335H127.426C119.459 18.8335 113 25.292 113 33.259V79.7413C113 87.7083 106.542 94.1668 98.5745 94.1668H33.2589C25.2919 94.1668 18.8334 100.625 18.8334 108.592V192.741C18.8334 200.708 25.2919 207.167 33.2589 207.167H192.741Z"
                          fill="url(#paint0_linear_639_1821)"
                          stroke="var(--contact-enter-stroke-color, rgba(255, 255, 255, 0.15))"
                          strokeWidth="1.5"
                          shapeRendering="crispEdges"
                        />
                      </g>
                      {/* 엔터키 리턴 화살표 */}
                      <path d="M130.598 174.067L143.1 166.373V181.76L130.598 174.067Z" fill="var(--contact-enter-arrow-color, #CDCDCD)"/>
                      <path d="M180.607 166.373V174.067H137.33" stroke="var(--contact-enter-arrow-color, #CDCDCD)" strokeWidth="3.84681" strokeLinecap="round" strokeLinejoin="round"/>
                      {/* GitHub 글자 마스크 벡터 */}
                      <path d="M103.868 134.836C103.223 132.721 101.589 131.431 99.1728 131.431C95.9738 131.431 93.6398 133.929 93.6535 138.405C93.6398 142.922 95.9326 145.435 99.2552 145.435C102.262 145.435 104.17 143.623 104.225 140.794H99.6122V137.966H107.685V140.355C107.685 145.476 104.17 148.648 99.2552 148.648C93.7633 148.648 90.0426 144.735 90.0563 138.433C90.0426 132.048 93.9418 128.218 99.1454 128.218C103.525 128.218 106.916 130.936 107.52 134.836H103.868ZM111.694 148.373V133.463H115.209V148.373H111.694ZM111.447 129.426C111.447 128.383 112.367 127.531 113.479 127.531C114.591 127.531 115.511 128.383 115.511 129.426C115.511 130.483 114.591 131.334 113.479 131.348C112.367 131.334 111.447 130.483 111.447 129.426ZM126.001 133.463V136.154H123.063V143.897C123.063 145.325 123.776 145.613 124.655 145.627C125.067 145.641 125.754 145.6 126.193 145.572V148.428C125.781 148.497 125.108 148.579 124.216 148.565C121.58 148.579 119.548 147.275 119.575 144.474V136.154H117.433V133.463H119.575V129.893H123.063V133.463H126.001ZM129.186 148.373V128.492H132.756V136.922H142.01V128.492H145.607V148.373H142.01V139.915H132.756V148.373H129.186ZM158.65 142.112V133.463H162.137V148.373H158.76V145.737H158.595C157.909 147.398 156.343 148.565 154.119 148.565C151.167 148.565 149.135 146.533 149.122 142.963V133.463H152.636V142.414C152.636 144.309 153.762 145.517 155.465 145.517C157.002 145.517 158.65 144.391 158.65 142.112ZM165.652 148.373V128.492H169.167V135.906H169.304C169.84 134.849 170.924 133.27 173.56 133.27C177.007 133.27 179.725 135.961 179.739 140.931C179.725 145.833 177.089 148.634 173.588 148.648C171.007 148.634 169.853 147.11 169.304 146.011H169.084V148.373H165.652ZM169.084 140.904C169.084 143.815 170.361 145.764 172.599 145.764C174.933 145.764 176.155 143.719 176.169 140.904C176.155 138.131 174.961 136.14 172.599 136.126C170.334 136.14 169.084 138.007 169.084 140.904Z" fill="var(--contact-enter-text-color, white)"/>
                    </g>
                    <defs>
                      <filter id="filter0_d_639_1821" x="-21.3358" y="-6.27227" width="268.672" height="273.693" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dy="20"/>
                        <feGaussianBlur stdDeviation="20"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_639_1821"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_639_1821" result="shape"/>
                      </filter>
                      <clipPath id="bgblur_1_639_1821_clip_path" transform="translate(21.3358 6.27227)">
                        <path d="M192.741 207.167C200.708 207.167 207.167 200.708 207.167 192.741V33.259C207.167 25.292 200.708 18.8335 192.741 18.8335H127.426C119.459 18.8335 113 25.292 113 33.259V79.7413C113 87.7083 106.542 94.1668 98.5745 94.1668H33.2589C25.2919 94.1668 18.8334 100.625 18.8334 108.592V192.741C18.8334 200.708 25.2919 207.167 33.2589 207.167H192.741Z"/>
                      </clipPath>
                      {/* 엔터키 유리 그라디언트 채우기 색상 */}
                      <linearGradient id="paint0_linear_639_1821" x1="52.838" y1="1.60786" x2="197.02" y2="21.9632" gradientUnits="userSpaceOnUse">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <stop stopColor="var(--contact-enter-bg-color, white)" stopOpacity="var(--contact-enter-bg-opacity-start, 0.1)"/>
                        <stop offset="1" stopColor="var(--contact-enter-bg-color, white)" stopOpacity="var(--contact-enter-bg-opacity-end, 0.05)"/>
                      </linearGradient>
                      <clipPath id="clip0_639_1821">
                        <rect width="225.048" height="225.048" fill="white" transform="scale(1.00423)"/>
                      </clipPath>
                    </defs>
                  </svg>
                  <img src={CONTACT_CONFIG.cursorIcon} alt="" className="contact-cursor-icon" aria-hidden="true" />
                </div>
              </div>
            </a>

          <div className="contact-email-block reveal-item" style={{ '--reveal-delay': '0.4s' }}>
            <a href={"mailto:" + CONTACT_CONFIG.email} className="contact-email-link">
              {CONTACT_CONFIG.email}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

// ==========================================
// App 컴포넌트 (라우터 역할)
// ==========================================
function App() {
  const [activePage, setActivePage] = useState(null); // null | 'suwon' | 'levite' | 'moodon'

  // 상세 페이지 활성화 시 뒷배경(메인)의 스크롤을 홀드하여 스냅 및 스크롤 고정
  useEffect(() => {
    if (activePage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [activePage]);

  return (
    <>
      <MainPage onNavigate={setActivePage} />
      {activePage === 'suwon' && (
        <SuwonPage onBack={() => setActivePage(null)} />
      )}
    </>
  );
}

export default App;
