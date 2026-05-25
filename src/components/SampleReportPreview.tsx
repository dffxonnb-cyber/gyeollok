"use client";

import { KeyboardEvent, useState } from "react";

type SampleReportId = "temperament" | "career" | "relationship";

type SampleReport = {
  id: SampleReportId;
  label: string;
  shortDescription: string;
  previewTitle: string;
  tags: string[];
  sections: {
    title: string;
    text: string;
  }[];
};

const sampleReports: SampleReport[] = [
  {
    id: "temperament",
    label: "기질 리포트",
    shortDescription: "반복되는 감정 반응과 선택의 결을 읽습니다.",
    previewTitle: "기질 리포트 미리보기",
    tags: ["기질", "감정 반응", "반복 패턴"],
    sections: [
      {
        title: "핵심 기질",
        text: "겉으로는 현실적인 판단을 먼저 하는 것처럼 보여도, 실제 선택의 중심에는 오래 남는 감각과 관계의 온도가 크게 작동합니다.",
      },
      {
        title: "반복되는 패턴",
        text: "중요한 결정을 앞두면 마음이 먼저 과열되고, 이후에는 스스로를 검열하며 다시 차갑게 정리하려는 흐름이 반복될 수 있습니다.",
      },
      {
        title: "조언의 방향",
        text: "결록은 이 흐름을 좋고 나쁨으로 자르지 않고, 어떤 환경에서 더 오래 버틸 수 있는지 선택 가능한 문장으로 정리합니다.",
      },
    ],
  },
  {
    id: "career",
    label: "커리어 리포트",
    shortDescription: "일의 방식, 지속 가능한 역할, 커리어 방향을 정리합니다.",
    previewTitle: "커리어 리포트 미리보기",
    tags: ["커리어", "일의 방식", "방향성"],
    sections: [
      {
        title: "일의 결",
        text: "반복 노동보다 구조를 파악하고 언어로 정리하는 일에서 강점이 살아납니다. 단순히 바쁘게 움직이는 일보다, 흐름을 읽고 의미를 붙이는 역할에 더 잘 맞습니다.",
      },
      {
        title: "주의할 지점",
        text: "성과가 바로 보이지 않는 환경에서는 쉽게 스스로를 의심할 수 있습니다. 따라서 작은 결과물이 자주 확인되는 방식으로 일을 쪼개는 것이 중요합니다.",
      },
      {
        title: "조언의 방향",
        text: "지금 필요한 것은 거창한 확신보다, 실제로 오래 지속 가능한 업무 조건과 피해야 할 환경을 구분하는 일입니다.",
      },
    ],
  },
  {
    id: "relationship",
    label: "관계·궁합 리포트",
    shortDescription: "두 사람의 끌림, 충돌 지점, 관계의 반복 패턴을 봅니다.",
    previewTitle: "관계·궁합 리포트 미리보기",
    tags: ["관계", "궁합", "충돌 지점"],
    sections: [
      {
        title: "관계의 결",
        text: "두 사람은 서로에게 익숙한 안정감과 낯선 긴장감을 동시에 줄 수 있습니다. 그래서 가까워질수록 편안함과 예민함이 함께 올라오는 구조입니다.",
      },
      {
        title: "부딪히는 지점",
        text: "한쪽은 감정을 바로 확인하고 싶어 하고, 다른 한쪽은 감정이 정리될 시간을 필요로 할 수 있습니다. 이 속도 차이가 반복적인 오해로 이어질 수 있습니다.",
      },
      {
        title: "조언의 방향",
        text: "관계의 좋고 나쁨을 단정하기보다, 어디에서 잘 맞고 어디에서 조율이 필요한지 구체적인 장면으로 풀어냅니다.",
      },
    ],
  },
];

export function SampleReportPreview() {
  const [activeReportId, setActiveReportId] =
    useState<SampleReportId>("temperament");

  const activeReport =
    sampleReports.find((report) => report.id === activeReportId) ??
    sampleReports[0];

  function handleTabKeyDown(
    event: KeyboardEvent<HTMLButtonElement>,
    currentIndex: number,
  ) {
    const keyMap: Record<string, number> = {
      ArrowLeft: currentIndex - 1,
      ArrowUp: currentIndex - 1,
      ArrowRight: currentIndex + 1,
      ArrowDown: currentIndex + 1,
      Home: 0,
      End: sampleReports.length - 1,
    };

    const nextIndex = keyMap[event.key];

    if (nextIndex === undefined) {
      return;
    }

    event.preventDefault();
    const boundedIndex =
      (nextIndex + sampleReports.length) % sampleReports.length;
    const nextReport = sampleReports[boundedIndex];

    setActiveReportId(nextReport.id);
    document.getElementById(`sample-tab-${nextReport.id}`)?.focus();
  }

  return (
    <section
      id="sample"
      className="sample-preview-section mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[0.72fr_1fr] lg:items-center lg:px-10"
    >
      <div className="sample-preview-copy">
        <p className="section-kicker">샘플 리포트</p>
        <h2 className="section-title mt-4 text-ink">
          결제 후 받게 될 문서의
          <br />
          밀도를 먼저 확인합니다.
        </h2>
        <p className="mt-6 max-w-xl text-base leading-8 text-muted sm:text-lg">
          리포트 종류를 선택하고, 결제 후 받게 될 문서의 밀도를 먼저 확인해
          보세요.
        </p>

        <div
          className="sample-selector"
          role="tablist"
          aria-label="샘플 리포트 종류 선택"
        >
          {sampleReports.map((report, index) => {
            const isActive = report.id === activeReport.id;

            return (
              <button
                aria-controls="sample-report-panel"
                aria-selected={isActive}
                className="sample-option"
                data-active={isActive}
                id={`sample-tab-${report.id}`}
                key={report.id}
                onClick={() => setActiveReportId(report.id)}
                onKeyDown={(event) => handleTabKeyDown(event, index)}
                role="tab"
                tabIndex={isActive ? 0 : -1}
                type="button"
              >
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{report.label}</strong>
                <small>{report.shortDescription}</small>
              </button>
            );
          })}
        </div>
      </div>

      <article
        aria-labelledby={`sample-tab-${activeReport.id}`}
        className="sample-report"
        id="sample-report-panel"
        role="tabpanel"
        tabIndex={0}
      >
        <div className="sample-watermark" aria-hidden="true">
          SAMPLE
        </div>
        <div className="relative border-b border-archive pb-6">
          <div className="flex flex-wrap items-start justify-between gap-5">
            <div>
              <p className="text-sm font-semibold tracking-[0.22em] text-muted">
                GEOLLOK REPORT
              </p>
              <h3 className="mt-3 text-2xl font-semibold text-ink">
                {activeReport.previewTitle}
              </h3>
              <p className="mt-2 text-sm text-muted">
                익명 / 출생 정보 비공개
              </p>
            </div>
            <p className="rounded-full border border-archive px-4 py-2 text-sm text-muted">
              선택한 샘플
            </p>
          </div>
          <p className="mt-6 max-w-2xl text-base leading-8 text-ink">
            {activeReport.shortDescription} 아래 내용은 전체 리포트가 아닌
            미리보기입니다.
          </p>
          <ul className="sample-tag-list" aria-label="미리보기 태그">
            {activeReport.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        </div>

        <ol className="sample-section-list">
          {activeReport.sections.map((section, index) => (
            <li className="sample-section-item" key={section.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h4>{section.title}</h4>
                <p>{section.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </article>
    </section>
  );
}
