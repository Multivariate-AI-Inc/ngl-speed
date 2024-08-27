import React, { useEffect } from 'react';

const PageSpeedTable = ({ objectData, urls }) => {
  // Merging data for analytics (optional if you need it)
  const mergedData = objectData.reduce((acc, { url, strategy, result }) => {
    const existingEntry = acc.find(entry => entry.url === url);
    if (existingEntry) {
      existingEntry[strategy] = result;
    } else {
      acc.push({ url, [strategy]: result });
    }
    return acc;
  }, []);

  // Optional: Push merged data to dataLayer for analytics
  // useEffect(() => {
  //   window.dataLayer = window.dataLayer || [];
  //   window.dataLayer.push({
  //     event: 'cwv_result',
  //     'gtm.userUrls': urls.join(', '),
  //     'gtm.userData': JSON.stringify(mergedData),
  //     'gtm.uniqueAnalyticsReports': 'AnalyticsPLiveCWV2_nl',
  //   });
  // }, [mergedData, urls]);

  const renderRows = (strategy) =>
    objectData
      .filter(rowData => rowData.strategy === strategy)
      .map((rowData, index) => (
        <tr key={`${strategy}-${index}`} className={`${strategy}_row`}>
          <td className={`${strategy}_URL full_border`}>
            <a href={rowData.url} className="color-info" target="_blank" rel="noopener noreferrer">
              {rowData.url}
            </a>
          </td>
          <td className={`${strategy}_LCP full_border`}>{rowData.LCP}</td>
          <td className={`${strategy}_CLS full_border`}>{rowData.CLS}</td>
          <td className={`${strategy}_INP full_border`}>{rowData.INP}</td>
          <td className={`${strategy}_result full_border`}>{rowData.result}</td>
        </tr>
      ));

  // Add color styles based on the values
  useEffect(() => {
    const addColorONTable = () => {
      const applyColor = (selector, value, thresholds) => {
        const elements = document.querySelectorAll(selector);
        elements.forEach(element => {
          let val = element.innerText.trim();
          let className = 'color-danger';
          if (val !== 'N/A') {
            if (val <= thresholds.green) {
              className = 'color-success';
            } else if (val <= thresholds.yellow) {
              className = 'color-warning';
            } else {
              className = 'color-danger';
            }
          }
          element.classList.add(className);
        });
      };

      applyColor('.desktop_row .desktop_LCP, .mobile_row .mobile_LCP', 'LCP', {
        green: 2500,
        yellow: 4000,
      });

      applyColor('.desktop_row .desktop_CLS, .mobile_row .mobile_CLS', 'CLS', {
        green: 10,
        yellow: 25,
      });

      applyColor('.desktop_row .desktop_INP, .mobile_row .mobile_INP', 'INP', {
        green: 200,
        yellow: 500,
      });

      const resultStyle = document.querySelectorAll('.desktop_row .desktop_result, .mobile_row .mobile_result');
      resultStyle.forEach(element => {
        let value = element.innerText.trim();
        element.classList.add(value === 'Passed' ? 'color-success' : 'color-danger');
      });
    };

    addColorONTable();
  }, [objectData]);

  return (
    <div id="results">
      <table style={{ borderCollapse: 'collapse', width: '100%' }} className="resultCVWTable">
        {/* Mobile Header */}
        <thead>
          <tr className="mobile_header table_header_rows">
            <th style={{ width: '20%' }} className="font-lg-bold color-grey-400" rowSpan={2}>URLs</th>
            <th style={{ width: '20%' }} colSpan={4} className="font-lg-bold color-grey-400">Mobile</th>
          </tr>
          <tr className="header_row table_header_rows">
            <th style={{ width: '20%' }} className="font-md-bold color-grey-400">LCP</th>
            <th style={{ width: '20%' }} className="font-md-bold color-grey-400">CLS</th>
            <th style={{ width: '20%' }} className="font-md-bold color-grey-400">INP</th>
            <th style={{ width: '20%' }} className="font-md-bold color-grey-400">Result</th>
          </tr>
        </thead>
        <tbody>
          {renderRows('mobile')}
        </tbody>

        {/* Desktop Header */}
        <thead>
          <tr className="desktop_header table_header_rows">
            <th style={{ width: '20%' }} className="font-lg-bold color-grey-400" rowSpan={2}>URLs</th>
            <th style={{ width: '20%' }} colSpan={4} className="font-lg-bold color-grey-400">Desktop</th>
          </tr>
          <tr className="header_row table_header_rows">
            <th style={{ width: '20%' }} className="font-md-bold color-grey-400">LCP</th>
            <th style={{ width: '20%' }} className="font-md-bold color-grey-400">CLS</th>
            <th style={{ width: '20%' }} className="font-md-bold color-grey-400">INP</th>
            <th style={{ width: '20%' }} className="font-md-bold color-grey-400">Result</th>
          </tr>
        </thead>
        <tbody>
          {renderRows('desktop')}
        </tbody>

        {/* Bottom Row */}
        <tfoot>
          <tr className="color-grey-400">
            <td colSpan={5}>
              <strong>Note:</strong> All the data for LCP, CLS, and INP is available in milliseconds (ms).
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default PageSpeedTable;
