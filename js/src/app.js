import style from './style/style.scss';
import ClockComp from './Components/ClockComp';
import m from 'mithril';
import Clock from './Model/Clock';

/* 12 Hour Clock */
var clock12 = new Clock(27, [5,12,12]);
var viewConfig12 = {
  0: {
    railLabel: 'Hour',
    offsetBall: 1,
    ballLabels: [1,2,3,4,5,6,7,8,9,10,11,12]
  },
  1: {
    railLabel: 'FiveMin',
    offsetBall: 0,
    ballLabels: [5,10,15,20,25,30,35,40,45,50,55]
  },
  2: {
    railLabel: 'Min',
    offsetBall: 0,
    ballLabels: [1,2,3,4]
  }
};
var clockComp12 = new ClockComp(clock12, viewConfig12);
m.mount(document.getElementById('clock12'), clockComp12.getComponent());

/* 24 Hour Clock */
var clock24 = new Clock(39, [5,12,24]);
var viewConfig24 = {
  0: {
    railLabel: 'Hour',
    offsetBall: 1,
    ballLabels: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]
  },
  1: {
    railLabel: 'FiveMin',
    offsetBall: 0,
    ballLabels: [5,10,15,20,25,30,35,40,45,50,55]
  },
  2: {
    railLabel: 'Min',
    offsetBall: 0,
    ballLabels: [1,2,3,4]
  }
};
var clockCompBinary = new ClockComp(clock24, viewConfig24);
m.mount(document.getElementById('clock24'), clockCompBinary.getComponent());

/* Binary Counter Clock */
var clockbinary = new Clock(14, [2,2,2,2]);
var viewConfigbinary = {
  0: {
    railLabel: '8',
    offsetBall: 1,
    ballLabels: [0,1]
  },
  1: {
    railLabel: '4',
    offsetBall: 1,
    ballLabels: [0,1]
  },
  2: {
    railLabel: '2',
    offsetBall: 1,
    ballLabels: [0,1]
  },
  3: {
    railLabel: '1',
    offsetBall: 1,
    ballLabels: [0,1]
  }
};
var clockCompBinary = new ClockComp(clockbinary, viewConfigbinary);
m.mount(document.getElementById('clockbinary'), clockCompBinary.getComponent());

/* Decimal Counter Clock */
var clockdecimal = new Clock(28, [10,10,10]);
var viewConfigdecimal = {
  0: {
    railLabel: '100',
    offsetBall: 1,
    ballLabels: [0,1,2,3,4,5,6,7,8,9]
  },
  1: {
    railLabel: '10',
    offsetBall: 1,
    ballLabels: [0,1,2,3,4,5,6,7,8,9]
  },
  2: {
    railLabel: '1',
    offsetBall: 1,
    ballLabels: [0,1,2,3,4,5,6,7,8,9]
  }
};
var clockCompDecimal = new ClockComp(clockdecimal, viewConfigdecimal);
m.mount(document.getElementById('clockdecimal'), clockCompDecimal.getComponent());

/* Decimal Counter Clock */
var clockhexadecimal = new Clock(46, [16,16,16]);
var viewConfighexadecimal = {
  0: {
    railLabel: '256',
    offsetBall: 1,
    ballLabels: [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
  },
  1: {
    railLabel: '16',
    offsetBall: 1,
    ballLabels: [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
  },
  2: {
    railLabel: '1',
    offsetBall: 1,
    ballLabels: [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
  }
};
var clockCompHexadecimal = new ClockComp(clockhexadecimal, viewConfighexadecimal);
m.mount(document.getElementById('clockhexadecimal'), clockCompHexadecimal.getComponent());
