const fs = require('fs');
const path = require('path');
async function main () {
  const res = await fetch(
    "https://api.football-data.org/v4/competitions/BSA/standings",
    {
      headers: {
        "X-Auth-Token": '04758a9d421f48228193259add65d457'
      }
    }
  );
  const data = await res.json();

  const crests = data.standings[0].table.map((team) => ({id: team.team.id, crest: team.team.crest}));

  fs.mkdirSync(path.join('public', 'crests'), { recursive: true });

  for (const crest of crests) {
    const res = await fetch(crest.crest);
    const buffer = await res.arrayBuffer();
    const filePath = path.join('public', 'crests', `${crest.id}.png`);
    fs.writeFileSync(filePath, Buffer.from(buffer));
  }
}

main();