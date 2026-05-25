import { Row } from "../types";
import TeamCard from "./TeamCard";
import ZoneBar from "./ZoneBar";

interface TableRowProps {
  row: Row;
  className: string;
  zoneFirst: boolean;
  zoneLast: boolean;
}

export default function TableRow(props: TableRowProps) {
  const { points, teams } = props.row; 
  const { className, zoneFirst, zoneLast } = props;
  return (
    <div className="inline-flex items-center h-10 md:h-14 gap-1">
      <div className="text-white w-6.5 h-1/1 p-1 flex items-center font-primary">
        {points}
      </div>
      <div className={`flex items-center flex-1 h-1/1 border-dashed border-b border-b-gray-400 p-0.5`}>
        {
          teams.map((value, i) => {
            const showBorder = teams.length > 1 && i < teams.length - 1;
            return <TeamCard team={value} key={value.id} className={showBorder ? 'border-r' : ''}/>
          })
        }
      </div>
      <ZoneBar color={className} first={zoneFirst} last={zoneLast}/>
    </div>
  )
}