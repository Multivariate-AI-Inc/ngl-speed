const KeywordsTable = ({data}) => {
//   const data = [{ chat: 4 }, { messenger: 6 }, { "video calling app": 1 }]
console.log('Daata', data);

  // Convert the data to an array of objects with keyword and rank properties
  const formattedData = data.map(item => {
    const [keyword, rank] = Object.entries(item)[0]
    return { keyword, rank }
  })

  const exportToCSV = () => {
    const csvContent =
      "data:text/csv;charset=utf-8," +
      "Keywords,Rank\n" + // Add header row
      formattedData.map(row => `${row.keyword},${row.rank}`).join("\n")

    const encodedUri = encodeURI(csvContent)
    const link = document.createElement("a")
    link.setAttribute("href", encodedUri)
    link.setAttribute("download", "keywords_data.csv")
    document.body.appendChild(link)
    link.click()
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Keywords</th>
            <th>Rank</th>
          </tr>
        </thead>
        <tbody>
          {formattedData.map((row, index) => (
            <tr key={index}>
              <td>{row.keyword}</td>
              <td>{row.rank}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <input
        type="submit"
        value="Export as CSV"
        className="export-btn"
        id="copy-button"
        onClick={exportToCSV}
      />
    </div>
  )
}

export default KeywordsTable
