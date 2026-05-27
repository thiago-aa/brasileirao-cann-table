interface ZoneBarProps {
  color: string;
  first?: boolean;
  last?: boolean;
}

export default function ZoneBar(props: ZoneBarProps) {
  const { color, first, last } = props;
  const className = first && last ? 'rounded-t-full rounded-b-full mb-1 mt-1' : first ? 'rounded-t-full mt-1' : last ? 'rounded-b-full mb-1' : '';

  return (
    <div 
      className={`h-1/1 border-b w-1.5 mr-2 md:w-2.5 md:ml-1 ${className}`}
      style={{ borderColor: `var(--color-${color})`, background: `var(--color-${color})` }}
    >

    </div>
  )
}