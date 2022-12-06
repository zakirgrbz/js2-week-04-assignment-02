const isTheWordSplit = (zArray) => {
    let word = zArray[0];
    let array = zArray[1].split(",");
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array.length; j++) {
        if (array[i] + array[j] == word) {
          return array[i] + "," + array[j];
        }
      }
    }
    return "not possible";
  };
  
  export { isTheWordSplit };
  
