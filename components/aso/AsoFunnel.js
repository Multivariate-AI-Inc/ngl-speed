import { useEffect, useRef } from 'react';

const AsoFunnel = () => {
  const myChartRef = useRef(null);

  useEffect(() => {
    let myChart = null;

    const initChart = () => {
      const chartScript = document.createElement("script");
      chartScript.src = "https://fastly.jsdelivr.net/npm/echarts@5.3.3/dist/echarts.min.js";
      chartScript.defer = true;
      document.body.appendChild(chartScript);

      chartScript.onload = () => {
        const dom = document.getElementById('chart-container-2');
        if (!dom) return;

        myChart = echarts.init(dom, null, {
          renderer: 'canvas',
          useDirtyRect: false
        });

        myChartRef.current = myChart;

        const data = [
          {
            name: 'Impression',
            children: [
              {
                name: 'Discovery',
                children: [
                  { name: 'Ranks', value: 5 },
                  { name: 'Similar Apps', value: 2 },
                  { name: 'Charts', value: 2 }
                ]
              }
            ]
          },
          {
            name: 'Conversion',
            children: [
              {
                name: 'Listing',
                children: [
                  { name: 'Description', value: 2 },
                  { name: 'Media', value: 3 }
                ]
              }
            ]
          },
          {
            name: 'CTR',
            children: [
              {
                name: 'Brand Image',
                children: [
                  { name: 'Logo', value: 1 },
                  { name: 'Ratings', value: 2 }
                ]
              }
            ]
          }
        ];

        const option = {
          series: {
            type: 'sunburst',
            data: data,
            radius: [0, '90%'],
            label: {
              rotate: 'radial'
            }
          }
        };

        myChart.setOption(option);
        window.addEventListener('resize', myChart.resize);
      };
    };

    initChart();

    return () => {
      if (myChartRef.current) {
        window.removeEventListener('resize', myChartRef.current.resize);
      }
    };
  }, []);

  return (
    <div className="hero-split-2">
      <div className="html-embed-4 w-embed w-script">
        <style>
          {`
            #chart-container-2 {
              position: relative;
              height: 500px;
              width: 500px;
              overflow: hidden;
              margin: auto;
            }
          `}
        </style>
        <div>
          <div id="chart-container-2" _echarts_instance_="ec_1714026135924">
            <div style={{ position: 'relative', width: '500px', height: '500px', padding: '0px', margin: '0px', borderWidth: '0px', cursor: 'default' }}>
              <canvas data-zr-dom-id="zr_0" width="750" height="750" style={{ position: 'absolute', left: '0px', top: '0px', width: '500px', height: '500px', userSelect: 'none', WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)', padding: '0px', margin: '0px', borderWidth: '0px' }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AsoFunnel;
