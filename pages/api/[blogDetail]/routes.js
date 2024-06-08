import { getPostData } from "../../../lib/posts";
export const runtime = "experimental-edge";

export default async function GET(req, res) {
  const url = req.url.split("/api/")[1].split("/routes")[0];
  const postData = await getPostData(url);
  res.status(200).json(postData);
}
