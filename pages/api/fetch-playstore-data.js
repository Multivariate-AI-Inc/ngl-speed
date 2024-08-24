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
    const { appId, country, lang } = await req.json()
    const countryLanguageParam = `&hl=${lang}&gl=${country}`
    const url = `https://play.google.com/store/apps/details?id=${appId}${countryLanguageParam}`
    console.log("URL", url)
    const data = await getPlayStoreData(url)
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    })
  } catch (error) {
    return new Response(
      JSON.stringify({ error: `Internal Server Error ${error}` }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      },
    )
  }
}

const getPlayStoreData = async url => {
  console.log("URL", url)

  try {
    const response = await fetch(url)
    const data = await response.text()
    let newStr = data.replace(/\\/g, "")
    return newStr
  } catch (error) {
    console.error("Error fetching data", error)
    throw error
  }
}
