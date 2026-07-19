import './SuwonPage.css';

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
    </div>
  );
}

export default SuwonPage;
