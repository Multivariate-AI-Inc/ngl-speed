export const runtime = "edge"
export default async function handler(req) {
  const url = new URL(req.url)
  const { keyword, country } = Object.fromEntries(url.searchParams.entries())

  if (!keyword || !country) {
    return new Response(JSON.stringify({ error: "Missing parameters" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    })
  }
  try {
    const data = await fetchGoogleSerpData(keyword, country)
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    })
  } catch (error) {
    console.error("Error fetching gSERP data:", error)
    return new Response(JSON.stringify({ data: "" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    })
  }
}

const fetchGoogleSerpData = async (keyword, country) => {
  const myHeaders = new Headers()
  const keywords = [keyword]
  myHeaders.append("Content-Type", "application/json")
  const raw = JSON.stringify({
    keywords: keywords,
  })
  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  }
  try {
    let response = await fetch(
      `https://js-apis.maakeetoo.com/gSerp?gl=${country}`,
      requestOptions,
    )
    const data = await response.json();
    const keyword = Object.keys(data)[0];
    let dataItem = data[keyword];
    return dataItem
  } catch (error) {
    console.error("Error fetching data", error)
    return error
  }
}
