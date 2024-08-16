import { useEffect, useRef } from 'react';

const Chart = () => {
  const chartContainerRef = useRef(null);
  const myChartRef = useRef(null);

  useEffect(() => {
    let myChart = null;

    const initChart = async () => {
      const chartScript = document.createElement("script");
      chartScript.src = "https://cdn.jsdelivr.net/npm/echarts@5.3.3/dist/echarts.min.js";
      chartScript.defer = true;

      document.body.appendChild(chartScript);
      
      chartScript.onload = () => {
        const dom = chartContainerRef.current;
        if (!dom) return;
        myChart = echarts.init(dom, null, {
          renderer: 'canvas',
          useDirtyRect: false
        });

        myChartRef.current = myChart;

        const data = [
          [0, 0, 5], [0, 1, 1], [0, 2, 0], [0, 3, 0], [0, 4, 0], [0, 5, 0], [0, 6, 0], [0, 7, 0], [0, 8, 0], [0, 9, 0], [0, 10, 0], [0, 11, 2], [0, 12, 4], [0, 13, 1], [0, 14, 1], [0, 15, 3], [0, 16, 4], [0, 17, 6], [0, 18, 4], [0, 19, 4], [0, 20, 3], [0, 21, 3], [0, 22, 2], [0, 23, 5], [1, 0, 7], [1, 1, 0], [1, 2, 0], [1, 3, 0], [1, 4, 0], [1, 5, 0], [1, 6, 0], [1, 7, 0], [1, 8, 0], [1, 9, 0], [1, 10, 5], [1, 11, 2], [1, 12, 2], [1, 13, 6], [1, 14, 9], [1, 15, 11], [1, 16, 6], [1, 17, 7], [1, 18, 8], [1, 19, 12], [1, 20, 5], [1, 21, 5], [1, 22, 7], [1, 23, 2], [2, 0, 1], [2, 1, 1], [2, 2, 0], [2, 3, 0], [2, 4, 0], [2, 5, 0], [2, 6, 0], [2, 7, 0], [2, 8, 0], [2, 9, 0], [2, 10, 3], [2, 11, 2], [2, 12, 1], [2, 13, 9], [2, 14, 8], [2, 15, 10], [2, 16, 6], [2, 17, 5], [2, 18, 5], [2, 19, 5], [2, 20, 7], [2, 21, 4], [2, 22, 2], [2, 23, 4], [3, 0, 7], [3, 1, 3], [3, 2, 0], [3, 3, 0], [3, 4, 0], [3, 5, 0], [3, 6, 0], [3, 7, 0], [3, 8, 1], [3, 9, 0], [3, 10, 5], [3, 11, 4], [3, 12, 7], [3, 13, 14], [3, 14, 13], [3, 15, 12], [3, 16, 9], [3, 17, 5], [3, 18, 5], [3, 19, 10], [3, 20, 6], [3, 21, 4], [3, 22, 4], [3, 23, 1], [4, 0, 1], [4, 1, 3], [4, 2, 0], [4, 3, 0], [4, 4, 0], [4, 5, 1], [4, 6, 0], [4, 7, 0], [4, 8, 0], [4, 9, 2], [4, 10, 4], [4, 11, 4], [4, 12, 2], [4, 13, 4], [4, 14, 4], [4, 15, 14], [4, 16, 12], [4, 17, 1], [4, 18, 8], [4, 19, 5], [4, 20, 3], [4, 21, 7], [4, 22, 3], [4, 23, 0], [5, 0, 2], [5, 1, 1], [5, 2, 0], [5, 3, 3], [5, 4, 0], [5, 5, 0], [5, 6, 0], [5, 7, 0], [5, 8, 2], [5, 9, 0], [5, 10, 4], [5, 11, 1], [5, 12, 5], [5, 13, 10], [5, 14, 5], [5, 15, 7], [5, 16, 11], [5, 17, 6], [5, 18, 0], [5, 19, 5], [5, 20, 3], [5, 21, 4], [5, 22, 2], [5, 23, 0], [6, 0, 1], [6, 1, 0], [6, 2, 0], [6, 3, 0], [6, 4, 0], [6, 5, 0], [6, 6, 0], [6, 7, 0], [6, 8, 0], [6, 9, 0], [6, 10, 1], [6, 11, 0], [6, 12, 2], [6, 13, 1], [6, 14, 3], [6, 15, 4], [6, 16, 0], [6, 17, 0], [6, 18, 0], [6, 19, 0], [6, 20, 1], [6, 21, 2], [6, 22, 2], [6, 23, 6]
        ];
        const maxValue = data.reduce(function (max, item) {
          return Math.max(max, item[2]);
        }, -Infinity);
        const option = {
          legend: {
            data: ["Active Users"],
          },
          polar: {},
          tooltip: {},
          visualMap: {
            type: "continuous",
            min: 0,
            max: maxValue,
            top: "middle",
            dimension: 2,
            calculable: true,
          },
          angleAxis: {
            type: "category",
            data: ["12a", "1a", "2a", "3a", "4a", "5a", "6a", "7a", "8a", "9a", "10a", "11a", "12p", "1p", "2p", "3p", "4p", "5p", "6p", "7p", "8p", "9p", "10p", "11p"],
            boundaryGap: false,
            splitLine: {
              show: true,
              lineStyle: {
                color: "#ddd",
                type: "dashed",
              },
            },
            axisLine: {
              show: false,
            },
          },
          radiusAxis: {
            type: "category",
            data: ["Saturday", "Friday", "Thursday", "Wednesday", "Tuesday", "Monday", "Sunday"],
            z: 100,
          },
          series: [
            {
              name: "Active Users",
              type: "custom",
              coordinateSystem: "polar",
              itemStyle: {
                color: "#d14a61",
              },
              renderItem: function (params, api) {
                var values = [api.value(0), api.value(1)];
                var coord = api.coord(values);
                var size = api.size([1, 1], values);
                return {
                  type: "sector",
                  shape: {
                    cx: params.coordSys.cx,
                    cy: params.coordSys.cy,
                    r0: coord[2] - size[0] / 2,
                    r: coord[2] + size[0] / 2,
                    startAngle: -(coord[3] + size[1] / 2),
                    endAngle: -(coord[3] - size[1] / 2),
                  },
                  style: api.style({
                    fill: api.visual("color"),
                  }),
                };
              },
              data: data,
            },
          ],
        };

        if (option && typeof option === "object") {
          myChart.setOption(option);
        }

        window.addEventListener("resize", myChart.resize);
      };
    };

    initChart();

    return () => {
      if (myChartRef.current) {
        window.removeEventListener("resize", myChartRef.current.resize);
      }
    };
  }, []);

  return (
    <div className="hero-split-2">
      <div className="insideslider w-embed w-script">
        <style>
          {`
            #chart-container-1 {
              position: relative;
              height: 500px;
              width: 500px;
              margin: auto;
              overflow: hidden;
            }
          `}
        </style>
        <div
          ref={chartContainerRef}
          id="chart-container-1"
          _echarts_instance_="ec_1714031297878"
          style={{
            userSelect: "none",
            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
            position: "relative",
          }}
        >
          <div className="insideslider-1"
            style={{
              position: "relative",
              width: "500px",
              height: "500px",
              padding: "0px",
              margin: "0px",
              borderWidth: "0px",
              cursor: "pointer",
              
            }}
          >
            <canvas
              data-zr-dom-id="zr_0"
              width="750"
              height="750"
              style={{
                position: "absolute",
                left: "0px",
                top: "0px",
                width: "100%",
                height: "100%",
                userSelect: "none",
                WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                padding: "0px",
                margin: "0px",
                borderWidth: "0px",
              
              }}
            ></canvas>
          </div>
          {/* Additional elements from the original HTML */}
          <div
            className=""
            style={{
              position: "absolute",
              display: "block",
              borderStyle: "solid",
              whiteSpace: "nowrap",
              zIndex: 9999999,
              boxShadow: "rgba(0, 0, 0, 0.2) 1px 2px 10px",
              transition:
                "opacity 0.2s cubic-bezier(0.23, 1, 0.32, 1) 0s, visibility 0.2s cubic-bezier(0.23, 1, 0.32, 1) 0s, transform 0.4s cubic-bezier(0.23, 1, 0.32, 1) 0s",
              backgroundColor: "rgb(255, 255, 255)",
              borderWidth: "1px",
              borderRadius: "4px",
              color: "rgb(102, 102, 102)",
              font: "14px / 21px 'Microsoft YaHei'",
              padding: "10px",
              top: "0px",
              left: "0px",
              transform: "translate3d(206px, 160px, 0px)",
              borderColor: "rgb(233, 192, 144)",
              pointerEvents: "none",
              visibility: "hidden",
              opacity: "0",
            }}
          >
            <div style={{ margin: "0px 0 0", lineHeight: "1" }}>
              <div
                style={{
                  fontSize: "14px",
                  color: "#666",
                  fontWeight: 400,
                  lineHeight: "1",
                }}
              >
                Active Users
              </div>
              <div style={{ margin: "10px 0 0", lineHeight: "1" }}>
                <div style={{ margin: "0px 0 0", lineHeight: "1" }}>
                  <span
                    style={{
                      display: "inline-block",
                      marginRight: "4px",
                      borderRadius: "10px",
                      width: "10px",
                      height: "10px",
                      backgroundColor: "rgba(233, 192, 144, 1)",
                    }}
                  ></span>
                  <span
                    style={{
                      fontSize: "14px",
                      color: "#666",
                      fontWeight: 400,
                      marginLeft: "2px",
                    }}
                  >
                    Tuesday
                  </span>
                  <span
                    style={{
                      float: "right",
                      marginLeft: "20px",
                      fontSize: "14px",
                      color: "#666",
                      fontWeight: 900,
                    }}
                  >
                    4&nbsp;&nbsp;22&nbsp;&nbsp;3
                  </span>
                  <div style={{ clear: "both" }}></div>
                </div>
                <div style={{ clear: "both" }}></div>
              </div>
              <div style={{ clear: "both" }}></div>
            </div>
          </div>
          {/* End of additional elements */}
        </div>
      </div>
    
    </div>
  );
};

export default Chart;
