import React from "react"

const TableComponent = ({ tableData }) => {
  return (
    <section className="container">
      <table id="response-table">
        <thead>
          <tr className="base_row">
            <th
              className="table_cell cell_index__base"
              colSpan="4"
            >
              Similar Content can be found at..
            </th>
          </tr>
          <tr className="header-row">
            <th className="table_cell cell_index_0">#</th>
            {tableData[0].map((header, index) => (
              <th
                key={index}
                className={`table_cell cell_index_${index + 1}`}
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableData.slice(1).map((rowData, rowIndex) => (
            <tr
              key={rowIndex}
              className={rowIndex % 2 === 0 ? "respEven_row" : "respOdd_row"}
            >
              <td className="table_cell cell_index_0">{rowIndex + 1}</td>
              {rowData.map((cellData, cellIndex) => (
                <td
                  key={cellIndex}
                  className={`table_cell cell_index_${cellIndex + 1}`}
                >
                  {cellIndex === 0 ? (
                    <a
                      className="website-link"
                      href={cellData}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {cellData}
                    </a>
                  ) : (
                    cellData
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}

export default TableComponent
