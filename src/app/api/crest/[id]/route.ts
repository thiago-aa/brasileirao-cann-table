export async function GET(request: Request, context: { params: Promise<{ id: string }> }) {
  const { id } = await context.params;
  const res = await fetch(`https://crests.football-data.org/${id}.png`);
  const buffer = await res.arrayBuffer();
  const contentType = res.headers.get("Content-Type") || "image/png";
  return new Response(buffer, {
    headers: {
      "Content-Type": contentType,
      "Cache-Control": "public, max-age=604800",
    },
  });
}