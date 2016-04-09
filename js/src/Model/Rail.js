export default class Rail{
  constructor(railCapacity, initialBalls){
    this.railCapacity = railCapacity;
    this.balls = initialBalls || [];
  }

  /**
   * Connects the rail to the queue and the next rail 
   * 
   * @param nextRail
   * @param queueRail
     */
  connect(nextRail, queueRail){
    this.nextRail = nextRail;
    this.queueRail = queueRail;
  }

  /**
   * Drops a ball into the rail
   * 
   * @param ball
     */
  add(ball){
    if(this.balls.length >= this.railCapacity - 1){

      let n = this.balls.length;
      for(var i = 0; i < n; i++){
        this.queueRail.add(this.balls.pop());
      }

      this.nextRail.add(ball);
    }
    else{
      this.balls.push(ball);
    }
  }
  
  setRailBalls(balls){
    this.balls = balls;
  }
  /**
   * Returns a copy of the balls
   * 
   * @returns {Array.<T>}
     */
  getRailBalls(){
    return this.balls.slice(0);
  }

  /**
   * Shift the 1st ball off the rail and return it
   * 
   * @returns {T}
     */
  shift(){
    return this.balls.shift();
  }
}
