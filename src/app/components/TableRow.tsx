import { Row } from "../types";
import TeamCard from "./TeamCard";

interface TableRowProps {
  row: Row;
  className?: string;
}

export default function TableRow(props: TableRowProps) {
  const { points, teams } = props.row; 
  const { className } = props;
  return (
    <div className="inline-flex items-center h-10 md:h-14">
      <div className=" bg-black text-white min-w-6.5 h-1/1 p-1 flex items-center">
        {points}
      </div>
      <div className={`flex items-center flex-1 h-1/1 ${className}`}>
        {
          teams.map((value, i) => {
            const showBorder = teams.length > 1 && i < teams.length - 1;
            return <TeamCard team={value} key={value.id} className={showBorder ? 'border-r' : ''}/>
          })
        }
      </div>
    </div>
  )
}