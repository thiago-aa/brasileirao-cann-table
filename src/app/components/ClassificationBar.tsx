interface ClassificationBarProps {
  zonesCount: {color: string, count: number} [];
}

export default function ClassificationBar (props: ClassificationBarProps) {
  const { zonesCount } = props;
  const rowsCount = zonesCount.reduce((sum, zone) => (sum + zone.count), 0);
  const zonePercentage = zonesCount.map((zone, i) => ({ color: zone.color, percentage: (zone.count / rowsCount) * 100 }));


const gradientStops = zonePercentage.reduce((acc: { stops: string[], accumulated: number }, zone) => {
  const start = acc.accumulated;
  const end = start + zone.percentage * 0.5;
  acc.stops.push(`var(--color-${zone.color}) ${start}% ${end}%`);
  acc.accumulated = start + zone.percentage;
  return acc;
}, { stops: [], accumulated: 0 }).stops;

const gradient = `linear-gradient(to bottom, ${gradientStops.join(', ')})`;
  return (
  <div 
    className="w-2 md:w-3 rounded-2xl" 
    style={{
      background: gradient,
    }}
  >
  </div>
)
}