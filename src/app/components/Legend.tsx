export default function Legend() {
  const legends = [{
      label: 'Libertadores',
      color: 'liberta'
    },
    {
      label: 'Pré-libertadores',
      color: 'pre'
    },
    {
      label: 'Sulamericana',
      color: 'sula'
    },
    {
      label: 'intermediários',
      color: 'intermed'
    },
    {
      label: 'Z4',
      color: 'z4'
    },
  ]

  return (
    <div className="flex mt-5 ml-6.5 gap-x-8 gap-x-4 flex-wrap">
      {
        legends.map((legend, i) => {
          const backgroundColor = legend.color;
          return (
            <div  className="flex items-center gap-2" key={i}>
              <div 
                className={`w-3 rounded-xs aspect-square grow-0`} 
                style={{backgroundColor: `var(--color-${backgroundColor})`}}
              ></div>

              <p>{legend.label}</p>
            </div>
          )
        })
      }
    </div>
  )
}