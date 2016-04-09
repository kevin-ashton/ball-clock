import Clock from './Clock';

export default class Clock12Hour extends Clock{
  /**
   * Builds what we would recognize as a 12 hour clock
   */
  constructor(numberOfBalls){
    super(numberOfBalls, [5,12,12])
  }

  /**
   * Return a 12 hour time in current time in JSON format
   */
  getTime(){
    let rawTime = super.getTime();
    return JSON.stringify({
      Min: rawTime[2],
      FiveMin: rawTime[1],
      Hour: rawTime[0],
      Main: rawTime.queue
    });
  }
}
