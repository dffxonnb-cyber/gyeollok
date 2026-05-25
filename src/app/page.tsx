import { SampleReportPreview } from "@/components/SampleReportPreview";

const APPLICATION_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSe_CutJ3d_phBNuSay0NcDMC--84Ux9ZnXZiJcrK8LFaPYsRQ/viewform?usp=publish-editor";
const OPEN_CHAT_URL = "https://open.kakao.com/o/ssHr6Cwi";

function getExternalLinkProps(url: string) {
  return {
    href: url,
    target: "_blank",
    rel: "noreferrer",
  } as const;
}

const visualCards = [
  {
    label: "명식",
    kicker: "기록 01",
    description: "태어난 시간의 구조를 차분히 펼칩니다.",
    tone: "ink",
  },
  {
    label: "기질",
    kicker: "기록 02",
    description: "반복되는 감정과 선택의 결을 읽습니다.",
    tone: "moss",
  },
  {
    label: "관계",
    kicker: "기록 03",
    description: "서로 맞물리는 지점과 부딪히는 면을 정리합니다.",
    tone: "clay",
  },
  {
    label: "직업",
    kicker: "기록 04",
    description: "재능이 쓰이는 방식과 일의 흐름을 살핍니다.",
    tone: "navy",
  },
  {
    label: "흐름",
    kicker: "기록 05",
    description: "올해의 질문을 선택 가능한 언어로 바꿉니다.",
    tone: "paper",
  },
  {
    label: "기록",
    kicker: "기록 06",
    description: "한 사람의 질문에 맞춘 문서로 남깁니다.",
    tone: "ink",
  },
];

const supportingCopy = [
  {
    label: "해석",
    text: "좋다, 나쁘다를 넘어서 선택 가능한 언어로 바꿉니다.",
  },
  {
    label: "질문",
    text: "운명을 겁주지 않고, 지금의 질문을 정리합니다.",
  },
  {
    label: "기록",
    text: "명식의 결을 읽고, 삶의 방향을 문장으로 남깁니다.",
  },
];

const trustValues = [
  "질문 기반 해석",
  "보고서형 정리",
  "과장 없는 표현",
  "현실 선택지 중심",
];

const principleCards = [
  {
    title: "단정하지 않기",
    text: "사주를 좋다, 나쁘다로 자르기보다 지금의 질문과 함께 읽습니다.",
  },
  {
    title: "반복되는 결 읽기",
    text: "감정, 관계, 일하는 방식에서 반복되는 흐름을 명식의 구조와 함께 봅니다.",
  },
  {
    title: "선택지로 번역하기",
    text: "추상적인 운세가 아니라 실제로 판단하고 움직일 수 있는 문장으로 정리합니다.",
  },
];

const reportProducts = [
  {
    title: "기질 리포트",
    label: "입문형",
    priceLabel: "첫 오픈 베타가",
    price: "8,200원",
    length: "A4 약 3~5p",
    delivery: "PDF 또는 문서 링크 제공",
    description:
      "내 사주의 핵심 성향, 감정 처리 방식, 관계에서 반복되는 패턴을 정리합니다.",
    bestFor: "나를 설명하는 언어가 필요한 사람",
    marker: "氣",
  },
  {
    title: "커리어 리포트",
    label: "대표 상품",
    priceLabel: "첫 오픈 베타가",
    price: "16,700원",
    length: "A4 약 6~9p",
    delivery: "PDF 또는 문서 링크 제공",
    description:
      "재능 구조, 맞는 직무, 일하는 방식, 올해의 커리어 흐름을 분석합니다.",
    bestFor: "진로·직무·돈 버는 방식이 고민인 사람",
    marker: "業",
    featured: true,
  },
  {
    title: "관계·궁합 리포트",
    label: "관계 분석",
    priceLabel: "첫 오픈 베타가",
    price: "16,700원",
    length: "A4 약 7~10p",
    delivery: "PDF 또는 문서 링크 제공",
    description:
      "두 사람의 결이 어디서 맞물리고 어디서 부딪히는지 보고서형으로 풀이합니다.",
    bestFor: "연애, 가족, 친구, 동업 관계의 흐름을 알고 싶은 사람",
    marker: "緣",
  },
];

