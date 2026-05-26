export type Team = {
  id: number            
  shortName: string
  tla: string
  crest: string
  position: number
  points: number
}

export type Row = {
  points: number,
  teams: Team[]
}