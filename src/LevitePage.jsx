import './LevitePage.css';
import leviteCoverRight from './assets/levite_cover_right.png';
import notionLogo from './assets/notion_logo_black.svg';
import githubLogo from './assets/github_logo_black.svg';
import contactCursor from './assets/contact_cursor.png';

function LevitePage({ onBack }) {
  return (
    <div className="levite-page">
      {/* 뒤로가기 버튼 */}
      <div className="levite-back-btn-wrapper">
        <button className="levite-back-btn" onClick={onBack} aria-label="포트폴리오 목록으로 돌아가기">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span>WORKS</span>
        </button>
      </div>

      {/* 첫 번째 섹션: 표지 */}
      <section className="levite-cover">
        {/* 왼쪽 텍스트 영역 */}
        <div className="levite-cover-left">
          <p className="levite-cover-eyebrow">
            <span className="levite-cover-project-num">PROJECT 02</span>
            <span className="levite-cover-subtitle-text">디지털 피로도가 높은 현대인을 위한 바이브 코딩 기반의 몰입형 동적 UX 설계</span>
          </p>

          <h1 className="levite-cover-title">
            <span className="levite-title-sub">하이엔드 감성 조명</span>
            <br />
            <span className="levite-title-main">레비테 랜딩 페이지</span>
          </h1>

          <dl className="levite-cover-meta">
            <div className="levite-meta-row">
              <dt>Period</dt>
              <dd>2026. 05. 18 ~ 05. 22</dd>
            </div>
            <div className="levite-meta-row">
              <dt>Focus</dt>
              <dd>마이크로 인터랙션 설계 &amp; 바이브 코딩 워크플로우 학습</dd>
            </div>
            <div className="levite-meta-row">
              <dt>My Role</dt>
              <dd>UX/UI 기획 및 퍼블리싱 (기여도 100%)</dd>
            </div>
            <div className="levite-meta-row">
              <dt>Tech &amp; Tools</dt>
              <dd>Figma, Generative AI (Gemini), Vibe Coding</dd>
            </div>
          </dl>
        </div>

        {/* 오른쪽 모형 이미지 영역 */}
        <div className="levite-cover-right">
          <div className="levite-mockup-wrapper">
            <img
              src={leviteCoverRight}
              alt="하이엔드 감성 조명 레비테 랜딩 페이지 목업"
              className="levite-cover-img"
            />
          </div>
        </div>
      </section>

      {/* 두 번째 섹션: 프로젝트 살펴보기(Notion) & 깃허브 바로가기 2개 버튼 */}
      <section className="levite-section-2">
        <div className="levite-sec2-inner">
          {/* 1. 좌측 Notion 버튼 (프로젝트 살펴보기) */}
          <a
            href="https://app.notion.com/p/3a29c8547b57802da3c6d0167b3a1302?source=copy_link"
            className="levite-sec2-btn-card reveal-item"
            style={{ '--reveal-delay': '0.2s' }}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="레비테 Notion 기획서 열기"
          >
            <div className="contact-github-btn">
              <div className="contact-github-content">
                <img src={notionLogo} alt="Notion 로고" className="github-logo-img" />
                <div className="github-enter-key-wrapper">
                  <svg width="100%" height="100%" viewBox="0 0 226 226" fill="none" xmlns="http://www.w3.org/2000/svg" className="github-enter-key-svg">
                    <g clipPath="url(#clip_levite_notion_enter)">
                      {/* 엔터키 베이스 패스 (그림자 없음) */}
                      <path
                        d="M192.741 207.167C200.708 207.167 207.167 200.708 207.167 192.741V33.259C207.167 25.292 200.708 18.8335 192.741 18.8335H127.426C119.459 18.8335 113 25.292 113 33.259V79.7413C113 87.7083 106.542 94.1668 98.5745 94.1668H33.2589C25.2919 94.1668 18.8334 100.625 18.8334 108.592V192.741C18.8334 200.708 25.2919 207.167 33.2589 207.167H192.741Z"
                        fill="#4D4D52"
                        shapeRendering="geometricPrecision"
                      />
                      {/* 엔터키 리턴 오렌지 화살표 */}
                      <path d="M130.598 174.067L143.1 166.373V181.76L130.598 174.067Z" fill="url(#levite_orange_arrow_grad)"/>
                      <path d="M180.607 166.373V174.067H137.33" stroke="url(#levite_orange_arrow_grad)" strokeWidth="3.84681" strokeLinecap="round" strokeLinejoin="round"/>
                      {/* Notion 글자 마스크 벡터 */}
                      <path
                        d="M94.2 148.4V128.5H97.7L107.0 143.5V128.5H110.5V148.4H107.0L97.7 133.5V148.4H94.2ZM120.0 133.3C116.1 133.3 113.0 136.7 113.0 141.0C113.0 145.3 116.1 148.7 120.0 148.7C123.9 148.7 127.0 145.3 127.0 141.0C127.0 136.7 123.9 133.3 120.0 133.3ZM120.0 145.5C118.0 145.5 116.5 143.5 116.5 141.0C116.5 138.5 118.0 136.5 120.0 136.5C122.0 136.5 123.5 138.5 123.5 141.0C123.5 143.5 122.0 145.5 120.0 145.5ZM136.0 133.5V136.2H133.1V144.0C133.1 145.4 133.8 145.7 134.7 145.7C135.1 145.7 135.8 145.7 136.2 145.6V148.4C135.8 148.5 135.1 148.6 134.2 148.6C131.6 148.6 129.6 147.3 129.6 144.5V136.2H127.5V133.5H129.6V129.9H133.1V133.5H136.0ZM139.5 148.4V133.5H143.0V148.4H139.5ZM139.3 129.4C139.3 128.4 140.2 127.5 141.3 127.5C142.4 127.5 143.3 128.4 143.3 129.4C143.3 130.5 142.4 131.3 141.3 131.3C140.2 131.3 139.3 130.5 139.3 129.4ZM153.5 133.3C149.6 133.3 146.5 136.7 146.5 141.0C146.5 145.3 149.6 148.7 153.5 148.7C157.4 148.7 160.5 145.3 160.5 141.0C160.5 136.7 157.4 133.3 153.5 133.3ZM153.5 145.5C151.5 145.5 150.0 143.5 150.0 141.0C150.0 138.5 151.5 136.5 153.5 136.5C155.5 136.5 157.0 138.5 157.0 141.0C157.0 143.5 155.5 145.5 153.5 145.5ZM163.5 148.4V133.5H167.0V136.1H167.2C167.8 134.9 169.3 133.3 172.3 133.3C175.2 133.3 177.3 135.3 177.3 138.9V148.4H173.8V139.4C173.8 137.5 172.7 136.3 171.0 136.3C169.4 136.3 167.0 137.5 167.0 140.3V148.4H163.5Z"
                        fill="#FFFFFF"
                      />
                    </g>
                    <defs>
                      <linearGradient id="levite_orange_arrow_grad" x1="130" y1="166" x2="180" y2="182" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#FF992C" />
                        <stop offset="1" stopColor="#FF763D" />
                      </linearGradient>
                      <clipPath id="clip_levite_notion_enter">
                        <rect width="226" height="226" rx="14" fill="white"/>
                      </clipPath>
                    </defs>
                  </svg>
                  <img src={contactCursor} alt="" className="contact-cursor-icon" aria-hidden="true" />
                </div>
              </div>
            </div>
            <p className="levite-sec2-btn-label">프로젝트 살펴보기</p>
          </a>

          {/* 2. 우측 GitHub 버튼 (깃허브 바로가기) */}
          <a
            href="https://github.com/whgus118/Kinetic_Lighting"
            className="levite-sec2-btn-card reveal-item"
            style={{ '--reveal-delay': '0.35s' }}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="레비테 GitHub 저장소 열기"
          >
            <div className="contact-github-btn">
              <div className="contact-github-content">
                <img src={githubLogo} alt="GitHub 로고" className="github-logo-img" />
                <div className="github-enter-key-wrapper">
                  <svg width="100%" height="100%" viewBox="0 0 226 226" fill="none" xmlns="http://www.w3.org/2000/svg" className="github-enter-key-svg">
                    <g clipPath="url(#clip_levite_gh_enter)">
                      {/* 엔터키 베이스 패스 (그림자 없음) */}
                      <path
                        d="M192.741 207.167C200.708 207.167 207.167 200.708 207.167 192.741V33.259C207.167 25.292 200.708 18.8335 192.741 18.8335H127.426C119.459 18.8335 113 25.292 113 33.259V79.7413C113 87.7083 106.542 94.1668 98.5745 94.1668H33.2589C25.2919 94.1668 18.8334 100.625 18.8334 108.592V192.741C18.8334 200.708 25.2919 207.167 33.2589 207.167H192.741Z"
                        fill="#4D4D52"
                        shapeRendering="geometricPrecision"
                      />
                      {/* 엔터키 리턴 오렌지 화살표 */}
                      <path d="M130.598 174.067L143.1 166.373V181.76L130.598 174.067Z" fill="url(#levite_orange_arrow_grad)"/>
                      <path d="M180.607 166.373V174.067H137.33" stroke="url(#levite_orange_arrow_grad)" strokeWidth="3.84681" strokeLinecap="round" strokeLinejoin="round"/>
                      {/* GitHub 글자 마스크 벡터 */}
                      <path
                        d="M103.868 134.836C103.223 132.721 101.589 131.431 99.1728 131.431C95.9738 131.431 93.6398 133.929 93.6535 138.405C93.6398 142.922 95.9326 145.435 99.2552 145.435C102.262 145.435 104.17 143.623 104.225 140.794H99.6122V137.966H107.685V140.355C107.685 145.476 104.17 148.648 99.2552 148.648C93.7633 148.648 90.0426 144.735 90.0563 138.433C90.0426 132.048 93.9418 128.218 99.1454 128.218C103.525 128.218 106.916 130.936 107.52 134.836H103.868ZM111.694 148.373V133.463H115.209V148.373H111.694ZM111.447 129.426C111.447 128.383 112.367 127.531 113.479 127.531C114.591 127.531 115.511 128.383 115.511 129.426C115.511 130.483 114.591 131.334 113.479 131.348C112.367 131.334 111.447 130.483 111.447 129.426ZM126.001 133.463V136.154H123.063V143.897C123.063 145.325 123.776 145.613 124.655 145.627C125.067 145.641 125.754 145.6 126.193 145.572V148.428C125.781 148.497 125.108 148.579 124.216 148.565C121.58 148.579 119.548 147.275 119.575 144.474V136.154H117.433V133.463H119.575V129.893H123.063V133.463H126.001ZM129.186 148.373V128.492H132.756V136.922H142.01V128.492H145.607V148.373H142.01V139.915H132.756V148.373H129.186ZM158.65 142.112V133.463H162.137V148.373H158.76V145.737H158.595C157.909 147.398 156.343 148.565 154.119 148.565C151.167 148.565 149.135 146.533 149.122 142.963V133.463H152.636V142.414C152.636 144.309 153.762 145.517 155.465 145.517C157.002 145.517 158.65 144.391 158.65 142.112ZM165.652 148.373V128.492H169.167V135.906H169.304C169.84 134.849 170.924 133.27 173.56 133.27C177.007 133.27 179.725 135.961 179.739 140.931C179.725 145.833 177.089 148.634 173.588 148.648C171.007 148.634 169.853 147.11 169.304 146.011H169.084V148.373H165.652ZM169.084 140.904C169.084 143.815 170.361 145.764 172.599 145.764C174.933 145.764 176.155 143.719 176.169 140.904C176.155 138.131 174.961 136.14 172.599 136.126C170.334 136.14 169.084 138.007 169.084 140.904Z"
                        fill="#FFFFFF"
                      />
                    </g>
                    <defs>
                      <linearGradient id="levite_orange_arrow_grad" x1="130" y1="166" x2="180" y2="182" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#FF992C" />
                        <stop offset="1" stopColor="#FF763D" />
                      </linearGradient>
                      <clipPath id="clip_levite_gh_enter">
                        <rect width="226" height="226" rx="14" fill="white"/>
                      </clipPath>
                    </defs>
                  </svg>
                  <img src={contactCursor} alt="" className="contact-cursor-icon" aria-hidden="true" />
                </div>
              </div>
            </div>
            <p className="levite-sec2-btn-label">깃허브 바로가기</p>
          </a>
        </div>
      </section>
    </div>
  );
}

export default LevitePage;
