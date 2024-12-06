const userName = process.env.JS_API_USER_NAME || "Not Set";
const password = process.env.JS_API_PASSWORD || "Not Set";
export const runtime = "edge"
export default function handler(req, res) {
    console.log("Username:", userName);
    console.log("Password:", password);
    return new Response(JSON.stringify({ message: "Check logs", userName, password }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
    })
}
