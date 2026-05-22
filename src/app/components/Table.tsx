import getZoneColor from "@/utils/getZoneColor";
import { Row } from "../types"
import TableRow from "./TableRow";

interface TableProps {
  rows: Row[];
}

export default function Table(props: TableProps) {
  const { rows } = props;

  const getLastTeamColor = (i: number) => {
    if(rows[i].teams.length > 0) {
      return '';
    }
    let prevIndex = i - 1;
    while(rows[prevIndex].teams.length === 0 ) {
      prevIndex--;
    }
    const filledRow = rows[prevIndex]
    const lastTeam = filledRow.teams.length - 1 ;
    return getZoneColor(filledRow.teams[lastTeam].position);
  }

  return (
    <>
    <div className="flex-col flex">
      {
        rows.map((row, i) => {
          return <TableRow row={row} key={row.points} className={`${getLastTeamColor(i)}`}/>
        })
      }
    </div>
    </>
  )
}