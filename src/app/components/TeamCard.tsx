import { Team } from "../types";
import getZoneColor from "@/utils/getZoneColor";
interface TeamProps {
  team: Team,
  className?: string
}

export default function TeamCard(props: TeamProps){
  const { crest, shortName, position } = props.team;
  const { className } = props
  
  return (
    <div className={`items-center gap-1 inline-flex h-1/1 flex-1 justify-center ${className} ${getZoneColor(position)}`}>
      <p className="flex items-center justify-center rounded-full font-bold text-white w-3 aspect-square text-[9px]">{`${position}° `}</p>
      <img className="w-6 h-6 md:w-8 md:h-8 " src={crest} alt={`${shortName} escudo`} />
      <p className="text-xs text-white">{shortName}</p>
    </div>
  )
}