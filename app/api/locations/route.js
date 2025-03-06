const API_URL = process.env.API_URL

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get("query");

  try {
    const apiUrl = `${API_URL}/locations/search?query=${query}`;
    const response = await fetch(apiUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        'Accept': 'application/json',
      },
      cache: "no-store", // Avoid caching if needed
    });

    if (!response.ok) {
      return new Response(JSON.stringify({ error: "API request failed" }), { status: response.status });
    }

    const data = await response.json();
    return new Response(JSON.stringify(data), { status: 200, headers: { "Content-Type": "application/json" } });
  } catch (error) {
    console.error("Error fetching API:", error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), { status: 500 });
  }
}
