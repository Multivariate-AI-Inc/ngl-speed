import Link from "next/link"
import React, { useState, useEffect, use } from "react"
import { toast } from "react-toastify"

const stopWords = [
  "in",
  "on",
  "●",
  "-",
  "–",
  "i",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "as",
  "if",
  "or",
  "me",
  "my",
  "myself",
  "we",
  "our",
  "ours",
  "by",
  "ourselves",
  "you",
  "your",
  "yours",
  "yourself",
  "yourselves",
  "he",
  "him",
  "his",
  "himself",
  "she",
  "her",
  "hers",
  "herself",
  "it",
  "its",
  "itself",
  "they",
  "them",
  "their",
  "theirs",
  "themselves",
  "what",
  "which",
  "who",
  "whom",
  "this",
  "that",
  "these",
  "those",
  "am",
  "is",
  "are",
  "was",
  "were",
  "be",
  "been",
  "being",
  "have",
  "has",
  "had",
  "having",
  "do",
  "does",
  "did",
  "doing",
  "an",
  "the",
  "and",
  "but",
  "because",
  "until",
  "while",
  "for",
  "with",
  "about",
  "against",
  "between",
  "into",
  "through",
  "during",
  "before",
  "after",
  "above",
  "below",
  "from",
  "down",
  "out",
  "off",
  "over",
  "under",
  "again",
  "further",
  "then",
  "once",
  "here",
  "when",
  "where",
  "why",
  "how",
  "all",
  "any",
  "both",
  "each",
  "few",
  "more",
  "most",
  "other",
  "some",
  "such",
  "nor",
  "not",
  "only",
  "own",
  "same",
  "so",
  "than",
  "too",
  "very",
  "can",
  "will",
  "just",
  "don",
  "should",
  "now",
  "use",
  "it's",
  "http",
  "https",
  "url",
  "href",
  "iii",
  "vii",
  "viii",
  "xii",
  "xiii",
  "com",
  "net",
  "org",
  "gogo",
  "would",
  "there",
  "much",
  "ltd",
  "nul",
  "null",
  "eula",
  "ins",
  "inc",
  "est",
  "les",
  "qui",
  "des",
  "que",
  "kan",
  "die",
  "het",
  "pas",
  "als",
  "aux",
  "avec",
  "sur",
  "to",
  "of",
]
// remove stop words
function remove_stopWords(words) {
  let res = []
  for (let i = 0; i < words.length; i++) {
    if (!stopWords.includes(words[i])) {
      res.push(words[i])
    }
  }
  return res
}
//   handle kwd with count
function keywordWithCount(word, n, full_length) {
  const repeated = []
  let visited = Array.from({ length: n }, (_, i) => false)
  for (let i = 0; i < n; i++) {
    if (visited[i] == true) continue
    let count = 1
    for (let j = i + 1; j < n; j++) {
      if (word[i] == word[j]) {
        visited[j] = true
        count++
      }
    }
    if (count >= 2) {
      let density = ((count * 100) / full_length).toFixed(1) + "%"
      repeated.push([word[i], count, density])
    }
  }
  let list = []
  for (let k = 0; k < repeated.length; k++) {
    if (repeated[k][0] != "") {
      let key = repeated[k][0],
        den = repeated[k][2],
        count = repeated[k][1]
      for (let l = k + 1; l < repeated.length; l++) {
        if (repeated[k][1] === repeated[l][1]) {
          key += ", " + repeated[l][0]
          repeated[l] = ["", "", ""]
        }
      }
      list.push([key, count, den])
    } else continue
  }
  let sortedArray = list.sort((a, b) => b[1] - a[1])
  let firstElements = sortedArray.map(subArray => subArray[0].split(","))
  let copyText = firstElements.flat()
  return [sortedArray, copyText]
}

