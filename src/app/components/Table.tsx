  import getZoneColor from "@/utils/getZoneColor";
  import { Row } from "../types"
  import TableRow from "./TableRow";
import { lstat } from "fs";
import Legend from "./Legend";

  interface TableProps {
    rows: Row[];
  }

  export default function Table(props: TableProps) {
    const { rows } = props;

    const getLastTeamColor = (i: number) => {
      if(rows[i].teams.length > 0) {
        return getZoneColor(rows[i].teams[0].position);
      }
      let prevIndex = i - 1;
      while(rows[prevIndex].teams.length === 0 ) {
        prevIndex--;
      }
      const filledRow = rows[prevIndex]
      const lastTeam = filledRow.teams.length - 1 ;
      return getZoneColor(filledRow.teams[lastTeam].position);
    }

    const getZonePosition = (row: Row, i: number) => {
      if(row.teams.length > 0 && row.teams[0].position === 1) {    
        return {
          first: true,
          last: false,
        };
      }
      if(row.teams.length > 0 && row.teams[row.teams.length - 1].position === 20) {
        return {
          first: false,
          last: true
        }
      }

      const nextRowColor = getLastTeamColor(i + 1);
      const prevRowColor = getLastTeamColor(i - 1);
      const rowColor = getLastTeamColor(i);
      
      if(nextRowColor === prevRowColor) {
        return { 
          first: false, 
          last: false 
        }
      }
      if(rowColor !== prevRowColor && rowColor !== nextRowColor) {
        return {
          first: true,
          last: true
        }
      }
      if(rowColor === prevRowColor && rowColor !== nextRowColor) {
        return {
          first: false,
          last: true
        }
      }
      return {
        first: true,
        last: false
      }
    }


    return (
      <>
        <div className="flex-col flex">
          {
            rows.map((row, i) => {
              const { first, last } = getZonePosition(row, i)
              return <TableRow row={row} key={row.points} className={`${getLastTeamColor(i)}`} zoneFirst={first} zoneLast={last}/>
            })
          }
        </div>
        <Legend/>
      </>
    )
  }