import { toast } from "react-toastify"

const FontTable = ({fonts}) => {

  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text)
      toast.success(`Text copied to clipboard`, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
    } catch (err) {
      console.error("Failed to copy text: ", err)
    }
  }

  const handleCopy = (text) => {
    copyToClipboard(text)
  }

  const hasError = fonts.some(font => font.name === "error" && font.text === "Missing parameters");

  // If there is an error, do not render the table
  if (hasError) {
    return <></>;
  }
  return (
    <section className="container">
      <div className="font_table_outer_box">

        <table className="show-result-table">
          <thead className="table_header_row">
            <tr>
              <th className="font-table-head">Language Names</th>
              <th className="font-table-head" colSpan="2">Unicode letters</th>
            </tr>
          </thead>
          <tbody>
              {fonts.map((font, index) => (
                <tr key={index}>
                <th className="">{font.name}</th>
                <td className="content-cell">{font.text}</td>
                <td style={{textAlign:"center"}}>
                  <button
                    className="copy-clipboard"
                    onClick={() => handleCopy(font.text)}
                  >
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                      width="32px"
                      height="32px"
                      viewBox="0 0 32 32"
                      version="1.1"
                    >
                      <path
                        style={{
                          stroke: "none",
                          fillRule: "nonzero",
                          fill: "rgb(14.901961%,100%,0%)",
                          fillOpacity: 1,
                        }}
                        d="M 7 4 C 6.449219 4 6 4.449219 6 5 L 6 29 C 6 29.550781 6.449219 30 7 30 L 25 30 C 25.550781 30 26 29.550781 26 29 L 26 5 C 26 4.449219 25.550781 4 25 4 L 24 4 C 23.449219 4 23 3.550781 23 3 C 23 2.449219 23.449219 2 24 2 L 25 2 C 26.65625 2 28 3.34375 28 5 L 28 29 C 28 30.65625 26.65625 32 25 32 L 7 32 C 5.34375 32 4 30.65625 4 29 L 4 5 C 4 3.34375 5.34375 2 7 2 L 8 2 C 8.550781 2 9 2.449219 9 3 C 9 3.550781 8.550781 4 8 4 Z M 7 4"
                      />
                      <path
                        style={{
                          stroke: "none",
                          fillRule: "nonzero",
                          fill: "rgb(14.901961%,100%,0%)",
                          fillOpacity: 1,
                        }}
                        d="M 20 1 C 20 0.449219 19.550781 0 19 0 L 13 0 C 12.449219 0 12 0.449219 12 1 C 12 1.550781 11.550781 2 11 2 C 10.449219 2 10 2.449219 10 3 L 10 4 C 10 4.550781 10.449219 5 11 5 L 21 5 C 21.550781 5 22 4.550781 22 4 L 22 3 C 22 2.449219 21.550781 2 21 2 C 20.449219 2 20 1.550781 20 1 Z M 20 1"
                      />
                    </svg>
                    </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default FontTable
