export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" })
    return
  }
  const { url } = req.body
  if (!url) {
    res.status(400).json({ error: "URL is required" })
    return
  }
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
    const data = await response.json();
    if (response.ok) {
      // Extract title and description
      let { title, meta_description } = data
if(meta_description == ''){
    meta_description = 'Description not found'
}
      const titleStatus =  title.length < 50 ? "too Short" : title.length > 63 ? "too Long" : "Good Title";
    let descriptionLength = meta_description.length;
    let descriptionStatus;
    if (descriptionLength < 100) {
       descriptionStatus = "too Short";
    } else if (descriptionLength < 200) {
        descriptionStatus = "Good Description";
    } else {
        descriptionStatus = "too Long";
    }
    if (meta_description == "description Not found") {
        descriptionStatus = "Not Available";
        meta_description = "We couldn't find the description.";
    }

      // Return the modified response
      res.status(200).json({
        status: 200,
        title,
        titleStatus,
        meta_description,
        descriptionStatus,
      })
    } else {
      res.status(response.status).json({ error: data })
    }
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: "Internal Server Error" })
  }
}
