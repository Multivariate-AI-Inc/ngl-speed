export const runtime = "edge"
export default async function handler(req) {
  if (req.method !== "POST") {
    return new Response(
      JSON.stringify({ error: "Only POST requests are allowed" }),
      {
        status: 405,
        headers: { "Content-Type": "application/json" },
      },
    )
  }

  const { url } = await req.json()

  if (!url) {
    return new Response(JSON.stringify({ error: "Missing parameters" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    })
  }

  try {
    const data = await fetchMetaData(url)
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    })
  } catch (error) {
    console.error("Error fetching Rating trends:", error)
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    })
  }
}

const fetchMetaData = async url => {
  try {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Basic Z2V0X2h0bWxfdXNlcjpFY3lkdSRKJCNGeHNldCohY2Zzb3ApJA==",
      },
      body: JSON.stringify({ url }),
    }
    const response = await fetch(
      "https://gethtml.maakeetoo.com/title-meta",
      requestOptions,
    )
    const data = await response.json()
    if (response.ok) {
      // Extract title and description
      let { title, meta_description } = data
      if (meta_description == "") {
        meta_description = "Description not found"
      }
      const titleStatus =
        title.length < 50
          ? "Too Short"
          : title.length > 63
            ? "Too Long"
            : "Good Title"
      let descriptionLength = meta_description.length
      let descriptionStatus
      if (descriptionLength < 100) {
        descriptionStatus = "Too Short"
      } else if (descriptionLength < 200) {
        descriptionStatus = "Good Description"
      } else {
        descriptionStatus = "Too Long"
      }
      if (meta_description == "description Not found") {
        descriptionStatus = "Not Available"
        meta_description = "We couldn't find the description."
      }

      return { title, titleStatus, meta_description, descriptionStatus }
    }
  } catch (error) {
    console.error(error)
    throw new Error(`Error fetching meta data: ${error}`)
  }
}
