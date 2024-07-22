export const runtime = "edge"
export default async function handler(req) {
  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { "Content-Type": "application/json" },
    })
  }
  const { input } = await req.json()
  if (!input) {
    return new Response(JSON.stringify({ error: "Missing parameters" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    })
  }
  try {
    const data = fetchFontsAPI(input)
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    })
  } catch (error) {
    console.error("Error fetching fonts APIs:", error)
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    })
  }
}

function fetchFontsAPI(text) {
  const circleText = convertToEmptyCircle(text)
  const filledCircle = convertToFilledCircle(text)
  const mathBold = convertToMathBold(text)
  const mathBoldFraktur = convertToMathBoldFraktur(text)
  const mathFraktur = convertToMathFraktur(text)
  const mathBoldItalic = convertToMathBoldItalic(text)
  const mathBoldScript = convertToMathBoldScript(text)
  const mathDoubleStruck = convertToMathDoubleStruck(text)
  const mathSans = convertToMathSans(text)
  const mathSansBold = convertToMathSansBold(text)
  const mathSansBoldItalic = convertToMathSansBoldItalic(text)
  const mathSansItalic = convertToMathSansItalic(text)
  const mathScript = convertToMathScript(text)
  const parenthesized = convertToParenthesized(text)
  const regionalIndicator = convertToRegionalIndicator(text)
  const square = convertToSquare(text)
  const filledSquare = convertToFilledSquare(text)
  const aCutePseudoAlphabet = convertToACutePseudoAlphabet(text)
  const cjkThaiPseudoAlphabet = convertToCJKThaiPseudoAlphabet(text)
  const curvy1PseudoAlphabet = convertToCurvy1PseudoAlphabet(text)
  const curvy2PseudoAlphabet = convertToCurvy2PseudoAlphabet(text)
  const curvy3PseudoAlphabet = convertToCurvy3PseudoAlphabet(text)
  const fauxCyrillicPseudoAlphabet = convertToFauxCyrillicPseudoAlphabet(text)
  const fauxEthiopicPseudoAlphabet = convertToFauxEthiopicPseudoAlphabet(text)
  const rockDotsPseudoAlphabet = convertToRockDotsPseudoAlphabet(text)
  const smallCapsPseudoAlphabet = convertToSmallCapsPseudoAlphabet(text)
  const strokedPseudoAlphabet = convertToStrokedPseudoAlphabet(text)
  const subscriptPseudoAlphabet = convertToSubscriptPseudoAlphabet(text)
  const superscriptPseudoAlphabet = convertToSuperscriptPseudoAlphabet(text)
  const invertedPseudoAlphabet = convertToInvertedPseudoAlphabet(text)
  const reversedPseudoAlphabet = convertToReversedPseudoAlphabet(text)

  // Create the object with the converted values
  const convertedObject = {
    Circled: circleText,
    "Filled Circle": filledCircle,
    "Math Bold": mathBold,
    "Math Bold Fraktur": mathBoldFraktur,
    "Math Fraktur": mathFraktur,
    "Math Bold Italic": mathBoldItalic,
    "Math Bold Script": mathBoldScript,
    "Math Double Struck": mathDoubleStruck,
    "Math Sans": mathSans,
    "Math Sans Bold": mathSansBold,
    "Math Sans Bold Italic": mathSansBoldItalic,
    "Math Sans Italic": mathSansItalic,
    "Math Script": mathScript,
    Parenthesized: parenthesized,
    "Regional Indicator": regionalIndicator,
    Square: square,
    "Filled Square": filledSquare,
    "A-cute Pseudo Alphabet": aCutePseudoAlphabet,
    "CJK+Thai Pseudo Alphabet": cjkThaiPseudoAlphabet,
    "Curvy 1 Pseudo Alphabet": curvy1PseudoAlphabet,
    "Curvy 2 Pseudo Alphabet": curvy2PseudoAlphabet,
    "Curvy 3 Pseudo Alphabet": curvy3PseudoAlphabet,
    "Faux Cyrillic Pseudo Alphabet": fauxCyrillicPseudoAlphabet,
    "Faux Ethiopic Pseudo Alphabet": fauxEthiopicPseudoAlphabet,
    "Rock Dots Pseudo Alphabet": rockDotsPseudoAlphabet,
    "Small Caps Pseudo Alphabet": smallCapsPseudoAlphabet,
    "Stroked Pseudo Alphabet": strokedPseudoAlphabet,
    "Subscript Pseudo Alphabet": subscriptPseudoAlphabet,
    "Superscript Pseudo Alphabet": superscriptPseudoAlphabet,
    "Inverted Pseudo Alphabet": invertedPseudoAlphabet,
    "Reversed Pseudo Alphabet": reversedPseudoAlphabet,
  }

  // Return the object to the frontend
  return convertedObject
}

// convert to empty circle font
function convertToEmptyCircle(text) {
  let mappings = {
    a: "ⓐ",
    b: "ⓑ",
    c: "ⓒ",
    d: "ⓓ",
    e: "ⓔ",
    f: "ⓕ",
    g: "ⓖ",
    h: "ⓗ",
    i: "ⓘ",
    j: "ⓙ",
    k: "ⓚ",
    l: "ⓛ",
    m: "ⓜ",
    n: "ⓝ",
    o: "ⓞ",
    p: "ⓟ",
    q: "ⓠ",
    r: "ⓡ",
    s: "ⓢ",
    t: "ⓣ",
    u: "ⓤ",
    v: "ⓥ",
    w: "ⓦ",
    x: "ⓧ",
    y: "ⓨ",
    z: "ⓩ",
    A: "Ⓐ",
    B: "Ⓑ",
    C: "Ⓒ",
    D: "Ⓓ",
    E: "Ⓔ",
    F: "Ⓕ",
    G: "Ⓖ",
    H: "Ⓗ",
    I: "Ⓘ",
    J: "Ⓙ",
    K: "Ⓚ",
    L: "Ⓛ",
    M: "Ⓜ",
    N: "Ⓝ",
    O: "Ⓞ",
    P: "Ⓟ",
    Q: "Ⓠ",
    R: "Ⓡ",
    S: "Ⓢ",
    T: "Ⓣ",
    U: "Ⓤ",
    V: "Ⓥ",
    W: "Ⓦ",
    X: "Ⓧ",
    Y: "Ⓨ",
    Z: "Ⓩ",
    0: "⓪",
    1: "①",
    2: "②",
    3: "③",
    4: "④",
    5: "⑤",
    6: "⑥",
    7: "⑦",
    8: "⑧",
    9: "⑨",
    "+": "⊕",
    "-": "⊖",
    "*": "⊛",
    "/": "⊘",
    "=": "⊜",
  }

  let convertedText = ""
  for (let i = 0; i < text.length; i++) {
    const char = text[i]
    if (mappings.hasOwnProperty(char)) {
      convertedText += mappings[char]
    } else {
      convertedText += char
    }
  }
  return convertedText
}

