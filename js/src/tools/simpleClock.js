let hour = [];
let fiveMin = [];
let min = [];
let main = [];

/**
 * Given a number of balls determines how many days until the balls repeat
 *
 * @param numOfBalls
 * @returns {number}
 */
export function daysUntilRepeat(numOfBalls){
  resetClock(numOfBalls);
  let initialMain = main.slice(0);

  let minutes = 0;
  while(1){
    minutes++;
    tickMin();
    
    //Compare arrays
    if((initialMain.length == main.length) && initialMain.every((value, index) => value === main[index] )){
      break;
    }
  }

  let totalDays = minutes / 60 / 24;
  return totalDays;
}

/**
 * Calculates the position of all balls in the clock given the inputs
 *
 * @param numOfBalls
 * @param runMinutes
 */
export function calcClockState(numOfBalls, runMinutes){
  resetClock(numOfBalls);

  for(let i = 0; i < runMinutes; i++){
    tickMin();
  }

  let answer = {
    Min: min,
    FiveMin: fiveMin,
    Hour: hour,
    Main: main
  };

  return JSON.stringify(answer);
}

/**
 * Tick one minute ball
 */
function tickMin(){
  let ball = main.shift();

  if(min.length >= 4){
    main = main.concat(min.reverse().splice(0));
    tickFiveMin(ball);
  }
  else{
    min.push(ball);
  }

}

/**
 * Tick five minute ball
 *
 * @param ball
 */
function tickFiveMin(ball){
  if(fiveMin.length >= 11){
    main = main.concat(fiveMin.reverse().splice(0));
    tickHour(ball);
  }
  else{
    fiveMin.push(ball);
  }

}

/**
 * Tick hour ball
 *
 * @param ball
 */
function tickHour(ball){

  if(hour.length >= 11){
    main = main.concat(hour.reverse().splice(0));
    main.push(ball);
  }
  else{
    hour.push(ball);
  }

}

/**
 * Resets the clock (i.e. return all balls to the main tray)
 *
 * @param numberOfBalls
 */
function resetClock(numberOfBalls){
  if(numberOfBalls < 27 || 127 < numberOfBalls){
    //Throw an error for lack of an error handling convention
    throw new Error('Out of range. The number of balls in the clock must be between 27 and 127');
  }

  hour = [];
  fiveMin = [];
  min = [];
  main = [];

  for(let i = 0; i < numberOfBalls; i++){
    main.push(i + 1);
  }
}
