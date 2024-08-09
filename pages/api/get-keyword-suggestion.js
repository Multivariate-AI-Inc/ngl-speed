import axios from "axios"
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
    const { selectedSource, term, country, lang } = await req.json()
    const num = 15
    const baseUrl = "https://js-apis.maakeetoo.com"
    const url = `${baseUrl}/suggestion/${selectedSource}`

    const requestBody = {
      term,
      country,
      lang,
      num,
    }
    const data = await getSuggestion(url, requestBody, selectedSource)
    return new Response(JSON.stringify({ data }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    })
  } catch (error) {
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    })
  }
}

const getSuggestion = async (url, requestBody, selectedSource) => {
  try {
    const response = await axios.post(url, requestBody)
    const data = await response.data
    if (selectedSource === "yandex") {
      return data.map(item => item[1])
    }
    return data
  } catch (error) {
    console.error("Error fetching suggestion", error)
    throw error
  }
}
