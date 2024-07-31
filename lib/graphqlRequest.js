export async function graphqlRequest(query) {
  const url = "https://blogs.nextgrowthlabs.com/graphql";
  const headers = { "Content-Type": "application/json" };

  const res = await fetch(url, {
    headers,
    method: "POST",
    body: JSON.stringify(query),
  });
  const data = await res.json();
  return data;
}
