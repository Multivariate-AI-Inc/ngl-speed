export async function graphqlRequest(query) {
  const url = "https://asokeywordtool.com/graphql";
  const headers = { "Content-Type": "application/json" };

  const res = await fetch(url, {
    headers,
    method: "POST",
    body: JSON.stringify(query),
    next: {
      revalidate: 10,
    },
  });
  const data = await res.json();
  return data;
}
