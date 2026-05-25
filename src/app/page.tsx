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
  "좋다, 나쁘다를 넘어서 선택 가능한 언어로 바꿉니다.",
  "운명을 겁주지 않고, 질문을 정리합니다.",
  "명식의 결을 읽고, 삶의 방향을 기록합니다.",
];

const reportCards = [
  {
    title: "기질 리포트",
    description:
      "내 사주의 핵심 성향, 감정 처리 방식, 관계에서 반복되는 패턴을 정리합니다.",
    marker: "氣",
  },
  {
    title: "커리어 리포트",
    description:
      "재능 구조, 맞는 직무, 일하는 방식, 올해의 커리어 흐름을 분석합니다.",
    marker: "業",
  },
  {
    title: "관계·궁합 리포트",
    description:
      "두 사람의 결이 어디서 맞물리고 어디서 부딪히는지 보고서형으로 풀이합니다.",
    marker: "緣",
  },
];

const tableOfContents = [
  "명식 핵심 요약",
  "오행과 십성의 흐름",
  "기질과 관계 패턴",
  "직업·재물 방향",
  "올해의 선택 전략",
];

const processSteps = [
  {
    title: "정보 입력",
    description: "생년월일과 태어난 시간, 현재의 질문을 남깁니다.",
  },
  {
    title: "질문 확인",
    description: "리포트의 초점을 정하고 필요한 맥락을 살핍니다.",
  },
  {
    title: "명식 해석",
    description: "명식 안의 기질, 관계, 직업 흐름을 구조적으로 읽습니다.",
  },
  {
    title: "리포트 전달",
    description: "질문에 맞춘 문서형 리포트를 정돈해 전달합니다.",
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
          <a
            href="#top"
            className="text-xl font-semibold tracking-[-0.01em] text-ink"
            aria-label="결록 홈으로 이동"
          >
            결록
          </a>
          <nav
            className="hidden items-center gap-7 text-sm font-medium text-muted sm:flex"
            aria-label="주요 영역"
          >
            <a className="nav-link" href="#why">
              관점
            </a>
            <a className="nav-link" href="#reports">
              리포트
            </a>
            <a className="nav-link" href="#sample">
              샘플
            </a>
            <a className="nav-link" href="#process">
              진행 방식
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
              <a className="button-primary" href="#reports">
                리포트 신청하기
              </a>
              <a className="button-secondary" href="#sample">
                샘플 리포트 보기
              </a>
            </div>
          </div>

          <ScrollRisingCards />
        </section>

        <section className="border-y border-archive bg-paper/62">
          <div className="mx-auto grid max-w-7xl gap-3 px-5 py-5 sm:px-8 md:grid-cols-3 lg:px-10">
            {supportingCopy.map((copy) => (
              <p
                className="supporting-note text-sm leading-6 text-ink sm:text-base"
                key={copy}
              >
                {copy}
              </p>
            ))}
          </div>
        </section>

        <section
          id="why"
          className="mx-auto grid max-w-7xl gap-8 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[0.72fr_1fr] lg:px-10"
        >
          <div>
            <p className="section-kicker">결록의 관점</p>
            <h2 className="section-title mt-4 text-ink">
              좋고 나쁨보다,
              <br />
              다시 선택할 수 있는 언어.
            </h2>
          </div>
          <div className="why-panel">
            <p className="text-xl leading-9 text-ink sm:text-2xl sm:leading-10">
              결록은 운명을 단정하지 않습니다. 대신 명식 안에 반복되는 기질과
              흐름을 읽고, 지금의 질문에 맞는 현실적인 선택지로 정리합니다.
            </p>
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {["반복되는 결", "현실의 질문", "문서형 해석"].map((item) => (
                <div className="quiet-tile" key={item}>
                  {item}
                </div>
              ))}
            </div>
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
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {reportCards.map((report) => (
                <article className="report-card" key={report.title}>
                  <p className="report-marker" aria-hidden="true">
                    {report.marker}
                  </p>
                  <h3 className="mt-10 text-2xl font-semibold tracking-normal">
                    {report.title}
                  </h3>
                  <p className="mt-5 text-base leading-7 text-cream/76">
                    {report.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="sample"
          className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[0.78fr_1fr] lg:items-center lg:px-10"
        >
          <div>
            <p className="section-kicker">샘플 리포트</p>
            <h2 className="section-title mt-4 text-ink">
              결제 후 받게 될 문서의
              <br />
              구조를 먼저 확인합니다.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-muted sm:text-lg">
              결록의 리포트는 감상문이 아니라 목차와 요약, 해석과 선택 전략이
              구분된 문서입니다.
            </p>
          </div>

          <article className="sample-report" aria-label="샘플 리포트 미리보기">
            <div className="flex flex-wrap items-start justify-between gap-5 border-b border-archive pb-6">
              <div>
                <p className="text-sm font-semibold tracking-[0.22em] text-muted">
                  GEOLLOK REPORT
                </p>
                <h3 className="mt-3 text-2xl font-semibold text-ink">
                  개인 해석 리포트
                </h3>
              </div>
              <p className="rounded-full border border-archive px-4 py-2 text-sm text-muted">
                질문 기반 문서
              </p>
            </div>

            <div className="mt-7 grid gap-7 lg:grid-cols-[0.82fr_1fr]">
              <div>
                <p className="text-sm font-semibold text-muted">질문</p>
                <p className="mt-3 text-xl leading-8 text-ink">
                  지금의 일과 관계에서 반복되는 흐름을 어떻게 읽어야 할까요?
                </p>
              </div>
              <ol className="space-y-3">
                {tableOfContents.map((item, index) => (
                  <li className="toc-item" key={item}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <strong>{item}</strong>
                  </li>
                ))}
              </ol>
            </div>

            <div className="mt-8 grid gap-4 border-t border-archive pt-6 sm:grid-cols-2">
              <div className="document-line">
                <span>기질 요약</span>
                <i aria-hidden="true" />
              </div>
              <div className="document-line">
                <span>선택 전략</span>
                <i aria-hidden="true" />
              </div>
            </div>
          </article>
        </section>

        <section
          id="process"
          className="border-y border-archive bg-paper/70 px-5 py-16 sm:px-8 sm:py-24 lg:px-10"
        >
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-8 lg:grid-cols-[0.7fr_1fr]">
              <div>
                <p className="section-kicker">진행 방식</p>
                <h2 className="section-title mt-4 text-ink">
                  질문을 남기면,
                  <br />
                  문서로 돌아옵니다.
                </h2>
              </div>
              <p className="max-w-3xl text-lg leading-9 text-muted">
                신청자는 생년월일과 질문을 남기고, 결록은 명식을 확인한 뒤
                질문에 맞춰 문서형 리포트를 작성합니다.
              </p>
            </div>

            <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {processSteps.map((step, index) => (
                <li className="process-card" key={step.title}>
                  <span className="process-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-8 text-xl font-semibold text-ink">
                    {step.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-muted">
                    {step.description}
                  </p>
                </li>
              ))}
            </ol>
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