// convert to filled circle
function convertToFilledCircle(text) {
  let mappings = {
    a: "🅐",
    b: "🅑",
    c: "🅒",
    d: "🅓",
    e: "🅔",
    f: "🅕",
    g: "🅖",
    h: "🅗",
    i: "🅘",
    j: "🅙",
    k: "🅚",
    l: "🅛",
    m: "🅜",
    n: "🅝",
    o: "🅞",
    p: "🅟",
    q: "🅠",
    r: "🅡",
    s: "🅢",
    t: "🅣",
    u: "🅤",
    v: "🅥",
    w: "🅦",
    x: "🅧",
    y: "🅨",
    z: "🅩",
    A: "🅐",
    B: "🅑",
    C: "🅒",
    D: "🅓",
    E: "🅔",
    F: "🅕",
    G: "🅖",
    H: "🅗",
    I: "🅘",
    J: "🅙",
    K: "🅚",
    L: "🅛",
    M: "🅜",
    N: "🅝",
    O: "🅞",
    P: "🅟",
    Q: "🅠",
    R: "🅡",
    S: "🅢",
    T: "🅣",
    U: "🅤",
    V: "🅥",
    W: "🅦",
    X: "🅧",
    Y: "🅨",
    Z: "🅩",
    0: "⓿",
    1: "①",
    2: "②",
    3: "③",
    4: "④",
    5: "⑤",
    6: "⑥",
    7: "⑦",
    8: "⑧",
    9: "⑨",
    "+": "⊕",
    "-": "⊖",
    "*": "⊛",
    "/": "⊘",
    "=": "⊜",
  }
  let convertedText = ""
  for (let i = 0; i < text.length; i++) {
    const character = text[i]
    convertedText += character in mappings ? mappings[character] : character
  }
  return convertedText
}

// convert to mathbold
function convertToMathBold(text) {
  let mappings = {
    a: "𝐚",
    b: "𝐛",
    c: "𝐜",
    d: "𝐝",
    e: "𝐞",
    f: "𝐟",
    g: "𝐠",
    h: "𝐡",
    i: "𝐢",
    j: "𝐣",
    k: "𝐤",
    l: "𝐥",
    m: "𝐦",
    n: "𝐧",
    o: "𝐨",
    p: "𝐩",
    q: "𝐪",
    r: "𝐫",
    s: "𝐬",
    t: "𝐭",
    u: "𝐮",
    v: "𝐯",
    w: "𝐰",
    x: "𝐱",
    y: "𝐲",
    z: "𝐳",
    A: "𝐀",
    B: "𝐁",
    C: "𝐂",
    D: "𝐃",
    E: "𝐄",
    F: "𝐅",
    G: "𝐆",
    H: "𝐇",
    I: "𝐈",
    J: "𝐉",
    K: "𝐊",
    L: "𝐋",
    M: "𝐌",
    N: "𝐍",
    O: "𝐎",
    P: "𝐏",
    Q: "𝐐",
    R: "𝐑",
    S: "𝐒",
    T: "𝐓",
    U: "𝐔",
    V: "𝐕",
    W: "𝐖",
    X: "𝐗",
    Y: "𝐘",
    Z: "𝐙",
    0: "𝟎",
    1: "𝟏",
    2: "𝟐",
    3: "𝟑",
    4: "𝟒",
    5: "𝟓",
    6: "𝟔",
    7: "𝟕",
    8: "𝟖",
    9: "𝟗",
  }
  let convertedText = ""
  for (let i = 0; i < text.length; i++) {
    let char = text[i]
    if (mappings[char]) {
      convertedText += mappings[char]
    } else {
      convertedText += char
    }
  }

  return convertedText
}

// convert to match bold
function convertToMathBoldFraktur(text) {
  let mappings = {
    a: "𝖆",
    b: "𝖇",
    c: "𝖈",
    d: "𝖉",
    e: "𝖊",
    f: "𝖋",
    g: "𝖌",
    h: "𝖍",
    i: "𝖎",
    j: "𝖏",
    k: "𝖐",
    l: "𝖑",
    m: "𝖒",
    n: "𝖓",
    o: "𝖔",
    p: "𝖕",
    q: "𝖖",
    r: "𝖗",
    s: "𝖘",
    t: "𝖙",
    u: "𝖚",
    v: "𝖛",
    w: "𝖜",
    x: "𝖝",
    y: "𝖞",
    z: "𝖟",
    A: "𝕬",
    B: "𝕭",
    C: "𝕮",
    D: "𝕯",
    E: "𝕰",
    F: "𝕱",
    G: "𝕲",
    H: "𝕳",
    I: "𝕴",
    J: "𝕵",
    K: "𝕶",
    L: "𝕷",
    M: "𝕸",
    N: "𝕹",
    O: "𝕺",
    P: "𝕻",
    Q: "𝕼",
    R: "𝕽",
    S: "𝕾",
    T: "𝕿",
    U: "𝖀",
    V: "𝖁",
    W: "𝖂",
    X: "𝖃",
    Y: "𝖄",
    Z: "𝖅",
  }
  let convertedText = ""
  for (let i = 0; i < text.length; i++) {
    let char = text[i]
    if (mappings[char]) {
      convertedText += mappings[char]
    } else {
      convertedText += char
    }
  }

  return convertedText
}