const KeywordDensityChecker = () => {
  const [inputValue, setInputValue] = useState("")
  const [characterCount, setCharacterCount] = useState(0)
  const [timeoutId, setTimeoutId] = useState(null)
  const [listItems, setListItems] = useState([])
  const [copyWord, setCopyWord] = useState("")

  useEffect(() => {
    const interval = setInterval(() => {
      setCharacterCount(inputValue.length)
    }, 2000)

    return () => clearInterval(interval)
  }, [inputValue])

  const handleInputChange = event => {
    setInputValue(event.target.value)

    if (timeoutId) {
      clearTimeout(timeoutId)
    }

    const newTimeoutId = setTimeout(() => {
      submit(event.target.value)
    }, 1000)

    setTimeoutId(newTimeoutId)
  }

  //   **** handle Input
  const submit = content => {
    if (content.trim() === "") {
      setListItems([])
      setCopyWord("")
      return
    }
    if (content.includes(" ")) {
      content = content.replace(
        /[.,\/#!$%\^&\*\[\]\\;:{}=_`~()+\<\>\"\'|\n]+/g,
        " ",
      )
      content = content.toLowerCase().split(" ")
      let keywords = content
        .map(item =>
          item.replace(/[.,\/#!$%\^&\*\[\]\\;:{}=_`~()\<\>\"\'\n]+/g, ""),
        )
        .filter(word => word !== "")
      let cleanedKeywords = remove_stopWords(keywords)
      let [items, copy] = keywordWithCount(
        cleanedKeywords,
        cleanedKeywords.length,
        keywords.length,
      )
      setListItems(items)
      setCopyWord(copy)
    } else {
      setListItems([])
      setCopyWord("")
    }
  }
async function copyToClipboard(text) {
    try {
      await navigator.clipboard.writeText(text);
    toast.success(`Text copied to clipboard`, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  }
  return (
    <>
      <section
        className="section"
        style={{ backgroundColor: "#E0F1F4" }}
      >
        <div className="container text-center">
          <div className="row mt-20">
            <p className="tools_tag">Free SEO Tool</p>
            <h1
              className="color-brand-1 mb-25"
              style={{ fontSize: "1.8rem" }}
            >
              Keyword Density Tool
            </h1>
            {/* *************************** */}
            <div className="main-flex">
              <div className="left-side-main">
                <div>
                  <h5 className="title">Enter content below</h5>
                </div>
                <textarea
                  className="textarea"
                  id="text-box"
                  onInput={handleInputChange}
                  onPaste={handleInputChange}
                ></textarea>
                <p
                  id="character"
                  className="total_char"
                >
                  Characters: <span id="char_count">{characterCount}</span>
                </p>
              </div>
              <div className="right-side">
                <div className="right-sub-option">
                  <table className="new-table">
                    <thead>
                      <tr>
                        <th className="first">Keyword</th>
                        <th className="another">Count</th>
                        <th className="another">Density</th>
                      </tr>
                    </thead>
                  </table>
                  <div
                    className="right-sub-option"
                    id="keyword-count-list"
                  >
                    <table className="showTable">
                      <tbody>
                        {listItems.map((emp, index) => (
                          <tr
                            key={index}
                            className={index % 2 === 0 ? "evenRow" : "oddRow"}
                          >
                            {emp.map((text, count) => (
                              <td
                                key={count}
                                className={count === 0 ? "first" : "another"}
                              >
                                {text}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    {listItems.length == 0 &&
                        <p className="no_match">
                      No repeated keywords found (after stopword removal)
                    </p>
                    }
                  </div>
                </div>

                {copyWord.length !== 0 &&
                  <button
                  onClick={()=>copyToClipboard(copyWord)}
                  id="copy-button"
                  >
                    Copy to clipboard
                  </button>
                }
              </div>
            </div>
            {/* *************************** */}
            <div className="mb-20 mt-30">
              <h5>
                Powered by-
                <Link
                  href="https://www.nextgrowthlabs.com/?utm_source=density_counter_web#form"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="utm-link"
                >
                  NextGrowth Lab
                </Link>
              </h5>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default KeywordDensityChecker
