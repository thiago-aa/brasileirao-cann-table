import getZoneColor from "@/utils/getZoneColor";
import { Row } from "../types"
import TableRow from "./TableRow";
import Legend from "./Legend";
import ClassificationBar from "./ClassificationBar";

  interface TableProps {
    rows: Row[];
  }

  export default function Table(props: TableProps) {
    const { rows } = props;

    const getLastTeamColor = (i: number) => {
      if(rows[i].teams.length > 0) {
        return getZoneColor(rows[i].teams[0].position);
      }
      let nextIndex = i + 1;
      while(rows[nextIndex].teams.length === 0 ) {
        nextIndex++;
      }
      const filledRow = rows[nextIndex]
      const lastTeam = filledRow.teams.length - 1 ;
      
      return getZoneColor(filledRow.teams[0].position);
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

    const zonesCount = rows.reduce((acc: { color: string, count: number }[], row, i) => {
      const color = getLastTeamColor(i);
      const last = acc[acc.length - 1];
      if (last && last.color === color) {
        last.count++;
      } else {
        acc.push({color: color, count: 1})
      }
      return acc;
    }, [])


    return (
      <>
      <div className="flex gap-3">
        <div className="flex-col flex flex-1">
          {
            rows.map((row, i) => {
              const { first, last } = getZonePosition(row, i)
              return <TableRow row={row} key={row.points} className={`${getLastTeamColor(i)}`} zoneFirst={first} zoneLast={last}/>
            })
          }
        </div>
        <ClassificationBar zonesCount={zonesCount} />
      </div>
        <Legend/>
      </>
    )
  }