import React, { useState, useEffect } from "react";
import ReactECharts from "echarts-for-react";

// Scoring data as per your provided data
const Scoring = {
  mobile: {
    FCP: { auditId: "first-contentful-paint", name: "First Contentful Paint", weight: 0.1, median: 3000, p10: 1800 },
    SI: { auditId: "speed-index", name: "Speed Index", weight: 0.1, median: 5800, p10: 3387 },
    LCP: { auditId: "largest-contentful-paint", name: "Largest Contentful Paint", weight: 0.25, median: 4000, p10: 2500 },
    TBT: { auditId: "total-blocking-time", name: "Total Blocking Time", weight: 0.3, median: 600, p10: 200 },
    CLS: { auditId: "cumulative-layout-shift", name: "Cumulative Layout Shift", units: "unitless", weight: 0.25, median: 0.25, p10: 0.1 },
  },
  desktop: {
    FCP: { auditId: "first-contentful-paint", name: "First Contentful Paint", weight: 0.1, median: 1600, p10: 934 },
    SI: { auditId: "speed-index", name: "Speed Index", weight: 0.1, median: 2300, p10: 1311 },
    LCP: { auditId: "largest-contentful-paint", name: "Largest Contentful Paint", weight: 0.25, median: 2400, p10: 1200 },
    TBT: { auditId: "total-blocking-time", name: "Total Blocking Time", weight: 0.3, median: 350, p10: 150 },
    CLS: { auditId: "cumulative-layout-shift", name: "Cumulative Layout Shift", units: "unitless", weight: 0.25, median: 0.25, p10: 0.1 },
  },
};

const PageSpeedChart = ({ device, metrics }) => {
  const [chartMetrics, setChartMetrics] = useState(metrics || {
    fcp: 1800,
    si: 2400,
    lcp: 3200,
    tbt: 800,
    cls: 0.08,
  });

  useEffect(() => {
    // Update the chart metrics whenever the props change
    setChartMetrics(metrics || {
      fcp: 1800,
      si: 2400,
      lcp: 3200,
      tbt: 800,
      cls: 0.08,
    });
  }, [metrics]);

  const calculateScore = () => {
    const deviceScoring = Scoring[device];
    const scores = Object.keys(deviceScoring).map((key) => {
      const metric = deviceScoring[key];
      const value = chartMetrics[key.toLowerCase()];
      if (typeof value === "undefined" || value === null) return { id: key, score: 0 };

      const score = Math.round(100 * QUANTILE_AT_VALUE(metric, value));
      return { id: key, weight: metric.weight, score: score };
    });

    const totalScore = scores.reduce((total, { score, weight }) => total + score * weight, 0);
    const roundedTotalScore = Math.round(totalScore);

    const chartData = scores.map(({ id, score, weight }) => ({
      value: Math.round(weight * score),
      name: id,
    }));

    if (roundedTotalScore < 100) {
      chartData.push({ name: "none", value: 100 - roundedTotalScore });
    }

    return {
      chartData,
      chartScore: [{ value: roundedTotalScore, name: roundedTotalScore.toString() }],
    };
  };

  const getChartOptions = () => {
    const { chartData, chartScore } = calculateScore();

    return {
      tooltip: {
        trigger: "item",
        formatter: params => {
          if (params.name === "none") return "";
          return `<div style="text-align: center; color:${params.color};">
                    <strong>${params.name}</strong>
                    <hr style="border-color:${params.color};"/>
                    ${params.seriesName}: ${params.name === "CLS" ? params.value / 100 : params.value} <br/>(${params.percent}%)
                  </div>`;
        },
      },
      color: [
        "#dfdfdf",
        "#91cc75",
        "#fac858",
        "#ee6666",
        "#FF8452",
        "#3ba272",
        "#ffffff",
      ],
      legend: {
        data: ["FCP", "SI", "LCP", "TBT", "CLS"],
      },
      series: [
        {
          name: "Performance",
          type: "pie",
          selectedMode: "single",
          radius: [0, "38%"],
          label: {
            position: "center",
            fontSize: 34,
          },
          labelLine: {
            show: false,
          },
          data: chartScore,
        },
        {
          name: "Performance",
          type: "pie",
          radius: ["45%", "60%"],
          label: {
            show: false,
          },
          data: chartData,
        },
      ],
    };
  };

  return (
    <div>
      <ReactECharts
        option={getChartOptions()}
        style={{ width: 400, height: 400 }}
        key={`${device}-${JSON.stringify(chartMetrics)}`} // Key prop to force update
      />
    </div>
  );
};

// Helper functions
const QUANTILE_AT_VALUE = ({ median, p10 }, value) => {
  const t = derivePodrFromP10(median, p10);
  const i = Math.log(median);
  const a = Math.log(t / median);
  const o = Math.sqrt(1 - 3 * a - Math.sqrt((a - 3) * (a - 3) - 8)) / 2;
  return (1 - internalErf_((Math.log(value) - i) / (Math.SQRT2 * o))) / 2;
};

const derivePodrFromP10 = (median, p10) => {
  const n = Math.log(median);
  const r = Math.abs(Math.log(p10) - n) / (0.9061938024368232 * Math.SQRT2);
  const i = -3 * r - Math.sqrt(4 + r * r);
  return Math.exp(n + (r / 2) * i);
};

const internalErf_ = (e) => {
  const t = e < 0 ? -1 : 1;
  const n = 1 / (1 + 0.3275911 * Math.abs(e));
  return (
    t *
    (1 -
      n *
        (0.254829592 +
          n *
            (n * (1.421413741 + n * (1.061405429 * n - 1.453152027)) -
              0.284496736)) *
        Math.exp(-e * e))
  );
};

export default PageSpeedChart;
