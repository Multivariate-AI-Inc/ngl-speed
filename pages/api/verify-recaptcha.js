export const runtime = "edge"
export default async function handler(req) {
  if (req.method !== "POST") {
    return new Response(
      JSON.stringify({ message: "Only POST requests allowed" }),
      { status: 405 },
    )
  }

  const data = await req.json()
  const { token } = data
  const secretKey = process.env.NEXT_PUBLIC_RECAPTCHA_SECRET_KEY

  if (!token) {
    return new Response(JSON.stringify({ message: "Token not found" }), {
      status: 405,
    })
  }

  try {
    const url = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
    const data = await response.json()
    if (data.success) {
      return new Response(JSON.stringify({ success: true }), {
        status: 200,
      })
    } else {
      return new Response(JSON.stringify({ message: "Failed to verify" }), {
        status: 405,
      })
    }
  } catch (error) {
    console.log("Error", error)
    return new Response(JSON.stringify({ message: "Internal Server Error" }), {
      status: 500,
    })
  }
}
