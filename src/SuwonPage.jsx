import './SuwonPage.css';
import contactCursor from './assets/contact_cursor.png';

const BASE = import.meta.env.BASE_URL;

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
              src={`${BASE}details/suwon_sec2.png`}
              alt=""
              className="suwon-deco-img suwon-deco-img-1"
              aria-hidden="true"
            />
            {/* 파란 장식 도형 2 (작은 것, 하단) */}
            <img
              src={`${BASE}details/suwon_sec3.png`}
              alt=""
              className="suwon-deco-img suwon-deco-img-2"
              aria-hidden="true"
            />
            {/* iPhone 목업 */}
            <img
              src={`${BASE}details/suwon_cover_right.png`}
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
              src={`${BASE}details/suwon_01.mp4`}
              className="suwon-sec2-video"
              autoPlay
              loop
              muted
              playsInline
            />
          </div>

          {/* 우측 Notion 버튼 영역 */}
          <div className="suwon-sec2-notion-area">
            <div className="suwon-notion-btn-group">
              <a
                href="https://www.figma.com/design/giv7zNQhUpbiHessc6bbFq/%EA%B3%B5%EA%B3%B5%EC%82%AC%EC%9D%B4%ED%8A%B8-%EA%B0%9C%EC%84%A0--%EC%95%88%ED%8B%B0%EA%B7%B8%EB%9E%98%EB%B9%84%ED%8B%B0-?"
                target="_blank"
                rel="noopener noreferrer"
                className="suwon-notion-btn"
                aria-label="Notion 기획서 피그마 파일 열기"
              >
                <div className="suwon-notion-btn-content">
                  <div className="suwon-notion-enter-key-wrapper">
                    <svg width="100%" height="100%" viewBox="0 0 226 226" fill="none" xmlns="http://www.w3.org/2000/svg" className="suwon-notion-enter-key-svg">
                      <g clipPath="url(#clip_suwon_notion)">
                        <foreignObject x="-21.3358" y="-6.27227" width="268.672" height="273.693">
                          <div xmlns="http://www.w3.org/1999/xhtml" style={{ backdropFilter: 'blur(12.5px)', WebkitBackdropFilter: 'blur(12.5px)', height: '100%', width: '100%' }}></div>
                        </foreignObject>
                        <g filter="url(#filter_suwon_notion)" data-figma-bg-blur-radius="25">
                          <path
                            d="M192.741 207.167C200.708 207.167 207.167 200.708 207.167 192.741V33.259C207.167 25.292 200.708 18.8335 192.741 18.8335H127.426C119.459 18.8335 113 25.292 113 33.259V79.7413C113 87.7083 106.542 94.1668 98.5745 94.1668H33.2589C25.2919 94.1668 18.8334 100.625 18.8334 108.592V192.741C18.8334 200.708 25.2919 207.167 33.2589 207.167H192.741Z"
                            fill="url(#paint_suwon_notion_linear)"
                            stroke="rgba(255, 255, 255, 0.15)"
                            strokeWidth="1.5"
                            shapeRendering="crispEdges"
                          />
                        </g>
                        {/* 엔터키 리턴 화살표 */}
                        <path d="M130.598 174.067L143.1 166.373V181.76L130.598 174.067Z" fill="#CDCDCD"/>
                        <path d="M180.607 166.373V174.067H137.33" stroke="#CDCDCD" strokeWidth="3.84681" strokeLinecap="round" strokeLinejoin="round"/>
                        {/* Notion 텍스트 (오른쪽 정렬 적용) */}
                        <text
                          x="179.7"
                          y="147"
                          fill="white"
                          textAnchor="end"
                          style={{
                            fontFamily: 'var(--font-primary, Pretendard, -apple-system, sans-serif)',
                            fontSize: '21px',
                            fontWeight: '600',
                            letterSpacing: '-0.04em'
                          }}
                        >
                          Notion
                        </text>
                      </g>
                      <defs>
                        <filter id="filter_suwon_notion" x="-21.3358" y="-6.27227" width="268.672" height="273.693" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                          <feOffset dy="20"/>
                          <feGaussianBlur stdDeviation="20"/>
                          <feComposite in2="hardAlpha" operator="out"/>
                          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"/>
                          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_suwon_notion"/>
                          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_suwon_notion" result="shape"/>
                        </filter>
                        <linearGradient id="paint_suwon_notion_linear" x1="113" y1="18.8335" x2="113" y2="207.167" gradientUnits="userSpaceOnUse">
                          <stop stopColor="white" stopOpacity="0.08"/>
                          <stop offset="1" stopColor="white" stopOpacity="0.02"/>
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </div>
              </a>
              {/* 마우스 커서 데코 */}
              <img src={contactCursor} alt="" className="suwon-sec2-cursor" aria-hidden="true" />
            </div>
            
            {/* 하단 프로젝트 살펴보기 텍스트 */}
            <h2 className="suwon-sec2-caption">프로젝트 살펴보기</h2>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SuwonPage;
