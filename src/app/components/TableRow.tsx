import { Row, Team } from "../types";
import TeamCard from "./TeamCard";

interface TableRowProps {
  row: Row;
}

export default function TableRow(props: TableRowProps) {
  const { points, teams } = props.row; 
  return (
    <>
    <div className="inline-flex items-center gap-1">
      <div>
        {points}
      </div>
      <div>
        {
          teams.map((value, i) => {
            if(i === teams.length - 1 || teams.length === 1) {
              return <TeamCard team={value} key={value.id}/>
            }
            return <TeamCard team={value} key={value.id} className="border-r"/>
          })
        }
      </div>
    </div>
    </>
  )
}