// convert to
function convertToMathFraktur(text) {
  let mappings = {
    a: "𝔞",
    b: "𝔟",
    c: "𝔠",
    d: "𝔡",
    e: "𝔢",
    f: "𝔣",
    g: "𝔤",
    h: "𝔥",
    i: "𝔦",
    j: "𝔧",
    k: "𝔨",
    l: "𝔩",
    m: "𝔪",
    n: "𝔫",
    o: "𝔬",
    p: "𝔭",
    q: "𝔮",
    r: "𝔯",
    s: "𝔰",
    t: "𝔱",
    u: "𝔲",
    v: "𝔳",
    w: "𝔴",
    x: "𝔵",
    y: "𝔶",
    z: "𝔷",
    A: "𝔄",
    B: "𝔅",
    C: "ℭ",
    D: "𝔇",
    E: "𝔈",
    F: "𝔉",
    G: "𝔊",
    H: "ℌ",
    I: "ℑ",
    J: "𝔍",
    K: "𝔎",
    L: "𝔏",
    M: "𝔐",
    N: "𝔑",
    O: "𝔒",
    P: "𝔓",
    Q: "𝔔",
    R: "ℜ",
    S: "𝔖",
    T: "𝔗",
    U: "𝔘",
    V: "𝔙",
    W: "𝔚",
    X: "𝔛",
    Y: "𝔜",
    Z: "ℨ",
  }
  let convertedText = ""
  for (let i = 0; i < text.length; i++) {
    let char = text[i]
    if (mappings[char]) {
      convertedText += mappings[char]
    } else {
      convertedText += char
    }
  }

  return convertedText
}

function convertToMathBoldItalic(text) {
  let mappings = {
    a: "𝒂",
    b: "𝒃",
    c: "𝒄",
    d: "𝒅",
    e: "𝒆",
    f: "𝒇",
    g: "𝒈",
    h: "𝒉",
    i: "𝒊",
    j: "𝒋",
    k: "𝒌",
    l: "𝒍",
    m: "𝒎",
    n: "𝒏",
    o: "𝒐",
    p: "𝒑",
    q: "𝒒",
    r: "𝒓",
    s: "𝒔",
    t: "𝒕",
    u: "𝒖",
    v: "𝒗",
    w: "𝒘",
    x: "𝒙",
    y: "𝒚",
    z: "𝒛",
    A: "𝑨",
    B: "𝑩",
    C: "𝑪",
    D: "𝑫",
    E: "𝑬",
    F: "𝑭",
    G: "𝑮",
    H: "𝑯",
    I: "𝑰",
    J: "𝑱",
    K: "𝑲",
    L: "𝑳",
    M: "𝑴",
    N: "𝑵",
    O: "𝑶",
    P: "𝑷",
    Q: "𝑸",
    R: "𝑹",
    S: "𝑺",
    T: "𝑻",
    U: "𝑼",
    V: "𝑽",
    W: "𝑾",
    X: "𝑿",
    Y: "𝒀",
    Z: "𝒁",
  }
  let convertedText = ""
  for (let i = 0; i < text.length; i++) {
    let char = text[i]
    if (mappings[char]) {
      convertedText += mappings[char]
    } else {
      convertedText += char
    }
  }
  return convertedText
}
function convertToMathBoldScript(text) {
  let mappings = {
    a: "𝓪",
    b: "𝓫",
    c: "𝓬",
    d: "𝓭",
    e: "𝓮",
    f: "𝓯",
    g: "𝓰",
    h: "𝓱",
    i: "𝓲",
    j: "𝓳",
    k: "𝓴",
    l: "𝓵",
    m: "𝓶",
    n: "𝓷",
    o: "𝓸",
    p: "𝓹",
    q: "𝓺",
    r: "𝓻",
    s: "𝓼",
    t: "𝓽",
    u: "𝓾",
    v: "𝓿",
    w: "𝔀",
    x: "𝔁",
    y: "𝔂",
    z: "𝔃",
    A: "𝓐",
    B: "𝓑",
    C: "𝓒",
    D: "𝓓",
    E: "𝓔",
    F: "𝓕",
    G: "𝓖",
    H: "𝓗",
    I: "𝓘",
    J: "𝓙",
    K: "𝓚",
    L: "𝓛",
    M: "𝓜",
    N: "𝓝",
    O: "𝓞",
    P: "𝓟",
    Q: "𝓠",
    R: "𝓡",
    S: "𝓢",
    T: "𝓣",
    U: "𝓤",
    V: "𝓥",
    W: "𝓦",
    X: "𝓧",
    Y: "𝓨",
    Z: "𝓩",
  }
  let convertedText = ""
  for (let i = 0; i < text.length; i++) {
    let char = text[i]
    if (mappings[char]) {
      convertedText += mappings[char]
    } else {
      convertedText += char
    }
  }
  return convertedText
}
function convertToMathDoubleStruck(text) {
  let mappings = {
    a: "𝕒",
    b: "𝕓",
    c: "𝕔",
    d: "𝕕",
    e: "𝕖",
    f: "𝕗",
    g: "𝕘",
    h: "𝕙",
    i: "𝕚",
    j: "𝕛",
    k: "𝕜",
    l: "𝕝",
    m: "𝕞",
    n: "𝕟",
    o: "𝕠",
    p: "𝕡",
    q: "𝕢",
    r: "𝕣",
    s: "𝕤",
    t: "𝕥",
    u: "𝕦",
    v: "𝕧",
    w: "𝕨",
    x: "𝕩",
    y: "𝕪",
    z: "𝕫",
    A: "𝔸",
    B: "𝔹",
    C: "ℂ",
    D: "𝔻",
    E: "𝔼",
    F: "𝔽",
    G: "𝔾",
    H: "ℍ",
    I: "𝕀",
    J: "𝕁",
    K: "𝕂",
    L: "𝕃",
    M: "𝕄",
    N: "ℕ",
    O: "𝕆",
    P: "ℙ",
    Q: "ℚ",
    R: "ℝ",
    S: "𝕊",
    T: "𝕋",
    U: "𝕌",
    V: "𝕍",
    W: "𝕎",
    X: "𝕏",
    Y: "𝕐",
    Z: "ℤ",
    0: "𝟘",
    1: "𝟙",
    2: "𝟚",
    3: "𝟛",
    4: "𝟜",
    5: "𝟝",
    6: "𝟞",
    7: "𝟟",
    8: "𝟠",
    9: "𝟡",
  }
  let convertedText = ""
  for (let i = 0; i < text.length; i++) {
    let char = text[i]
    if (mappings[char]) {
      convertedText += mappings[char]
    } else {
      convertedText += char
    }
  }
  return convertedText
}

