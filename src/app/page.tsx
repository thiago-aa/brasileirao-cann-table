import Image from "next/image";
import TeamCard from "./components/TeamCard";
import { Row, Team } from "./types";
import TableRow from "./components/TableRow";

export default function Home() {
  const rowTest: Row = {
    "points": 18,
    "teams": [
      {
        "id": 1767,
        "tla": "FBP",
        "crest": "https://crests.football-data.org/1767.png",
        "position": 15,
        "points": 18
      },
      {
        "id": 6685,
        "tla": "SAN",
        "crest": "https://crests.football-data.org/6685.png",
        "position": 16,
        "points": 18
      },
      {
        "id": 1779,
        "tla": "COR",
        "crest": "https://crests.football-data.org/1779.png",
        "position": 17,
        "points": 18
      }
    ]
  }
  return (
    <main>
      <TableRow row={rowTest}/>
    </main>
  );
}
