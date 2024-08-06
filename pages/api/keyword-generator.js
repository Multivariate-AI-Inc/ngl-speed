import { customSortSuggestion } from "../../components/utils"
export const runtime = "edge"
export default async function handler(req, res) {
  if (req.method !== "POST") {
    return new Response(
      JSON.stringify({ error: "Only POST requests are allowed" }),
      {
        status: 405,
        headers: { "Content-Type": "application/json" },
      },
    )
  }
  try {
    const { keyword } = await req.json()
    const term = keyword.replace(/ /g, "+")
    const baseUrl = "https://js-apis.maakeetoo.com/"
    let keywords = []

    const googleData1 = await googleSuggestionFull(baseUrl, term, "in", "en")
    keywords = googleData1
    const palyData2 = await playSuggestionFull(baseUrl, term, "in", "en")
    keywords = keywords.concat(palyData2)
    const newArray = [...new Set(keywords)]

    const filteredArray = newArray.filter(keyword => /^[a-zA-Z]/.test(keyword))
    const sortedArray = customSortSuggestion(filteredArray, keyword)
    return new Response(JSON.stringify(sortedArray), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    })
  } catch (error) {
    console.error("Error generating keywords:", error)
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    })
  }
}

// google suggestion
async function googleSuggestionFull(baseUrl, term, country, lang) {
  const url = `${baseUrl}g-suggestion?keyword=${term}&gl=${country}&hl=${lang}`
  try {
    const response = await fetch(url)
    const data = await response.json()
    return data
  } catch (error) {
    console.error("Error:", error.message)
    return []
  }
}

// play suggestion
async function playSuggestionFull(baseUrl, term, country, lang) {
  const url = `${baseUrl}p-suggestion?keyword=${term}&gl=${country}&hl=${lang}`
  try {
    const response = await fetch(url)
    const data = await response.json()
    return data
  } catch (error) {
    console.error("Error:", error.message)
    return []
  }
}
