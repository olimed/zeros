module.exports = function getZerosCount(number) {
  // your implementation
 
  let numberModFiveWithoutRest = 5;
  let zerosCount = 0;

  while (number >= 5){
    number = Math.floor(number / 5);
    zerosCount = zerosCount + number;
  }

  return zerosCount
  
}
