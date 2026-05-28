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
  const showBottomBorder = teams.length === 0 ? `border-b border-b-gray-400` : teams[teams.length - 1].position !== 20 ? `border-b border-b-gray-400` : ``;
  return (
    <div className="inline-flex items-center h-10 md:h-14 gap-1">
      <div className="text-white w-6.5 h-1/1 p-1 flex items-center font-primary">
        {points}
      </div>
      <div className={`flex items-center flex-1 h-1/1 border-dashed p-0.5 ${showBottomBorder}`}>
        {
          teams.map((value, i) => {
            return <TeamCard team={value} key={value.id} compact={teams.length >= 3}/>
          })
        }
      </div>
      <ZoneBar color={className} first={zoneFirst} last={zoneLast}/>
    </div>
  )
}