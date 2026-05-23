  const getZoneColor = (position: number) => {
    if(position <= 4) {
      return 'liberta';
    }
    if(position === 5) {
      return 'pre';
    }
    if(position <= 11) {
      return 'sula';
    }
    if(position <=16) {
      return 'intermed';
    }
    return 'z4';
  }

  export default getZoneColor;