function convertToMathSans(text) {
  let mappings = {
    a: "𝖺",
    b: "𝖻",
    c: "𝖼",
    d: "𝖽",
    e: "𝖾",
    f: "𝖿",
    g: "𝗀",
    h: "𝗁",
    i: "𝗂",
    j: "𝗃",
    k: "𝗄",
    l: "𝗅",
    m: "𝗆",
    n: "𝗇",
    o: "𝗈",
    p: "𝗉",
    q: "𝗊",
    r: "𝗋",
    s: "𝗌",
    t: "𝗍",
    u: "𝗎",
    v: "𝗏",
    w: "𝗐",
    x: "𝗑",
    y: "𝗒",
    z: "𝗓",
    A: "𝖠",
    B: "𝖡",
    C: "𝖢",
    D: "𝖣",
    E: "𝖤",
    F: "𝖥",
    G: "𝖦",
    H: "𝖧",
    I: "𝖨",
    J: "𝖩",
    K: "𝖪",
    L: "𝖫",
    M: "𝖬",
    N: "𝖭",
    O: "𝖮",
    P: "𝖯",
    Q: "𝖰",
    R: "𝖱",
    S: "𝖲",
    T: "𝖳",
    U: "𝖴",
    V: "𝖵",
    W: "𝖶",
    X: "𝖷",
    Y: "𝖸",
    Z: "𝖹",
    0: "𝟢",
    1: "𝟣",
    2: "𝟤",
    3: "𝟥",
    4: "𝟦",
    5: "𝟧",
    6: "𝟨",
    7: "𝟩",
    8: "𝟪",
    9: "𝟫",
  }
  let convertedText = ""
  for (let i = 0; i < text.length; i++) {
    let char = text[i]
    if (mappings[char]) {
      convertedText += mappings[char]
    } else {
      convertedText += char
    }
  }
  return convertedText
}
function convertToMathSansBold(text) {
  let mappings = {
    a: "𝗮",
    b: "𝗯",
    c: "𝗰",
    d: "𝗱",
    e: "𝗲",
    f: "𝗳",
    g: "𝗴",
    h: "𝗵",
    i: "𝗶",
    j: "𝗷",
    k: "𝗸",
    l: "𝗹",
    m: "𝗺",
    n: "𝗻",
    o: "𝗼",
    p: "𝗽",
    q: "𝗾",
    r: "𝗿",
    s: "𝘀",
    t: "𝘁",
    u: "𝘂",
    v: "𝘃",
    w: "𝘄",
    x: "𝘅",
    y: "𝘆",
    z: "𝘇",
    A: "𝗔",
    B: "𝗕",
    C: "𝗖",
    D: "𝗗",
    E: "𝗘",
    F: "𝗙",
    G: "𝗚",
    H: "𝗛",
    I: "𝗜",
    J: "𝗝",
    K: "𝗞",
    L: "𝗟",
    M: "𝗠",
    N: "𝗡",
    O: "𝗢",
    P: "𝗣",
    Q: "𝗤",
    R: "𝗥",
    S: "𝗦",
    T: "𝗧",
    U: "𝗨",
    V: "𝗩",
    W: "𝗪",
    X: "𝗫",
    Y: "𝗬",
    Z: "𝗭",
    0: "𝟬",
    1: "𝟭",
    2: "𝟮",
    3: "𝟯",
    4: "𝟰",
    5: "𝟱",
    6: "𝟲",
    7: "𝟳",
    8: "𝟴",
    9: "𝟵",
  }
  let convertedText = ""
  for (let i = 0; i < text.length; i++) {
    let char = text[i]
    if (mappings[char]) {
      convertedText += mappings[char]
    } else {
      convertedText += char
    }
  }
  return convertedText
}
function convertToMathSansBoldItalic(text) {
  let mappings = {
    a: "𝙖",
    b: "𝙗",
    c: "𝙘",
    d: "𝙙",
    e: "𝙚",
    f: "𝙛",
    g: "𝙜",
    h: "𝙝",
    i: "𝙞",
    j: "𝙟",
    k: "𝙠",
    l: "𝙡",
    m: "𝙢",
    n: "𝙣",
    o: "𝙤",
    p: "𝙥",
    q: "𝙦",
    r: "𝙧",
    s: "𝙨",
    t: "𝙩",
    u: "𝙪",
    v: "𝙫",
    w: "𝙬",
    x: "𝙭",
    y: "𝙮",
    z: "𝙯",
    A: "𝘼",
    B: "𝘽",
    C: "𝘾",
    D: "𝘿",
    E: "𝙀",
    F: "𝙁",
    G: "𝙂",
    H: "𝙃",
    I: "𝙄",
    J: "𝙅",
    K: "𝙆",
    L: "𝙇",
    M: "𝙈",
    N: "𝙉",
    O: "𝙊",
    P: "𝙋",
    Q: "𝙌",
    R: "𝙍",
    S: "𝙎",
    T: "𝙏",
    U: "𝙐",
    V: "𝙑",
    W: "𝙒",
    X: "𝙓",
    Y: "𝙔",
    Z: "𝙕",
  }
  let convertedText = ""
  for (let i = 0; i < text.length; i++) {
    let char = text[i]
    if (mappings[char]) {
      convertedText += mappings[char]
    } else {
      convertedText += char
    }
  }
  return convertedText
}
function convertToMathSansItalic(text) {
  let mappings = {
    a: "𝘢",
    b: "𝘣",
    c: "𝘤",
    d: "𝘥",
    e: "𝘦",
    f: "𝘧",
    g: "𝘨",
    h: "𝘩",
    i: "𝘪",
    j: "𝘫",
    k: "𝘬",
    l: "𝘭",
    m: "𝘮",
    n: "𝘯",
    o: "𝘰",
    p: "𝘱",
    q: "𝘲",
    r: "𝘳",
    s: "𝘴",
    t: "𝘵",
    u: "𝘶",
    v: "𝘷",
    w: "𝘸",
    x: "𝘹",
    y: "𝘺",
    z: "𝘻",
    A: "𝘈",
    B: "𝘉",
    C: "𝘊",
    D: "𝘋",
    E: "𝘌",
    F: "𝘍",
    G: "𝘎",
    H: "𝘏",
    I: "𝘐",
    J: "𝘑",
    K: "𝘒",
    L: "𝘓",
    M: "𝘔",
    N: "𝘕",
    O: "𝘖",
    P: "𝘗",
    Q: "𝘘",
    R: "𝘙",
    S: "𝘚",
    T: "𝘛",
    U: "𝘜",
    V: "𝘝",
    W: "𝘞",
    X: "𝘟",
    Y: "𝘠",
    Z: "𝘡",
  }
  let convertedText = ""
  for (let i = 0; i < text.length; i++) {
    let char = text[i]
    if (mappings[char]) {
      convertedText += mappings[char]
    } else {
      convertedText += char
    }
  }
  return convertedText
}
function convertToMathScript(text) {
  let mappings = {
    a: "𝒶",
    b: "𝒷",
    c: "𝒸",
    d: "𝒹",
    e: "ℯ",
    f: "𝒻",
    g: "ℊ",
    h: "𝒽",
    i: "𝒾",
    j: "𝒿",
    k: "𝓀",
    l: "𝓁",
    m: "𝓂",
    n: "𝓃",
    o: "ℴ",
    p: "𝓅",
    q: "𝓆",
    r: "𝓇",
    s: "𝓈",
    t: "𝓉",
    u: "𝓊",
    v: "𝓋",
    w: "𝓌",
    x: "𝓍",
    y: "𝓎",
    z: "𝓏",
    A: "𝒜",
    B: "ℬ",
    C: "𝒞",
    D: "𝒟",
    E: "ℰ",
    F: "ℱ",
    G: "𝒢",
    H: "ℋ",
    I: "ℐ",
    J: "𝒥",
    K: "𝒦",
    L: "ℒ",
    M: "ℳ",
    N: "𝒩",
    O: "𝒪",
    P: "𝒫",
    Q: "𝒬",
    R: "ℛ",
    S: "𝒮",
    T: "𝒯",
    U: "𝒰",
    V: "𝒱",
    W: "𝒲",
    X: "𝒳",
    Y: "𝒴",
    Z: "𝒵",
  }
  let convertedText = ""
  for (let i = 0; i < text.length; i++) {
    let char = text[i]
    if (mappings[char]) {
      convertedText += mappings[char]
    } else {
      convertedText += char
    }
  }
  return convertedText
}
function convertToParenthesized(text) {
  let mappings = {
    a: "⒜",
    b: "⒝",
    c: "⒞",
    d: "⒟",
    e: "⒠",
    f: "⒡",
    g: "⒢",
    h: "⒣",
    i: "⒤",
    j: "⒥",
    k: "⒦",
    l: "⒧",
    m: "⒨",
    n: "⒩",
    o: "⒪",
    p: "⒫",
    q: "⒬",
    r: "⒭",
    s: "⒮",
    t: "⒯",
    u: "⒰",
    v: "⒱",
    w: "⒲",
    x: "⒳",
    y: "⒴",
    z: "⒵",
    0: "0",
    1: "⑴",
    2: "⑵",
    3: "⑶",
    4: "⑷",
    5: "⑸",
    6: "⑹",
    7: "⑺",
    8: "⑻",
    9: "⑼",
  }
  let convertedText = ""
  for (let i = 0; i < text.length; i++) {
    let character = text[i].toLowerCase()
    let convertedCharacter =
      mappings[character] !== undefined ? mappings[character] : character
    convertedText += convertedCharacter
  }

  return convertedText
}
function convertToRegionalIndicator(text) {
  let mappings = {
    a: "🇦",
    b: "🇧",
    c: "🇨",
    d: "🇩",
    e: "🇪",
    f: "🇫",
    g: "🇬",
    h: "🇭",
    i: "🇮",
    j: "🇯",
    k: "🇰",
    l: "🇱",
    m: "🇲",
    n: "🇳",
    o: "🇴",
    p: "🇵",
    q: "🇶",
    r: "🇷",
    s: "🇸",
    t: "🇹",
    u: "🇺",
    v: "🇻",
    w: "🇼",
    x: "🇽",
    y: "🇾",
    z: "🇿",
  }

  let convertedText = ""
  for (let i = 0; i < text.length; i++) {
    let character = text[i].toLowerCase()
    let convertedCharacter =
      mappings[character] !== undefined ? mappings[character] : character
    convertedText += convertedCharacter
  }
  return convertedText
}

