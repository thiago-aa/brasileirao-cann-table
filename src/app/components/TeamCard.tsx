import { Team } from "../types";

interface TeamProps {
  team: Team,
  className?: string
}

export default function TeamCard(props: TeamProps){
  const { crest, tla } = props.team;
  const { className } = props

  return (
    <>
      <div className={`items-center gap-1 inline-flex p-1 ${className}`}>
        <img className="w-8 h-8" src={crest} alt={`${tla} escudo`} />
        <p>{tla}</p>
      </div>
    </>
  )
}