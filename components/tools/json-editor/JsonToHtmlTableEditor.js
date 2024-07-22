import { useState } from 'react';
import Link from 'next/link';
import { toast } from 'react-toastify';

const JsonToHtmlTableEditor = () => {
  const [jsonData, setJsonData] = useState('');
  const [tableData, setTableData] = useState(null);

  const handleSubmit = () => {
    try {
      const parsedData = JSON.parse(jsonData);
      setTableData(parsedData);
    } catch (error) {
      toast.error('Invalid JSON data',{
        autoClose:"2000"
      });
    }
  };

  const createTable = (data) => {
    if (Array.isArray(data)) {
      return (
        <ul>
          {data.map((item, index) => (
            <li key={index}>
              {typeof item === 'object' ? createTable(item) : item}
            </li>
          ))}
        </ul>
      );
    }

    return (
      <table>
        <tbody>
          {Object.entries(data).map(([key, value]) => (
            <tr key={key}>
              <td>{key}</td>
              <td>
                {typeof value === 'object' ? createTable(value) : (
                  <span contentEditable="true">{value}</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  const handleConvertToJson = () => {
    try {
      const table = document.querySelector('#tableContainer > table');
      const data = tableToObject(table);
      console.log(data);
      downloadJSON(data);
      setJsonData(JSON.stringify(data, null, 2));
      toast.success('JSON has been modified and saved into the input box.',{
        autoClose:"2000"
      });
    } catch {
      toast.error('Unable to Edit and Save the Array JSON for now.',{
        autoClose:"2000"
      });
    }
  };

  const tableToObject = (table) => {
    const result = {};
    const rows = table.querySelectorAll('tbody > tr');

    rows.forEach((row) => {
      const keyCell = row.cells[0];
      const valueCell = row.cells[1];

      const key = keyCell.innerText.trim();
      const value = valueCell.querySelector('table')
        ? tableToObject(valueCell.querySelector('table'))
        : valueCell.innerText.trim();

      if (key) {
        result[key] = value;
      }
    });

    return result;
  };

  const downloadJSON = (data) => {
    const blob = new Blob([JSON.stringify(data, null, 2)], {
      type: 'application/json',
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'data.json';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="container" style={{ position: 'relative', top: '4rem' }}>
      <div className="main-head">
        <h4 className="color-brand-1 text-center mt-20">JSON to HTML Table Editor</h4>
      </div>
      <div style={{ borderRight: '1px solid #ccc', borderLeft: '1px solid #ccc', padding: '15px 30px' }}>
        <p className="font-md color-grey-500 text-center">
          "JSON to HTML Table Two-way Editor" is a versatile tool that enables
          easy conversion between JSON data and HTML tables. Users can
          effortlessly transform JSON data into a structured HTML table and edit
          table content interactively. It also allows for the reverse operation,
          converting HTML tables back into JSON format. This tool simplifies
          data presentation and management with its bidirectional editing
          capabilities.
        </p>
      </div>
      <div className="main-div">
        <textarea
          id="editor"
          rows="10"
          cols="50"
          placeholder="Enter JSON data"
          value={jsonData}
          onChange={(e) => setJsonData(e.target.value)}
        />
        <button className="audit-button" style={{ padding: '10px 20px' }} onClick={handleSubmit}>
          Submit
        </button>
        <div id="tableContainer">
          {tableData && createTable(tableData)}
        </div>
        {tableData &&
        <button id="right-float-button" onClick={handleConvertToJson}
        className="audit-button" 
        style={{ padding: '10px 20px' }}  
        >
          Convert Table to JSON
        </button>
        }
      </div>
      <div className="canvas-footer-website">
        <h6>
          Powered by{' '}
          <Link href="https://nextgrowthlabs.com/?utm_source=json_html_table_web#form" target="_blank" rel="noopener" className="utm-link">
            NextGrowth Labs
          </Link>
        </h6>
      </div>
    </div>
  );
};

export default JsonToHtmlTableEditor;