function convertToSquare(text) {
  let mappings = {
    a: "🄰",
    b: "🄱",
    c: "🄲",
    d: "🄳",
    e: "🄴",
    f: "🄵",
    g: "🄶",
    h: "🄷",
    i: "🄸",
    j: "🄹",
    k: "🄺",
    l: "🄻",
    m: "🄼",
    n: "🄽",
    o: "🄾",
    p: "🄿",
    q: "🅀",
    r: "🅁",
    s: "🅂",
    t: "🅃",
    u: "🅄",
    v: "🅅",
    w: "🅆",
    x: "🅇",
    y: "🅈",
    z: "🅉",
    "+": "⊞",
    "⊟": "⊖",
    "*": "⧆",
    "/": "⧄",
  }

  let convertedText = ""
  for (let i = 0; i < text.length; i++) {
    let character = text[i].toLowerCase()
    let convertedCharacter =
      mappings[character] !== undefined ? mappings[character] : character
    convertedText += convertedCharacter
  }

  return convertedText
}
function convertToFilledSquare(text) {
  let mappings = {
    a: "🅰",
    b: "🅱",
    c: "🅲",
    d: "🅳",
    e: "🅴",
    f: "🅵",
    g: "🅶",
    h: "🅷",
    i: "🅸",
    j: "🅹",
    k: "🅺",
    l: "🅻",
    m: "🅼",
    n: "🅽",
    o: "🅾",
    p: "🅿",
    q: "🆀",
    r: "🆁",
    s: "🆂",
    t: "🆃",
    u: "🆄",
    v: "🆅",
    w: "🆆",
    x: "🆇",
    y: "🆈",
    z: "🆉",
  }

  let convertedText = ""
  for (let i = 0; i < text.length; i++) {
    let character = text[i].toLowerCase()
    let convertedCharacter =
      mappings[character] !== undefined ? mappings[character] : character
    convertedText += convertedCharacter
  }

  return convertedText
}

