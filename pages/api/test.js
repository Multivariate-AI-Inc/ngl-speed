const userName = process.env.JS_API_USER_NAME || "Not Set";
const password = process.env.JS_API_PASSWORD || "Not Set";

export default function handler(req, res) {
    console.log("Username:", userName);
    console.log("Password:", password);

    res.status(200).json({ message: "Check logs", userName, password });
}
