import './SuwonPage.css';
import contactCursor from './assets/contact_cursor.png';
import notionLogo from './assets/notion_logo.svg';
import suwonSec2 from './assets/suwon_sec2.png';
import suwonSec3 from './assets/suwon_sec3.png';
import suwonCoverRight from './assets/suwon_cover_right.png';
import suwonVideo from './assets/suwon_01.mp4';

function SuwonPage({ onBack }) {
  return (
    <div className="suwon-page">
      {/* 뒤로가기 버튼 */}
      <div className="suwon-back-btn-wrapper">
        <button className="suwon-back-btn" onClick={onBack} aria-label="포트폴리오 목록으로 돌아가기">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span>WORKS</span>
        </button>
      </div>

      {/* 첫 번째 섹션: 표지 */}
      <section className="suwon-cover">
        {/* 왼쪽 텍스트 영역 */}
        <div className="suwon-cover-left">
          <p className="suwon-cover-eyebrow">
            <span className="suwon-cover-project-num">PROJECT 01</span>
            <span className="suwon-cover-subtitle-text">디지털 취약 계층을 포함한 모두를 위한 직관적인 예약 시스템 개선</span>
          </p>

          <h1 className="suwon-cover-title">
            수원시립미술관<br />UX/UI 웹 접근성 개선
          </h1>

          <dl className="suwon-cover-meta">
            <div className="suwon-meta-row">
              <dt>Period</dt>
              <dd>2026. 03 ~ 05</dd>
            </div>
            <div className="suwon-meta-row">
              <dt>Focus</dt>
              <dd>웹 접근성 &amp; AI 기반 UX 개선</dd>
            </div>
            <div className="suwon-meta-row">
              <dt>My Role</dt>
              <dd>UX/UI 기획 및 퍼블리싱 (기여도 100%)</dd>
            </div>
            <div className="suwon-meta-row">
              <dt>Tech &amp; Tools</dt>
              <dd>Figma, Generative AI (Gemini), Vibe Coding</dd>
            </div>
          </dl>
        </div>

        {/* 오른쪽 모형 이미지 영역 */}
        <div className="suwon-cover-right">
          <div className="suwon-mockup-wrapper">
            {/* 파란 장식 도형 1 (큰 것, 우상단) */}
            <img
              src={suwonSec2}
              alt=""
              className="suwon-deco-img suwon-deco-img-1"
              aria-hidden="true"
            />
            {/* 파란 장식 도형 2 (작은 것, 하단) */}
            <img
              src={suwonSec3}
              alt=""
              className="suwon-deco-img suwon-deco-img-2"
              aria-hidden="true"
            />
            {/* iPhone 목업 */}
            <img
              src={suwonCoverRight}
              alt="수원시립미술관 프로젝트 화면 목업"
              className="suwon-cover-img"
            />
          </div>
        </div>
      </section>

      {/* 두 번째 섹션: 프로젝트 개선 데모 및 Notion 기획서 버튼 */}
      <section className="suwon-section-2">
        <div className="suwon-sec2-inner">
          {/* 좌측 동영상 카드 */}
          <div className="suwon-sec2-video-wrapper">
            <video
              src={suwonVideo}
              className="suwon-sec2-video"
              autoPlay
              loop
              muted
              playsInline
            />
          </div>

            <a
              href="https://www.figma.com/design/giv7zNQhUpbiHessc6bbFq/%EA%B3%B5%EA%B3%B5%EC%82%AC%EC%9D%B4%ED%8A%B8-%EA%B0%9C%EC%84%A0--%EC%95%88%ED%8B%B0%EA%B7%B8%EB%9E%98%EB%B9%84%ED%8B%B0-?"
              className="contact-github-btn reveal-item"
              style={{ '--reveal-delay': '0.3s' }}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Notion 기획서 피그마 파일 열기"
            >
              <div className="contact-github-content">
                <img src={notionLogo} alt="Notion 로고" className="github-logo-img" />
                <div className="github-enter-key-wrapper">
                  <svg width="100%" height="100%" viewBox="0 0 226 226" fill="none" xmlns="http://www.w3.org/2000/svg" className="github-enter-key-svg">
                    <g clipPath="url(#clip_suwon_notion_enter)">
                      <foreignObject x="-21.3358" y="-6.27227" width="268.672" height="273.693">
                        <div xmlns="http://www.w3.org/1999/xhtml" style={{ backdropFilter: 'blur(var(--contact-enter-blur, 12.5px))', WebkitBackdropFilter: 'blur(var(--contact-enter-blur, 12.5px))', clipPath: 'url(#bgblur_suwon_notion_enter_clip_path)', height: '100%', width: '100%' }}></div>
                      </foreignObject>
                      <g filter="url(#filter_suwon_notion_enter)" data-figma-bg-blur-radius="25">
                        <path
                          d="M192.741 207.167C200.708 207.167 207.167 200.708 207.167 192.741V33.259C207.167 25.292 200.708 18.8335 192.741 18.8335H127.426C119.459 18.8335 113 25.292 113 33.259V79.7413C113 87.7083 106.542 94.1668 98.5745 94.1668H33.2589C25.2919 94.1668 18.8334 100.625 18.8334 108.592V192.741C18.8334 200.708 25.2919 207.167 33.2589 207.167H192.741Z"
                          fill="url(#paint_suwon_notion_enter_linear)"
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
                      <filter id="filter_suwon_notion_enter" x="-21.3358" y="-6.27227" width="268.672" height="273.693" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dy="20"/>
                        <feGaussianBlur stdDeviation="20"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_suwon_notion_enter"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_suwon_notion_enter" result="shape"/>
                      </filter>
                      <clipPath id="bgblur_suwon_notion_enter_clip_path" transform="translate(21.3358 6.27227)">
                        <path d="M192.741 207.167C200.708 207.167 207.167 200.708 207.167 192.741V33.259C207.167 25.292 200.708 18.8335 192.741 18.8335H127.426C119.459 18.8335 113 25.292 113 33.259V79.7413C113 87.7083 106.542 94.1668 98.5745 94.1668H33.2589C25.2919 94.1668 18.8334 100.625 18.8334 108.592V192.741C18.8334 200.708 25.2919 207.167 33.2589 207.167H192.741Z"/>
                      </clipPath>
                      {/* 엔터키 유리 그라디언트 채우기 색상 */}
                      <linearGradient id="paint_suwon_notion_enter_linear" x1="52.838" y1="1.60786" x2="197.02" y2="21.9632" gradientUnits="userSpaceOnUse">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <stop stopColor="var(--contact-enter-bg-color, white)" stopOpacity="var(--contact-enter-bg-opacity-start, 0.1)"/>
                        <stop offset="1" stopColor="var(--contact-enter-bg-color, white)" stopOpacity="var(--contact-enter-bg-opacity-end, 0.05)"/>
                      </linearGradient>
                      <clipPath id="clip_suwon_notion_enter">
                        <rect width="225.048" height="225.048" fill="white" transform="scale(1.00423)"/>
                      </clipPath>
                    </defs>
                  </svg>
                  <img src={contactCursor} alt="" className="contact-cursor-icon" aria-hidden="true" />
                </div>
              </div>
            </a>
        </div>
      </section>
    </div>
  );
}

export default SuwonPage;
