import { useEffect, useRef } from 'react';
import './MoodonPage.css';
import moodonCoverRight from './assets/moodon_cover_right.png';
import figmaLogo from './assets/figma_logo.svg';
import contactCursor from './assets/contact_cursor.png';

function MoodonPage({ onBack }) {
  const pageRef = useRef(null);

  // 스크롤 시 섹션 2 요소들이 부드럽게 떠오르는 인터랙션
  useEffect(() => {
    let observer;
    const timer = setTimeout(() => {
      const container = pageRef.current;
      if (!container) return;
      const revealSections = container.querySelectorAll('.scroll-reveal');
      if (revealSections.length === 0) return;

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
            } else {
              entry.target.classList.remove('visible');
            }
          });
        },
        {
          root: container,
          threshold: 0.15,
        }
      );

      revealSections.forEach((section) => observer.observe(section));
    }, 150);

    return () => {
      clearTimeout(timer);
      if (observer) observer.disconnect();
    };
  }, []);

  return (
    <div className="moodon-page" ref={pageRef}>
      {/* 뒤로가기 버튼 */}
      <div className="moodon-back-btn-wrapper">
        <button className="moodon-back-btn" onClick={onBack} aria-label="포트폴리오 목록으로 돌아가기">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span>WORKS</span>
        </button>
      </div>

      {/* 첫 번째 섹션: 표지 */}
      <section className="moodon-cover">
        {/* 왼쪽 텍스트 영역 */}
        <div className="moodon-cover-left">
          <p className="moodon-cover-eyebrow">
            <span className="moodon-cover-project-num">PROJECT 03</span>
            <span className="moodon-cover-subtitle-text">사용자의 일상을 함께하는 빠르고 직관적인 개인화 화면 구축</span>
          </p>

          <h1 className="moodon-cover-title">
            <span className="moodon-title-text">무드온(MoodOn)</span>
            <br />
            <span className="moodon-title-text">AI 대시보드</span>
          </h1>

          <dl className="moodon-cover-meta">
            <div className="moodon-meta-row">
              <dt>Period</dt>
              <dd>2026. 05. 22 ~ 05. 24</dd>
            </div>
            <div className="moodon-meta-row">
              <dt>Focus</dt>
              <dd>Open API 연동 &amp; AI 프롬프트 엔지니어링</dd>
            </div>
            <div className="moodon-meta-row">
              <dt>My Role</dt>
              <dd>UX/UI 기획 및 퍼블리싱 (기여도 100%)</dd>
            </div>
            <div className="moodon-meta-row">
              <dt>Tech &amp; Tools</dt>
              <dd>Figma, Weather API, Gemini API, Vibe Coding</dd>
            </div>
          </dl>
        </div>

        {/* 오른쪽 모형 이미지 영역 */}
        <div className="moodon-cover-right">
          <div className="moodon-mockup-wrapper">
            <img
              src={moodonCoverRight}
              alt="무드온 AI 대시보드 인터페이스 화면"
              className="moodon-cover-img"
            />
          </div>
        </div>
      </section>

      {/* 두 번째 섹션: Notion & Figma 바로가기 2개 버튼 */}
      <section className="moodon-section-2 scroll-reveal">
        <div className="moodon-sec2-inner">
          {/* 1. 좌측 Notion 버튼 (프로젝트 살펴보기) */}
          <a
            href="https://app.notion.com/p/MoodOn-AI-3a29c8547b5780539dfef54c876e0bbe?source=copy_link"
            className="suwon-sec3-btn-card reveal-item"
            style={{ '--reveal-delay': '0.15s' }}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="무드온 Notion 기획서 열기"
          >
            <div className="contact-github-btn">
              <div className="contact-github-content">
                <div className="github-logo-img moodon-notion-logo">
                  <svg viewBox="0 0 217 226" fill="none" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                    {/* 외곽 실루엣 — 흰색 배경 */}
                    <path d="M13.6356 9.73879L139.093 0.516919C154.488 -0.807371 158.455 0.0835142 168.148 7.10225L208.187 35.2133C214.794 40.041 217 41.3532 217 46.6263V200.786C217 210.453 213.479 216.16 201.158 217.038L55.4586 225.827C46.2115 226.26 41.811 224.948 36.9644 218.796L7.47485 180.584C2.19423 173.554 0 168.292 0 162.128V25.1006C0 17.203 3.50836 10.6176 13.6356 9.73879Z" fill="white"/>
                    {/* 아이콘 — 검정 */}
                    <path d="M37.4225 39.6076C44.4633 45.314 47.0916 44.8806 60.3052 44.0018L184.87 36.5376C187.522 36.5376 185.316 33.889 184.436 33.4556L163.748 18.5273C159.781 15.4573 154.5 11.9299 144.385 12.8087L23.7628 21.5972C19.3743 22.0306 18.4942 24.2338 20.2424 25.9914L37.4225 39.6076ZM44.8974 68.5975V199.461C44.8974 206.504 48.4178 209.129 56.3508 208.695L193.237 200.786C201.158 200.352 202.038 195.513 202.038 189.794V59.809C202.038 54.1025 199.844 51.0205 194.997 51.466L51.9382 59.809C46.6576 60.2424 44.8974 62.879 44.8974 68.5975ZM180.048 75.6162C180.916 79.565 180.048 83.5258 176.069 83.9713L169.474 85.2835V181.897C163.748 184.979 158.467 186.724 154.066 186.724C147.026 186.724 145.265 184.533 139.985 177.948L96.8356 110.313V175.757L110.495 178.827C110.495 178.827 110.495 186.724 99.4759 186.724L69.1063 188.482C68.2262 186.724 69.1063 182.342 72.1926 181.463L80.1136 179.272V92.7477L69.1063 91.8689C68.2262 87.908 70.4324 82.2016 76.5932 81.7561L109.169 79.565L154.066 148.091V87.4746L142.613 86.1624C141.745 81.3227 145.265 77.8194 149.666 77.3739L180.048 75.6162ZM13.6356 9.73879L139.093 0.516919C154.488 -0.807371 158.455 0.0835142 168.148 7.10225L208.187 35.2133C214.794 40.041 217 41.3532 217 46.6263V200.786C217 210.453 213.479 216.16 201.158 217.038L55.4586 225.827C46.2115 226.26 41.811 224.948 36.9644 218.796L7.47485 180.584C2.19423 173.554 0 168.292 0 162.128V25.1006C0 17.203 3.50836 10.6176 13.6356 9.73879Z" fill="black"/>
                  </svg>
                </div>
                <div className="github-enter-key-wrapper">
                  <svg width="100%" height="100%" viewBox="0 0 226 226" fill="none" xmlns="http://www.w3.org/2000/svg" className="github-enter-key-svg">
                    <g clipPath="url(#clip_moodon_notion_enter)">
                      <path
                        d="M192.741 207.167C200.708 207.167 207.167 200.708 207.167 192.741V33.259C207.167 25.292 200.708 18.8335 192.741 18.8335H127.426C119.459 18.8335 113 25.292 113 33.259V79.7413C113 87.7083 106.542 94.1668 98.5745 94.1668H33.2589C25.2919 94.1668 18.8334 100.625 18.8334 108.592V192.741C18.8334 200.708 25.2919 207.167 33.2589 207.167H192.741Z"
                        fill="#373A43"
                        shapeRendering="geometricPrecision"
                      />
                      {/* 엔터키 리턴 핑크 화살표 */}
                      <path d="M130.598 174.067L143.1 166.373V181.76L130.598 174.067Z" fill="url(#moodon_pink_grad_n)"/>
                      <path d="M180.607 166.373V174.067H137.33" stroke="url(#moodon_pink_grad_n)" strokeWidth="3.84681" strokeLinecap="round" strokeLinejoin="round"/>
                      {/* Notion 글자 마스크 벡터 */}
                      <path
                        d="M94.2 148.4V128.5H97.7L107.0 143.5V128.5H110.5V148.4H107.0L97.7 133.5V148.4H94.2ZM120.0 133.3C116.1 133.3 113.0 136.7 113.0 141.0C113.0 145.3 116.1 148.7 120.0 148.7C123.9 148.7 127.0 145.3 127.0 141.0C127.0 136.7 123.9 133.3 120.0 133.3ZM120.0 145.5C118.0 145.5 116.5 143.5 116.5 141.0C116.5 138.5 118.0 136.5 120.0 136.5C122.0 136.5 123.5 138.5 123.5 141.0C123.5 143.5 122.0 145.5 120.0 145.5ZM136.0 133.5V136.2H133.1V144.0C133.1 145.4 133.8 145.7 134.7 145.7C135.1 145.7 135.8 145.7 136.2 145.6V148.4C135.8 148.5 135.1 148.6 134.2 148.6C131.6 148.6 129.6 147.3 129.6 144.5V136.2H127.5V133.5H129.6V129.9H133.1V133.5H136.0ZM139.5 148.4V133.5H143.0V148.4H139.5ZM139.3 129.4C139.3 128.4 140.2 127.5 141.3 127.5C142.4 127.5 143.3 128.4 143.3 129.4C143.3 130.5 142.4 131.3 141.3 131.3C140.2 131.3 139.3 130.5 139.3 129.4ZM153.5 133.3C149.6 133.3 146.5 136.7 146.5 141.0C146.5 145.3 149.6 148.7 153.5 148.7C157.4 148.7 160.5 145.3 160.5 141.0C160.5 136.7 157.4 133.3 153.5 133.3ZM153.5 145.5C151.5 145.5 150.0 143.5 150.0 141.0C150.0 138.5 151.5 136.5 153.5 136.5C155.5 136.5 157.0 138.5 157.0 141.0C157.0 143.5 155.5 145.5 153.5 145.5ZM163.5 148.4V133.5H167.0V136.1H167.2C167.8 134.9 169.3 133.3 172.3 133.3C175.2 133.3 177.3 135.3 177.3 138.9V148.4H173.8V139.4C173.8 137.5 172.7 136.3 171.0 136.3C169.4 136.3 167.0 137.5 167.0 140.3V148.4H163.5Z"
                        fill="#FFFFFF"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip_moodon_notion_enter">
                        <rect width="226" height="226" rx="14" fill="white"/>
                      </clipPath>
                      <linearGradient id="moodon_pink_grad_n" x1="130" y1="166" x2="181" y2="182" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#FF6BDF"/>
                        <stop offset="1" stopColor="#FF5DBE"/>
                      </linearGradient>
                    </defs>
                  </svg>
                  <img src={contactCursor} alt="" className="contact-cursor-icon" aria-hidden="true" />
                </div>
              </div>
            </div>
            <p className="suwon-sec3-btn-label moodon-btn-label">프로젝트 살펴보기</p>
          </a>

          {/* 2. 우측 Figma 버튼 (피그마 바로가기) */}
          <a
            href="https://www.figma.com/design/8K5e1jxHkyksCuziuga4ao/%EB%8C%80%EC%8B%9C%EB%B3%B4%EB%93%9C?"
            className="suwon-sec3-btn-card reveal-item"
            style={{ '--reveal-delay': '0.35s' }}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="무드온 Figma 디자인 파일 열기"
          >
            <div className="contact-github-btn">
              <div className="contact-github-content">
                <img src={figmaLogo} alt="Figma 로고" className="github-logo-img" />
                <div className="github-enter-key-wrapper">
                  <svg width="100%" height="100%" viewBox="0 0 226 226" fill="none" xmlns="http://www.w3.org/2000/svg" className="github-enter-key-svg">
                    <g clipPath="url(#clip_moodon_figma_enter)">
                      <path
                        d="M192.741 207.167C200.708 207.167 207.167 200.708 207.167 192.741V33.259C207.167 25.292 200.708 18.8335 192.741 18.8335H127.426C119.459 18.8335 113 25.292 113 33.259V79.7413C113 87.7083 106.542 94.1668 98.5745 94.1668H33.2589C25.2919 94.1668 18.8334 100.625 18.8334 108.592V192.741C18.8334 200.708 25.2919 207.167 33.2589 207.167H192.741Z"
                        fill="#373A43"
                        shapeRendering="geometricPrecision"
                      />
                      {/* 엔터키 리턴 핑크 화살표 */}
                      <path d="M130.598 174.067L143.1 166.373V181.76L130.598 174.067Z" fill="url(#moodon_pink_grad_f)"/>
                      <path d="M180.607 166.373V174.067H137.33" stroke="url(#moodon_pink_grad_f)" strokeWidth="3.84681" strokeLinecap="round" strokeLinejoin="round"/>
                      {/* FIGMA 글자 마스크 벡터 */}
                      <path
                        d="M96.0 148.4V128.5H109.0V131.9H99.5V137.0H107.0V140.3H99.5V148.4H96.0ZM113.0 148.4V128.5H116.5V148.4H113.0ZM134.3 134.8C133.7 132.7 132.0 131.4 129.6 131.4C126.4 131.4 124.1 133.9 124.1 138.4C124.1 142.9 126.4 145.4 129.7 145.4C132.7 145.4 134.6 143.6 134.7 140.8H130.1V138.0H138.1V140.4C138.1 145.5 134.6 148.6 129.7 148.6C124.2 148.6 120.5 144.7 120.5 138.4C120.5 132.0 124.4 128.2 129.6 128.2C134.0 128.2 137.4 130.9 138.0 134.8H134.3ZM141.5 148.4V128.5H145.2L150.3 140.5L155.3 128.5H159.0V148.4H155.5V134.0L151.4 143.8H149.1L145.0 134.0V148.4H141.5ZM168.0 128.5H171.0L177.0 148.4H173.3L171.7 143.0H167.3L165.7 148.4H162.0L168.0 128.5ZM169.5 135.0L168.1 139.8H170.9L169.5 135.0Z"
                        fill="#FFFFFF"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip_moodon_figma_enter">
                        <rect width="226" height="226" rx="14" fill="white"/>
                      </clipPath>
                      <linearGradient id="moodon_pink_grad_f" x1="130" y1="166" x2="181" y2="182" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#FF6BDF"/>
                        <stop offset="1" stopColor="#FF5DBE"/>
                      </linearGradient>
                    </defs>
                  </svg>
                  <img src={contactCursor} alt="" className="contact-cursor-icon" aria-hidden="true" />
                </div>
              </div>
            </div>
            <p className="suwon-sec3-btn-label moodon-btn-label">피그마 바로가기</p>
          </a>
        </div>
      </section>
    </div>
  );
}

export default MoodonPage;
