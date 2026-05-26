import { Team } from "../types";
import getZoneColor from "@/utils/getZoneColor";
interface TeamProps {
  team: Team,
  className?: string,
  compact: boolean,
}

export default function TeamCard(props: TeamProps){
  const { crest, shortName, position, tla} = props.team;
  const { className, compact } = props
  const baseColor = getZoneColor(position);
  const darkColor = `${getZoneColor(position)}-dark`;
  const linearGradient = `linear-gradient(to right, var(--color-${darkColor}), var(--color-${baseColor}), var(--color-${darkColor}))`;
  return (
    <div 
      className={`items-center gap-1 inline-flex h-1/1 flex-1 justify-center ${className} border-2 m-0.5 rounded-sm`} 
      style={{ borderColor: `var(--color-${baseColor})`, background: linearGradient }}
    >
      <p className="flex items-center justify-center rounded-full font-bold text-white w-3 aspect-square text-[9px] md:text-sm  md:mr-1">{`${position}° `}</p>
      <img className="w-6 h-6 md:w-8 md:h-8 " src={crest} alt={`${shortName} escudo`} />
      <p className="text-xs md:text-base text-white font-secondary">
        <span className="hidden md:block">{shortName}</span>
        <span className="md:hidden">{compact ? tla : shortName}</span>
      </p>
    </div>
  )
}