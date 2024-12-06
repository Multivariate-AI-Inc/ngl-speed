import React, { useState, useEffect } from "react"
import FontTable from "./FontTable"

const FontChanger = () => {
  const [input, setInput] = useState("NextGrowthLabs")
  const [debouncedInput, setDebouncedInput] = useState(input);
  const [fonts, setFonts] = useState([])

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedInput(input);
    }, 300);

    return () => {
      clearTimeout(handler);
    };
  }, [input]);

  useEffect(() => {
    const fetchFonts = async () => {
      try {
        const requestOptions = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ input: debouncedInput }),
        };
        const response = await fetch("/api/fetch-font", requestOptions);
        const data = await response.json();
        const formattedFonts = Object.entries(data).map(([name, text]) => ({
          name,
          text,
        }));

        setFonts(formattedFonts);
      } catch (error) {
        console.error("Failed to fetch fonts: ", error);
      }
    };

    if (debouncedInput) {
      fetchFonts();
    }
  }, [debouncedInput]);

  return (
    <section className="mt-90">
      <div
        className="container"
        style={{ border: "1px solid #ccc", borderRadius: "10px" }}
      >
        <div className="mt-20">
          <h1 className="font-4xl-bold color-brand-1 text-center">Font Changer</h1>
        </div>
        <div className="input-buttons">
          <input
            type="text"
            name="user_data"
            id="user_data"
            placeholder="Type Something"
            value={input}
            onChange={e => setInput(e.target.value)}
          />
        </div>
        <div>{fonts.length !== 0 && <FontTable fonts={fonts} />}</div>
        <div className="tool-introduction-text mb-10">
          <h5 className="color-brand-1 mb-25">
            What is a unicode letter generator?
          </h5>
          <p className="color-grey-400 mb-20">
            This tool is designed to convert your regular Latin letters into
            fancy, stylish, and extraordinary Unicode letters using a variety of
            fonts. When using this tool, it scans the input text for specific
            characters and replaces them with corresponding Unicode letters. The
            fonts used in this tool consist of symbols from various Unicode
            blocks, each representing a specific range of code points. These
            Unicode blocks are commonly utilized in modern and ancient
            languages, as well as in diverse fields such as mathematics,
            geometry, decorative typesetting, and phonetics.
          </p>
          <p className="color-grey-400 mb-20">
            You have access to a wide range of fonts to choose from, including
            "Fullwidth Letters," "Mathematics Bold Letters," "Monospace
            Letters," "Sans-serif Letters," and many more. Some fonts are
            created by combining characters.
          </p>
          <p className="color-grey-400 mb-20">
            Additionally, this tool offers a selection of unique fonts that
            feature peculiar Unicode glyphs resembling regular letters. For
            example, the letter "A" is represented as "ል" and "B" is represented
            as "乃". You can switch between 32 different fonts or choose to
            generate all of them simultaneously by selecting the "Use All Fonts
            At Once" option. Furthermore, you can enable the randomization mode,
            which randomly assigns a different font to each letter.
          </p>
          <p className="color-grey-400 mb-20">
            If you prefer to exclude non-letter characters from the output, you
            can activate the output filter. This feature automatically removes
            numbers, punctuation marks, and other symbols that do not belong to
            the alphabet. Enjoy transforming your text into captivating and
            visually appealing Unicode letters with this versatile tool!
          </p>
        </div>
      </div>
    </section>
  )
}

export default FontChanger