function convertToACutePseudoAlphabet(text) {
  let mappings = {
    a: "á",
    b: "b",
    c: "ć",
    d: "d",
    e: "é",
    f: "f",
    g: "ǵ",
    h: "h",
    i: "í",
    j: "j",
    k: "ḱ",
    l: "ĺ",
    m: "ḿ",
    n: "ń",
    o: "ő",
    p: "ṕ",
    q: "q",
    r: "ŕ",
    s: "ś",
    t: "t",
    u: "ú",
    v: "v",
    w: "ẃ",
    x: "x",
    y: "ӳ",
    z: "ź",
    A: "Á",
    B: "B",
    C: "Ć",
    D: "D",
    E: "É",
    F: "F",
    G: "Ǵ",
    H: "H",
    I: "í",
    J: "J",
    K: "Ḱ",
    L: "Ĺ",
    M: "Ḿ",
    N: "Ń",
    O: "Ő",
    P: "Ṕ",
    Q: "Q",
    R: "Ŕ",
    S: "ś",
    T: "T",
    U: "Ű",
    V: "V",
    W: "Ẃ",
    X: "X",
    Y: "Ӳ",
    Z: "Ź",
  }
  let convertedText = ""
  for (let i = 0; i < text.length; i++) {
    let char = text[i]
    if (mappings[char]) {
      convertedText += mappings[char]
    } else {
      convertedText += char
    }
  }
  return convertedText
}
function convertToCJKThaiPseudoAlphabet(text) {
  let mappings = {
    a: "ﾑ",
    b: "乃",
    c: "c",
    d: "d",
    e: "乇",
    f: "ｷ",
    g: "g",
    h: "ん",
    i: "ﾉ",
    j: "ﾌ",
    k: "ズ",
    l: "ﾚ",
    m: "ﾶ",
    n: "刀",
    o: "o",
    p: "ｱ",
    q: "q",
    r: "尺",
    s: "丂",
    t: "ｲ",
    u: "u",
    v: "√",
    w: "w",
    x: "ﾒ",
    y: "ﾘ",
    z: "乙",
  }
  let convertedText = ""
  for (let i = 0; i < text.length; i++) {
    let character = text[i].toLowerCase()
    let convertedCharacter =
      mappings[character] !== undefined ? mappings[character] : character
    convertedText += convertedCharacter
  }
  return convertedText
}
function convertToCurvy1PseudoAlphabet(text) {
  let mappings = {
    a: "ค",
    b: "๒",
    c: "ƈ",
    d: "ɗ",
    e: "ﻉ",
    f: ",ि",
    g: "ﻭ",
    h: "ɦ",
    i: "ٱ",
    j: "ﻝ",
    k: "ᛕ",
    l: "ɭ",
    m: "๓",
    n: "ก",
    o: "ѻ",
    p: "ρ",
    q: "۹",
    r: "ɼ",
    s: "ร",
    t: "Շ",
    u: "પ",
    v: "۷",
    w: "ฝ",
    x: "ซ",
    y: "ץ",
    z: "չ",
  }
  let convertedText = ""
  for (let i = 0; i < text.length; i++) {
    let character = text[i].toLowerCase()
    let convertedCharacter =
      mappings[character] !== undefined ? mappings[character] : character
    convertedText += convertedCharacter
  }
  return convertedText
}
function convertToCurvy2PseudoAlphabet(text) {
  let mappings = {
    a: "α",
    b: "в",
    c: "¢",
    d: "∂",
    e: "є",
    f: "ƒ",
    g: "ﻭ",
    h: "н",
    i: "ι",
    j: "נ",
    k: "к",
    l: "ℓ",
    m: "м",
    n: "η",
    o: "σ",
    p: "ρ",
    q: "۹",
    r: "я",
    s: "ѕ",
    t: "т",
    u: "υ",
    v: "ν",
    w: "ω",
    x: "χ",
    y: "у",
    z: "չ",
  }
  let convertedText = ""
  for (let i = 0; i < text.length; i++) {
    let character = text[i].toLowerCase()
    let convertedCharacter =
      mappings[character] !== undefined ? mappings[character] : character
    convertedText += convertedCharacter
  }
  return convertedText
}
function convertToCurvy3PseudoAlphabet(text) {
  let mappings = {
    a: "ค",
    b: "๒",
    c: "ς",
    d: "๔",
    e: "є",
    f: "Ŧ",
    g: "ﻮ",
    h: "ђ",
    i: "เ",
    j: "ן",
    k: "к",
    l: "ɭ",
    m: "๓",
    n: "ภ",
    o: "๏",
    p: "ק",
    q: "ợ",
    r: "г",
    s: "ร",
    t: "Շ",
    u: "ย",
    v: "ש",
    w: "ฬ",
    x: "א",
    y: "ץ",
    z: "չ",
  }
  let convertedText = ""
  for (let i = 0; i < text.length; i++) {
    let character = text[i].toLowerCase()
    let convertedCharacter =
      mappings[character] !== undefined ? mappings[character] : character
    convertedText += convertedCharacter
  }
  return convertedText
}