const processSteps = [
  {
    title: "정보 입력",
    description: "생년월일, 출생 시간, 출생 지역과 기본 질문을 남깁니다.",
  },
  {
    title: "질문 확인",
    description: "질문의 방향이 흐릿한 경우, 핵심 고민이 무엇인지 먼저 정리합니다.",
  },
  {
    title: "명식 해석",
    description: "오행, 십성, 대운 흐름을 바탕으로 반복되는 결을 읽습니다.",
  },
  {
    title: "리포트 전달",
    description: "해석 결과를 문서형 리포트로 정리해 전달합니다.",
  },
];

const applicationNotes = [
  "생년월일과 가능하다면 출생 시간을 준비합니다.",
  "지금 가장 걸리는 질문을 한 문장으로 남깁니다.",
  "받고 싶은 리포트 종류를 선택합니다.",
];

const questionExamples = [
  "나는 어떤 방식으로 일할 때 오래 버틸 수 있을까?",
  "이 관계가 왜 자꾸 같은 지점에서 부딪힐까?",
  "지금 커리어 방향을 바꾸는 게 맞을까?",
  "내가 반복해서 놓치는 선택의 패턴은 뭘까?",
];

const faqItems = [
  {
    question: "출생 시간을 몰라도 신청할 수 있나요?",
    answer:
      "가능합니다. 다만 출생 시간이 없으면 시주와 일부 세부 해석이 달라질 수 있습니다. 이 경우 리포트에는 ‘출생 시간 미상 기준’이라고 표시하고, 단정이 필요한 부분은 조심스럽게 범위를 조정해 해석합니다.",
  },
  {
    question: "리포트는 어떤 형식으로 받나요?",
    answer:
      "초기에는 PDF 또는 문서 링크 형태로 제공하는 것을 기준으로 합니다. 신청 방식에 따라 이메일, 오픈채팅, 링크 전달 방식으로 조정할 수 있으며, 읽기 편한 문서형 리포트로 정리하는 것을 우선합니다.",
  },
  {
    question: "사주를 잘 몰라도 이해할 수 있나요?",
    answer:
      "네. 결록은 전문 용어를 그대로 늘어놓는 방식보다, 명식의 구조를 일상적인 언어로 번역하는 것을 중요하게 봅니다. 필요한 용어는 짧게 설명하고, 실제 관계와 선택의 장면에 연결해 읽을 수 있도록 구성합니다.",
  },
  {
    question: "결과가 무조건 맞는 건가요?",
    answer:
      "아닙니다. 결록의 리포트는 자기이해와 방향 정리를 위한 참고 자료입니다. 사람의 삶은 명식 하나로만 결정되지 않으며, 중요한 선택은 현실 정보와 본인의 판단을 함께 놓고 결정하는 것이 좋습니다.",
  },
  {
    question: "궁합 리포트는 연애만 가능한가요?",
    answer:
      "아닙니다. 연애뿐 아니라 가족, 친구, 동료, 동업 관계처럼 반복되는 관계 패턴을 보고 싶은 경우에도 신청할 수 있습니다. 관계의 좋고 나쁨을 단정하기보다, 어디서 잘 맞고 어디서 부딪히는지를 중심으로 정리합니다.",
  },
  {
    question: "질문을 어떻게 적어야 할지 모르겠어요.",
    answer:
      "완벽하게 정리된 질문이 아니어도 괜찮습니다. ‘요즘 일이 잘 안 풀리는 이유가 궁금해요’, ‘이 관계가 왜 이렇게 힘든지 알고 싶어요’처럼 지금 가장 걸리는 문장 하나만 남겨도 충분합니다.",
  },
];

