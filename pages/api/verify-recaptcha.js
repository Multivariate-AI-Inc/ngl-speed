import axios from "axios"
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
  const secretKey = process.env.NEXT_PUBLIC_RECAPTCHA_SECRET_KEY;

  if (!token) {
    return new Response(JSON.stringify({ message: "Token not found" }), {
      status: 405,
    })
  }

  try {
    const response = await axios.post(
      `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`,
    )
    if (response.data.success) {
      return new Response(JSON.stringify({ message: "Success" }), {
        status: 200,
      })
    } else {
      return new Response(JSON.stringify({ message: "Failed to verify" }), {
        status: 405,
      })
    }
  } catch (error) {
    console.log("Error", error)
    return new Response(JSON.stringify({ message: "Internal Server Error"}), {
      status: 500,
    })
  }
}
