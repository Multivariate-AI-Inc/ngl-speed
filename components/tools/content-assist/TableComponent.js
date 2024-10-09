import React from "react";
const TableComponent = ({ tableData }) => {
  const headers = ["URLs", "Snippet", "Score"]; // Define headers for the table
  return (
    <section className="container">
      {tableData.length !== 0 ?
        <table id="response-table">
          <thead>
            <tr className="base_row">
              <th className="table_cell cell_index__base" colSpan="4">
                Similar Content can be found at..
              </th>
            </tr>
            <tr className="header-row">
              <th className="table_cell cell_index_0">#</th>
              {headers.map((header, index) => (
                <th key={index} className={`table_cell cell_index_${index + 1}`}>
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableData.map((rowData, rowIndex) => (
              <tr
                key={rowIndex}
                className={rowIndex % 2 === 0 ? "respEven_row" : "respOdd_row"}
              >
                <td className="table_cell cell_index_0">{rowIndex + 1}</td>
                <td className="table_cell cell_index_1">
                  <a
                    className="website-link"
                    href={rowData.URLs}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {rowData.URLs}
                  </a>
                </td>
                <td className="table_cell cell_index_2">{rowData.Snippet}</td>
                <td className="table_cell cell_index_3">{rowData.Score}</td>
              </tr>
            ))}
          </tbody>
        </table>
        :
        <p className="font-2xl-bold color-grey-400 text-center">
          No Similar Content Found !!
        </p>
      }
    </section>
  );
};

export default TableComponent;
