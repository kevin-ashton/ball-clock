import m from 'mithril';

export default class ClockComp{
  constructor(clock, viewConfig){
    let clockDetails = clock.getDetails();
    this.clock = clock;
    this.viewConfig = viewConfig;
    this.incrementSpeed = m.prop(1);

    //Style variables
    this.railSizes = clockDetails.railSizes;
    this.numberOfBalls = clockDetails.numberOfBalls;
    this.maxRailWidth = Math.max(...this.railSizes);
    this.horzBallSpacing = 30;
    this.vertBallSapcing = 50;
    this.padding = 50;
    this.queueBallSpacing = 22;
    this.queueOffset = this.padding + this.horzBallSpacing * this.maxRailWidth + this.padding;
  }
  tick(){
    for(var i = 0; i < this.incrementSpeed(); i++){
      this.clock.tick.bind(this.clock)();
    }
  }
  reset(){
    this.clock.reset.bind(this.clock)();
  }
  getComponent(){
    return {
      view: ()=>{
        //Approximate location of bottom right
        let bottomPosition = this.calcBallPositionOnQueue(this.numberOfBalls - 1);
        return m('.clock', {style: {height: bottomPosition.y + 'px', width: (bottomPosition.x) + 'px' }}, [
          this.generateBackdrop(),
          this.generateBalls(),
          m('.controls', {style: {top: this.vertBallSapcing * (this.railSizes.length + 1) - 30 + 'px' }} ,[
            m('button.btn', {onclick: this.tick.bind(this)},'Tick'),
            m('button.btn', {onclick: this.reset.bind(this)},'Reset'),
            m('br'),
            m('br'),
            m('span', 'Rate: '),
            m("input", {onchange: m.withAttr("value", this.incrementSpeed), value: this.incrementSpeed(), type: 'number'}),
          ])
        ]);
      }
    }
  }
  calcBallPositionOnRail(railIndex, ballIndex) {
    let config = this.viewConfig[railIndex];
    return {
      x: this.horzBallSpacing * (ballIndex + 1 + config.offsetBall) + this.padding,
      y: (this.vertBallSapcing * ((this.railSizes.length - railIndex))) - (this.vertBallSapcing / 2)
    }
  }
  calcBallPositionOnQueue(ballIndex) {
    return {
      x: this.queueOffset,
      y: this.queueBallSpacing * (ballIndex + 1)
    }
  }
  generateBackdrop(){
    let backdropElements = [];

    //Outlines for queue
    for(var i = 0; i < this.numberOfBalls; i++){
      let position = this.calcBallPositionOnQueue(i);
      backdropElements.push(
        m('.ballOutline', {style: {left: position.x + 'px', top: position.y + 'px'}})
      )
    }

    //ViewConfig expects an entry for each rail
    var c = Object.keys(this.viewConfig);
    c.forEach((key) =>{
      let config = this.viewConfig[key];

      //Rail Label
      let labelPosition = this.calcBallPositionOnRail(key, 0);
      let label = m('.railLabel', {style: {top: labelPosition.y + 'px'}}, config.railLabel);
      backdropElements.push(label);

      //Ball outlines plus position labels on rails
      config.ballLabels.forEach((value, index)=>{
        let position = this.calcBallPositionOnRail(key, index - config.offsetBall);
        backdropElements.push(
          m('.ballOutline', {style: {left: position.x + 'px', top: position.y + 'px'}}, [
            m('.ballOutline_label', value)
          ])
        );
      });
      //In actual machines some rails have stationary balls which is accounted for with the offsetBall
      for(let i = 0; i < config.offsetBall; i++){
        let position = this.calcBallPositionOnRail(key, i - 1);
        backdropElements.push(
          m('.ball.kevin', {style: {left: position.x + 'px', top: position.y + 'px'}})
        );
      }
    });

    return backdropElements;
  }
  generateBalls(){
    let balls = [];
    let clockTime = this.clock.getTime();
    let k = Object.keys(clockTime);

    k.forEach((value) =>{
      //Place balls on queue
      if(value === 'queue'){
        clockTime[value].forEach((ballNum, ballIndex) => {
          let position = this.calcBallPositionOnQueue(ballIndex);
          balls.push(m('.ball', {key: ballNum, style: {left: position.x + 'px', top: position.y + 'px'}},
            m('.ball_label', ballNum)
          ));
        });
      }
      //Place balls on ails
      else{
        clockTime[value].forEach((ballNum, ballIndex) => {
          let position = this.calcBallPositionOnRail(parseInt(value), ballIndex);
          balls.push(m('.ball', {key: ballNum, style: {left: position.x + 'px', top: position.y + 'px'}},
            m('.ball_label', ballNum)
          ));
        });
      }
    });

    //Sort to keep order consistent so mithril only updates the dom elements allowing animation
    balls.sort((a,b) => a.attrs.key > b.attrs.key ? 1 : -1);

    return balls;
  }
}
