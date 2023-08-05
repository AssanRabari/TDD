function additionCalculator(...numbers) {
    return numbers.reduce((sum, item) => sum + item, 0);
  }
  
  export default additionCalculator;