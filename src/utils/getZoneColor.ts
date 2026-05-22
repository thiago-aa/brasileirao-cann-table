  const getZoneColor = (position: number) => {
    if(position <= 4) {
      return 'bg-[#3B8AE1]';
    }
    if(position === 5) {
      return 'bg-[#5DCFE8]';
    }
    if(position <= 11) {
      return 'bg-[#F89D52]';
    }
    if(position <=16) {
      return 'bg-[#b8b8b8]';
    }
    return 'bg-[#ED645D]';
  }

  export default getZoneColor;