function convertToFauxCyrillicPseudoAlphabet(text) {
  let mappings = {
    a: "а",
    b: "ъ",
    c: "с",
    d: "ↁ",
    e: "э",
    f: "f",
    g: "Б",
    h: "Ђ",
    i: "і",
    j: "ј",
    k: "к",
    l: "l",
    m: "м",
    n: "и",
    o: "о",
    p: "р",
    q: "q",
    r: "ѓ",
    s: "ѕ",
    t: "т",
    u: "ц",
    v: "v",
    w: "ш",
    x: "х",
    y: "Ў",
    z: "z",
    A: "Д",
    B: "Б",
    C: "Ҁ",
    D: "ↁ",
    E: "Є",
    F: "F",
    G: "Б",
    H: "Н",
    I: "І",
    J: "Ј",
    K: "Ќ",
    L: "L",
    M: "М",
    N: "И",
    O: "Ф",
    P: "Р",
    Q: "Q",
    R: "Я",
    S: "Ѕ",
    T: "Г",
    U: "Ц",
    V: "V",
    W: "Щ",
    X: "Ж",
    Y: "Ч",
    Z: "Z",
  }
  let convertedText = ""
  for (let i = 0; i < text.length; i++) {
    let char = text[i]
    if (mappings[char]) {
      convertedText += mappings[char]
    } else {
      convertedText += char
    }
  }

  return convertedText
}
function convertToFauxEthiopicPseudoAlphabet(text) {
  let mappings = {
    a: "ል",
    b: "ጌ",
    c: "ር",
    d: "ዕ",
    e: "ቿ",
    f: "ቻ",
    g: "ኗ",
    h: "ዘ",
    i: "ጎ",
    j: "ጋ",
    k: "ጕ",
    l: "ረ",
    m: "ጠ",
    n: "ክ",
    o: "ዐ",
    p: "የ",
    q: "ዒ",
    r: "ዪ",
    s: "ነ",
    t: "ፕ",
    u: "ሁ",
    v: "ሀ",
    w: "ሠ",
    x: "ሸ",
    y: "ሃ",
    z: "ጊ",
  }
  let convertedText = ""
  for (let i = 0; i < text.length; i++) {
    let character = text[i].toLowerCase()
    let convertedCharacter =
      mappings[character] !== undefined ? mappings[character] : character
    convertedText += convertedCharacter
  }
  return convertedText
}
function convertToRockDotsPseudoAlphabet(text) {
  let mappings = {
    a: "ä",
    b: "ḅ",
    c: "ċ",
    d: "ḋ",
    e: "ë",
    f: "ḟ",
    g: "ġ",
    h: "ḧ",
    i: "ï",
    j: "j",
    k: "ḳ",
    l: "ḷ",
    m: "ṁ",
    n: "ṅ",
    o: "ö",
    p: "ṗ",
    q: "q",
    r: "ṛ",
    s: "ṡ",
    t: "ẗ",
    u: "ü",
    v: "ṿ",
    w: "ẅ",
    x: "ẍ",
    y: "ÿ",
    z: "ż",
    A: "Ä",
    B: "Ḅ",
    C: "Ċ",
    D: "Ḋ",
    E: "Ё",
    F: "Ḟ",
    G: "Ġ",
    H: "Ḧ",
    I: "Ї",
    J: "J",
    K: "Ḳ",
    L: "Ḷ",
    M: "Ṁ",
    N: "Ṅ",
    O: "Ö",
    P: "Ṗ",
    Q: "Q",
    R: "Ṛ",
    S: "Ṡ",
    T: "Ṫ",
    U: "Ü",
    V: "Ṿ",
    W: "Ẅ",
    X: "Ẍ",
    Y: "Ÿ",
    Z: "Ż",
    3: "ӟ",
  }
  let convertedText = ""
  for (let i = 0; i < text.length; i++) {
    let char = text[i]
    if (mappings[char]) {
      convertedText += mappings[char]
    } else {
      convertedText += char
    }
  }

  return convertedText
}
function convertToSmallCapsPseudoAlphabet(text) {
  let mappings = {
    a: "ᴀ",
    b: "ʙ",
    c: "ᴄ",
    d: "ᴅ",
    e: "ᴇ",
    f: "ꜰ",
    g: "ɢ",
    h: "ʜ",
    i: "ɪ",
    j: "ᴊ",
    k: "ᴋ",
    l: "ʟ",
    m: "ᴍ",
    n: "ɴ",
    o: "ᴏ",
    p: "ᴩ",
    q: "q",
    r: "ʀ",
    s: "ꜱ",
    t: "ᴛ",
    u: "ᴜ",
    v: "ᴠ",
    w: "ᴡ",
    x: "x",
    y: "y",
    z: "ᴢ",
    A: "ᴀ",
    B: "ʙ",
    C: "ᴄ",
    D: "ᴅ",
    E: "ᴇ",
    F: "ꜰ",
    G: "ɢ",
    H: "ʜ",
    I: "ɪ",
    J: "ᴊ",
    K: "ᴋ",
    L: "ʟ",
    M: "ᴍ",
    N: "ɴ",
    O: "ᴏ",
    P: "ᴩ",
    Q: "Q",
    R: "ʀ",
    S: "ꜱ",
    T: "ᴛ",
    U: "ᴜ",
    V: "ᴠ",
    W: "ᴡ",
    X: "x",
    Y: "Y",
    Z: "ᴢ",
  }
  let convertedText = ""
  for (let i = 0; i < text.length; i++) {
    let char = text[i]
    if (mappings[char]) {
      convertedText += mappings[char]
    } else {
      convertedText += char
    }
  }

  return convertedText
}