function ScrollRisingCards() {
  return (
    <aside
      className="rising-frame"
      aria-label="결록 리포트의 구성 요소가 위로 흐르는 시각 카드"
    >
      <div className="rising-track">
        {[0, 1].map((setIndex) => (
          <div
            className="rising-set"
            key={setIndex}
            aria-hidden={setIndex === 1}
          >
            {visualCards.map((card) => (
              <article
                className={`visual-card visual-card-${card.tone}`}
                key={`${setIndex}-${card.label}`}
              >
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.28em]">
                      {card.kicker}
                    </p>
                    <p className="mt-3 text-3xl font-semibold tracking-normal sm:text-4xl">
                      {card.label}
                    </p>
                  </div>
                  <span className="h-3 w-3 rounded-full border border-current opacity-60" />
                </div>
                <div className="constellation-line" aria-hidden="true" />
                <p className="mt-auto max-w-[18rem] text-sm leading-6 opacity-85">
                  {card.description}
                </p>
              </article>
            ))}
          </div>
        ))}
      </div>
    </aside>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <div className="site-texture">
        <header className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-5 sm:px-8 lg:px-10">
          <a href="#top" className="wordmark" aria-label="결록 홈으로 이동">
            결록
          </a>
          <nav
            className="hidden items-center gap-7 text-sm font-medium text-muted sm:flex"
            aria-label="주요 영역"
          >
            <a className="nav-link" href="#reports">
              리포트
            </a>
            <a className="nav-link" href="#sample">
              샘플
            </a>
            <a className="nav-link" href="#apply">
              신청
            </a>
            <a className="nav-link" href="#faq">
              FAQ
            </a>
          </nav>
        </header>

        <section
          id="top"
          className="mx-auto grid w-full max-w-7xl items-center gap-10 px-5 pb-10 pt-2 sm:px-8 sm:pb-16 lg:grid-cols-[minmax(0,1fr)_minmax(390px,0.78fr)] lg:gap-16 lg:px-10 lg:pb-24 lg:pt-10"
        >
          <div className="max-w-3xl">
            <p className="badge">사주 계산기가 아닌, 질문 기반 사주 리포트</p>
            <h1 className="hero-title mt-6 text-ink">
              <span>당신의 명식에는</span>
              <span>성격보다 오래된</span>
              <span>결이 있습니다.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-muted sm:text-lg sm:leading-9">
              결록은 사주 명식을 바탕으로 기질, 관계, 직업의 흐름을 읽고 한
              사람의 질문에 맞춰 보고서로 정리하는 개인 해석 서비스입니다.
            </p>
            <div className="mt-7 grid grid-cols-2 gap-3 sm:mt-9 sm:flex sm:flex-wrap">
              <a
                className="button-primary"
                {...getExternalLinkProps(APPLICATION_FORM_URL)}
              >
                리포트 신청하기
              </a>
              <a className="button-secondary" href="#sample">
                샘플 리포트 보기
              </a>
            </div>
          </div>

          <ScrollRisingCards />
        </section>

        <section className="px-5 sm:px-8 lg:px-10">
          <div className="value-band mx-auto max-w-7xl">
            {supportingCopy.map((copy, index) => (
              <article className="value-item" key={copy.label}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <p>{copy.label}</p>
                  <strong>{copy.text}</strong>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="why" className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24 lg:px-10">
          <div className="why-shell">
            <div className="why-copy">
              <p className="section-kicker">결록의 관점</p>
              <h2 className="section-title mt-4 text-ink">
                결록은 운세보다
                <br />
                질문을 먼저 봅니다.
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-8 text-muted sm:text-lg">
                좋다, 나쁘다로 단정하기보다 명식 안에 반복되는 기질과 선택의
                방식을 읽고, 지금의 고민에 맞는 현실적인 언어로 정리합니다.
              </p>
            </div>
            <div className="principle-grid">
              {principleCards.map((card, index) => (
                <article className="principle-card" key={card.title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 pb-16 sm:px-8 sm:pb-24 lg:px-10">
          <div className="trust-strip" aria-label="결록 서비스 원칙">
            {trustValues.map((value) => (
              <span key={value}>{value}</span>
            ))}
          </div>
        </section>

        <section
          id="reports"
          className="bg-ink px-5 py-16 text-cream sm:px-8 sm:py-24 lg:px-10"
        >
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <p className="section-kicker text-sand">리포트 메뉴</p>
              <h2 className="section-title mt-4 text-cream">
                질문에 맞춰 깊이가 달라지는
                <br />
                세 가지 기록.
              </h2>
              <p className="pricing-note">
                결록의 리포트 형식과 운영 흐름을 함께 다듬는 초기 가격입니다.
              </p>
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {reportProducts.map((report) => (
                <article
                  className={`report-card ${
                    report.featured ? "report-card-featured" : ""
                  }`}
                  key={report.title}
                >
                  <div className="flex items-start justify-between gap-4">
                    <p className="report-marker" aria-hidden="true">
                      {report.marker}
                    </p>
                    <span className="report-label">{report.label}</span>
                  </div>
                  <h3 className="mt-8 text-2xl font-semibold tracking-normal">
                    {report.title}
                  </h3>
                  <p className="mt-4 text-base leading-7 text-cream/76">
                    {report.description}
                  </p>
                  <div className="report-price-block">
                    <p className="report-price-label">{report.priceLabel}</p>
                    <p className="report-price">{report.price}</p>
                  </div>
                  <dl className="report-details">
                    <div>
                      <dt>분량</dt>
                      <dd>{report.length}</dd>
                    </div>
                    <div>
                      <dt>전달</dt>
                      <dd>{report.delivery}</dd>
                    </div>
                    <div>
                      <dt>추천 대상</dt>
                      <dd>{report.bestFor}</dd>
                    </div>
                  </dl>
                  <a
                    className="report-button"
                    {...getExternalLinkProps(APPLICATION_FORM_URL)}
                  >
                    이 리포트 신청하기
                  </a>
                </article>
              ))}
            </div>
            <div className="custom-report-note">
              <p>
                총정리 리포트를 원하시는 분은 오픈채팅으로 문의해 주세요. 범위가
                넓은 리포트는 신청 전 먼저 방향을 맞춰드립니다.
              </p>
              <a {...getExternalLinkProps(OPEN_CHAT_URL)}>
                총정리 리포트 문의하기
              </a>
            </div>
          </div>
        </section>

        <SampleReportPreview />

        <section
          id="process"
          className="process-section border-y border-archive px-5 py-16 sm:px-8 sm:py-24 lg:px-10"
        >
          <div className="process-shell mx-auto max-w-7xl">
            <div className="process-intro">
              <p className="section-kicker text-sand">진행 방식</p>
              <h2 className="section-title mt-4 text-cream">
                신청은 가볍게,
                <br />
                해석은 깊게 진행됩니다.
              </h2>
              <p className="mt-6 max-w-3xl text-base leading-8 text-cream/72 sm:text-lg">
                처음부터 완벽한 질문을 준비하지 않아도 괜찮습니다. 지금 가장
                걸리는 한 문장을 남기면, 결록은 그 질문을 기준으로 명식의
                흐름을 정리합니다.
              </p>
            </div>

            <ol className="process-timeline">
              {processSteps.map((step, index) => (
                <li className="process-card" key={step.title}>
                  <span className="process-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24 lg:px-10">
          <div className="question-guide">
            <div className="question-guide-copy">
              <p className="section-kicker">질문 예시</p>
              <h2 className="section-title mt-4 text-ink">
                이런 질문으로 시작할 수 있어요.
              </h2>
              <p className="mt-6 max-w-3xl text-base leading-8 text-muted sm:text-lg">
                질문이 완벽하게 정리되어 있지 않아도 괜찮습니다. 지금 가장 오래
                맴도는 문장 하나면 충분합니다. 다만 상황을 조금 더 구체적으로
                적어주실수록 리포트의 깊이도 함께 올라갑니다.
              </p>
            </div>
            <div className="question-card-grid" aria-label="신청 질문 예시">
              {questionExamples.map((question, index) => (
                <article className="question-card" key={question}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <p>{question}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="apply"
          className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24 lg:px-10"
        >
          <div className="apply-panel">
            <div>
              <p className="section-kicker">신청 안내</p>
              <h2 className="section-title mt-4 text-ink">
                지금 필요한 질문 하나부터 남겨주세요.
              </h2>
              <p className="mt-6 max-w-3xl text-base leading-8 text-muted sm:text-lg">
                생년월일과 질문을 남기면, 결록은 명식을 확인한 뒤 질문에 맞는
                문서형 리포트로 정리합니다. 처음부터 완벽한 질문이 아니어도
                괜찮습니다. 지금 가장 걸리는 한 문장만 있으면 됩니다.
              </p>
              <div className="application-hints">
                <p>
                  질문은 디테일하게 적어주실수록 더 깊고 구체적인 조언이
                  가능합니다.
                </p>
                <p>
                  리포트는 신청 내용 확인 후 순차적으로 작성됩니다. 초기 운영
                  기간에는 개별 안내를 기준으로 전달 일정을 조율합니다.
                </p>
              </div>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  className="button-primary"
                  aria-describedby="form-placeholder-note"
                  data-form-placeholder="true"
                  {...getExternalLinkProps(APPLICATION_FORM_URL)}
                >
                  신청 폼 열기
                </a>
                <p
                  id="form-placeholder-note"
                  className="max-w-xl text-sm leading-6 text-muted"
                >
                  신청 버튼을 누르면 Google Form 신청서가 새 창으로 열립니다.
                </p>
              </div>
            </div>
            <ol className="apply-steps" aria-label="신청 전 준비할 내용">
              {applicationNotes.map((note, index) => (
                <li key={note}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <p>{note}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section
          id="faq"
          className="border-y border-archive bg-paper/62 px-5 py-16 sm:px-8 sm:py-24 lg:px-10"
        >
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.58fr_1fr]">
            <div>
              <p className="section-kicker">FAQ</p>
              <h2 className="section-title mt-4 text-ink">
                신청 전에 자주 묻는 질문.
              </h2>
            </div>
            <div className="faq-list">
              {faqItems.map((item) => (
                <details className="faq-card" key={item.question}>
                  <summary>{item.question}</summary>
                  <p>{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16 lg:px-10">
          <div className="notice-panel">
            <p className="text-sm font-semibold tracking-[0.18em] text-clay">
              책임 있는 안내
            </p>
            <p className="mt-4 text-base leading-8 text-ink sm:text-lg">
              결록의 리포트는 자기이해와 방향 정리를 위한 참고 자료입니다.
              의료, 법률, 투자, 생명 관련 결정의 최종 근거로 사용하지
              않습니다.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 pb-16 sm:px-8 sm:pb-24 lg:px-10">
          <div className="final-cta">
            <div>
              <p className="section-kicker">마지막 안내</p>
              <h2 className="final-cta-title">
                지금 가장 오래 맴도는 질문이 있다면
              </h2>
              <p className="mt-5 max-w-3xl text-base leading-8 text-muted sm:text-lg">
                그 질문은 단순한 고민이 아니라, 당신의 명식 안에서 반복되어 온
                결일 수 있습니다. 결록은 그 결을 겁주지 않고, 다시 선택할 수
                있는 문장으로 정리합니다.
              </p>
              <div className="final-cta-notes">
                <p>처음 신청은 가볍게, 질문은 한 문장으로 시작해도 괜찮습니다.</p>
                <p>
                  질문은 디테일하게 적어주실수록 더 깊고 구체적인 조언이
                  가능합니다.
                </p>
                <p>
                  신청 버튼을 누르면 Google Form 신청서가 새 창으로 열립니다.
                </p>
              </div>
            </div>
            <a
              className="final-cta-button"
              {...getExternalLinkProps(APPLICATION_FORM_URL)}
            >
              리포트 신청하기
            </a>
          </div>
        </section>

        <footer className="border-t border-archive px-5 py-8 sm:px-8 lg:px-10">
          <div className="mx-auto flex max-w-7xl flex-col gap-3 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
            <p>© Gyeollok. 명식의 결을 기록하는 곳.</p>
            <p>기질 · 커리어 · 관계 리포트</p>
          </div>
        </footer>
      </div>
    </main>
  );
}
