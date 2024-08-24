import React, { useState, useRef, useEffect } from "react"

const LanguageSelection = ({ onSelectLanguage }) => {
  const [isDropdownActive, setIsDropdownActive] = useState(false)
  const [selectedLanguage, setSelectedLanguage] = useState({
    code: "en",
    name: "English",
  })
  const languageSelectionBoxRef = useRef(null)

  const languages = [
    { code: "en", name: "English" },
    { code: "hi", name: "Hindi" },
    { code: "in", name: "Indonesian" },
    { code: "kn", name: "Kannada" },
    { code: "ml", name: "Malayalam" },
    { code: "mr", name: "Marathi" },
    { code: "pa", name: "Punjabi" },
    { code: "ta", name: "Tamil" },
    { code: "te", name: "Telugu" },
  ]

  const handleSelectLanguage = language => {
    setSelectedLanguage(language)
    setIsDropdownActive(false)
    onSelectLanguage(language.code)
  }

  useEffect(() => {
    const handleClickOutside = event => {
      if (
        languageSelectionBoxRef.current &&
        !languageSelectionBoxRef.current.contains(event.target)
      ) {
        setIsDropdownActive(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <div
      ref={languageSelectionBoxRef}
      className="country-selection-box"
    >
      <div
        className={`country-select-button ${isDropdownActive ? "active" : ""}`}
        onClick={() => setIsDropdownActive(!isDropdownActive)}
      >
        <span>{selectedLanguage.name}</span>
        <i>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-chevron-down"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
            ></path>
          </svg>
        </i>
      </div>
      {isDropdownActive && (
        <div className="country-search-box">
          <div className="content-country active">
            <ul className="options">
              {languages.map(language => (
                <li
                  key={language.code}
                  className={
                    language.code === selectedLanguage.code ? "selected" : ""
                  }
                  onClick={() => handleSelectLanguage(language)}
                >
                  {language.name}
                </li>
              ))}
            </ul>
          </div>
        </div>  
      )}
    </div>
  )
}

export default LanguageSelection