function convertToStrokedPseudoAlphabet(text) {
  let mappings = {
    a: "Ⱥ",
    b: "ƀ",
    c: "ȼ",
    d: "đ",
    e: "ɇ",
    f: "f",
    g: "ǥ",
    h: "ħ",
    i: "ɨ",
    j: "ɉ",
    k: "ꝁ",
    l: "ł",
    m: "m",
    n: "n",
    o: "ø",
    p: "ᵽ",
    q: "ꝗ",
    r: "ɍ",
    s: "s",
    t: "ŧ",
    u: "ᵾ",
    v: "v",
    w: "w",
    x: "x",
    y: "ɏ",
    z: "ƶ",
    A: "Ⱥ",
    B: "Ƀ",
    C: "Ȼ",
    D: "Đ",
    E: "Ɇ",
    F: "F",
    G: "Ǥ",
    H: "Ħ",
    I: "Ɨ",
    J: "Ɉ",
    K: "Ꝁ",
    L: "Ł",
    M: "M",
    N: "N",
    O: "Ø",
    P: "Ᵽ",
    Q: "Ꝗ",
    R: "Ɍ",
    S: "S",
    T: "Ŧ",
    U: "ᵾ",
    V: "V",
    W: "W",
    X: "X",
    Y: "Ɏ",
    Z: "Ƶ",
    2: "ƻ",
  }
  let convertedText = ""
  for (let i = 0; i < text.length; i++) {
    let char = text[i]
    if (mappings[char]) {
      convertedText += mappings[char]
    } else {
      convertedText += char
    }
  }

  return convertedText
}
function convertToSubscriptPseudoAlphabet(text) {
  let mappings = {
    a: "ₐ",
    b: "ᵦ",
    c: "꜀",
    d: "d",
    e: "ₑ",
    f: "f",
    g: "₉",
    h: "ₕ",
    i: "ᵢ",
    j: "ⱼ",
    k: "ₖ",
    l: "ₗ",
    m: "ₘ",
    n: "ₙ",
    o: "ₒ",
    p: "ₚ",
    q: "q",
    r: "ᵣ",
    s: "ₛ",
    t: "ₜ",
    u: "ᵤ",
    v: "ᵥ",
    w: "w",
    x: "ₓ",
    y: "ᵧ",
    z: "₂",
    0: "₀",
    1: "₁",
    2: "₂",
    3: "₃",
    4: "₄",
    5: "₅",
    6: "₆",
    7: "₇",
    8: "₈",
    9: "₉",
  }
  let convertedText = ""
  for (let i = 0; i < text.length; i++) {
    let character = text[i].toLowerCase()
    let convertedCharacter =
      mappings[character] !== undefined ? mappings[character] : character
    convertedText += convertedCharacter
  }

  return convertedText
}
function convertToSuperscriptPseudoAlphabet(text) {
  let mappings = {
    a: "ᵃ",
    b: "ᵇ",
    c: "ᶜ",
    d: "ᵈ",
    e: "ᵉ",
    f: "ᶠ",
    g: "ᵍ",
    h: "ʰ",
    i: "ⁱ",
    j: "ʲ",
    k: "ᵏ",
    l: "ˡ",
    m: "ᵐ",
    n: "ⁿ",
    o: "ᵒ",
    p: "ᵖ",
    q: "q",
    r: "ʳ",
    s: "ˢ",
    t: "ᵗ",
    u: "ᵘ",
    v: "ᵛ",
    w: "ʷ",
    x: "ˣ",
    y: "ʸ",
    z: "ᶻ",
    A: "ᴬ",
    B: "ᴮ",
    C: "ᶜ",
    D: "ᴰ",
    E: "ᴱ",
    F: "ᶠ",
    G: "ᴳ",
    H: "ᴴ",
    I: "ᴵ",
    J: "ᴶ",
    K: "ᴷ",
    L: "ᴸ",
    M: "ᴹ",
    N: "ᴺ",
    O: "ᴼ",
    P: "ᴾ",
    Q: "Q",
    R: "ᴿ",
    S: "ˢ",
    T: "ᵀ",
    U: "ᵁ",
    V: "ⱽ",
    W: "ᵂ",
    X: "ˣ",
    Y: "ʸ",
    Z: "ᶻ",
    0: "⁰",
    1: "¹",
    2: "²",
    3: "³",
    4: "⁴",
    5: "⁵",
    6: "⁶",
    7: "⁷",
    8: "⁸",
    9: "⁹",
  }
  let convertedText = ""
  for (let i = 0; i < text.length; i++) {
    let char = text[i]
    if (mappings[char]) {
      convertedText += mappings[char]
    } else {
      convertedText += char
    }
  }

  return convertedText
}
function convertToInvertedPseudoAlphabet(text) {
  let mappings = {
    a: "ɐ",
    b: "q",
    c: "ɔ",
    d: "p",
    e: "ǝ",
    f: "ɟ",
    g: "ƃ",
    h: "ɥ",
    i: "ı",
    j: "ɾ",
    k: "ʞ",
    l: "ן",
    m: "ɯ",
    n: "u",
    o: "o",
    p: "d",
    q: "b",
    r: "ɹ",
    s: "s",
    t: "ʇ",
    u: "n",
    v: "ʌ",
    w: "ʍ",
    x: "x",
    y: "ʎ",
    z: "z",
    A: "ꓯ",
    B: "ꓭ",
    C: "Ↄ",
    D: "ꓷ",
    E: "Ǝ",
    F: "Ⅎ",
    G: "⅁",
    H: "ɥ",
    I: "ı",
    J: "ᒋ",
    K: "ꓘ",
    L: "⅂",
    M: "W",
    N: "u",
    O: "O",
    P: "ꓒ",
    Q: "Ò",
    R: "ꓤ",
    S: "S",
    T: "ꓕ",
    U: "ꓵ",
    V: "𐌡",
    W: "M",
    X: "X",
    Y: "⅄",
    Z: "Z",
    4: "Һ",
    1: "Ɩ",
    ";": "⸵",
    "&": "⅋",
    "(": ")",
    5: "ꞔ",
    6: "9",
    7: "∠",
    ")": "(",
    9: "6",
    "{": "}",
    "}": "{",
    "]": "[",
    "[": "]",
    "!": "¡",
    "\\": "/",
    "/": "\\",
    "?": "¿",
  }
  let convertedText = ""
  for (let i = 0; i < text.length; i++) {
    let char = text[i]
    if (mappings[char]) {
      convertedText += mappings[char]
    } else {
      convertedText += char
    }
  }

  return convertedText
}
function convertToReversedPseudoAlphabet(text) {
  let mappings = {
    b: "d",
    c: "ↄ",
    d: "b",
    e: "ɘ",
    f: "ꟻ",
    n: "ᴎ",
    o: "o",
    p: "q",
    q: "p",
    r: "ᴙ",
    s: "ꙅ",
    B: "d",
    C: "Ↄ",
    D: "b",
    E: "Ǝ",
    F: "ꟻ",
    L: "⅃",
    N: "ᴎ",
    O: "O",
    P: "ꟼ",
    Q: "p",
    R: "ᴙ",
    S: "Ꙅ",
    Y: "⅄",
    Z: "Z",
    ";": "⁏",
    "?": "⸮",
    a: "A",
  }
  let convertedText = ""
  for (let i = 0; i < text.length; i++) {
    let char = text[i]
    if (mappings[char]) {
      convertedText += mappings[char]
    } else {
      convertedText += char
    }
  }

  return convertedText
}
