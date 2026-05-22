import { Row, Team } from "@/app/types";

export async function GET() {
  const res = await fetch(
    "https://api.football-data.org/v4/competitions/BSA/standings",
    {
      headers: {
        "X-Auth-Token": process.env.API_FOOTBALL_DATA_ORG_KEY!
      },
      next: { revalidate: 3600 }
    }
  );
  const data = await res.json();
  const table = data.standings[0].table;
  const leaderPoints = table[0].points;
  const tableSize = leaderPoints - table[table.length - 1].points + 1;
  const rows: Row[] = Array.from({ length: tableSize }, (_, i) => ({
    points: leaderPoints - i,
    teams: []
  }));
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  table.forEach((team: any) => {
    const teamIndex = leaderPoints - team.points;
    rows[teamIndex].teams.push({
      id: team.team.id,
      shortName: team.team.shortName,
      crest: team.team.crest,
      position: team.position,
      points: team.points
    });
  });
  return Response.json(rows);
}