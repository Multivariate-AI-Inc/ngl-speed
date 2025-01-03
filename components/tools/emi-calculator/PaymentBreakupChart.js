import React from "react";
import ReactECharts from "echarts-for-react";

const PaymentBreakUpChart = ({ principal = "5000000", totalInterest = "6985673" }) => {
  const getOption = () => {
    return {
      color: ["#ED8C2B", "#82A825", "#F67280"],
      title: {
        text: "Break-up of Total Payment",
        left: "center",
      },
      tooltip: {
        trigger: "item",
        formatter: function (params) {
          const color = params.color;
          const value = parseInt(params.value);
          const total = parseInt(principal) + parseInt(totalInterest);
          // Calculate the percentage
          const percentage = ((value / total) * 100).toFixed(2) + "%";
          return `
            <strong>${params.seriesName}</strong><br/>
            <span style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:${color};"></span>
            ${params.name}:   <strong>${value.toLocaleString()}</strong><br/>
            Percentage:   <strong>${percentage}</strong>
          `;
        },
      },
      legend: {
        orient: "horizontal",
        bottom: true,
      },
      series: [
        {
          name: "EMI Calculator",
          type: "pie",
          radius: "75%",
          data: [
            { value: principal, name: "Total Loan Amount" },
            { value: totalInterest, name: "Total Interest" },
          ],
          label: {
            show: true,
            position: "inside",
            formatter: "{d}%",
          },
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)",
            },
          },
        },
      ],
    };
  };

  return (
    <ReactECharts
      option={getOption()}
      style={{ height: "300px", width: "100%" }}
      onChartReady={(chart) => {
        window.addEventListener("resize", chart.resize);
      }}
    />
  );
};

export default PaymentBreakUpChart;
