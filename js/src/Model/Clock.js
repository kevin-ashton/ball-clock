import Rail from './Rail';

export default class Clock{
  constructor(numberOfBalls, railSizes){
    //Build clock pieces
    let initialBalls = [];
    this.railSizes = railSizes;
    this.numberOfBalls = numberOfBalls;
    for(let i = 0; i < numberOfBalls; i++){
      initialBalls.push(i + 1)
    }
    this.queueRail = new Rail(numberOfBalls + 1, initialBalls);
    this.rails = [];
    let previousRail = this.queueRail;
    for(var i = railSizes.length; i--;) {
      let rail = new Rail(railSizes[i], []);
      rail.connect(previousRail, this.queueRail);
      this.rails.push(rail);
      previousRail = rail;
    }

    this.initialQueueBalls = initialBalls.slice(0);
  }

  /**
   * Reset the clock to initial state
   */
  reset(){
    for(var i = 0; i < this.rails.length; i++){
       this.rails[i].setRailBalls([]);
    }
    this.queueRail.setRailBalls(this.initialQueueBalls.slice(0));
  }
  getDetails(){
    return {
      railSizes: this.railSizes.slice(0),
      numberOfBalls: this.numberOfBalls
    }
  }
  /**
   * Increments the clock by one unit, presumably a minute
   */
  tick(){
    let ball = this.queueRail.shift();
    this.rails[this.rails.length - 1].add(ball);
  }

  /**
   * Ticks the clock until the queue is reset and then returns
   * the number of ticks transformed to days provided each tick is a minute
   *
   * @returns {number}
     */
  daysTillRepeat(){
    let minutes = 0;
    while(1){
      minutes++;
      this.tick();

      let queue = this.queueRail.getRailBalls();
      let initialQueue = this.initialQueueBalls;
      //Compare arrays
      if((initialQueue.length == queue.length) && initialQueue.every((value, index) => value === queue[index] )){
        break;
      }
    }

    let totalDays = minutes / 60 / 24;
    return totalDays;
  }

  /**
   * Creates an object that represents the current state of the clock
   *
   * @returns {{}}
     */
  getTime(){
    let time = {};
    time.queue = this.queueRail.getRailBalls().slice(0);
    this.rails.forEach((rail, index) =>{
      time[index] = rail.getRailBalls().slice(0);
    });

    return time;
  }
}
