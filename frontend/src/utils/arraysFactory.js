export function createArrayYears() {
    const start = 1900;
    const years = new Array(new Date().getFullYear() - start + 1)
      .fill(0)
      .map((_, i) => {
        const value = start + i;
        return { value, label: value };
      })
      .reverse();
      return(years)
  };
  
  export function createWeightArray(){
  
      let weightArray = [];
        for (let i = 20; i <= 200; i++) {
          weightArray.push({ value: `${i}Kg`, label: `${i}Kg`});
        }
        return weightArray;
      };
  
  export function createCentimeterArray(){
  
      let centimeterArray = [];
        for (let i = 100; i <= 300; i++) {
          centimeterArray.push({ value: `${i}cm`, label: `${i}cm`});
        }
        return centimeterArray;
      };