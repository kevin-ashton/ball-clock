import assert from 'assert';
import Clock12Hour from './../src/Model/Clock12Hour';

describe('Ball Clock Object', () => {
  describe('Test calcClockState', () => {
    it('Simple Test 1', () => {
      let expected = JSON.stringify({
        Min: [1],
        FiveMin: [],
        Hour: [],
        Main: [2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27]
      });
      let clock = new Clock12Hour(27);
      for(var i = 0; i < 1; i++){
         clock.tick();
      }
      let result = clock.getTime();
      assert.equal(result, expected);
    });

    it('Simple Test 2', () => {
      let expected = JSON.stringify({
        Min: [1,2],
        FiveMin: [],
        Hour: [],
        Main: [3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27]
      });
      let clock = new Clock12Hour(27);
      for(var i = 0; i < 2; i++){
        clock.tick();
      }
      let result = clock.getTime();
      assert.equal(result, expected);
    });

    it('Simple Test 3', () => {
      let expected = JSON.stringify({
        Min: [],
        FiveMin: [5],
        Hour: [],
        Main: [6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,4,3,2,1]
      });
      let clock = new Clock12Hour(27);
      for(var i = 0; i < 5; i++){
        clock.tick();
      }
      let result = clock.getTime();
      assert.equal(result, expected);
    });

    it('Complex Test 1', () => {
      let expected = JSON.stringify({
        Min: [],
        FiveMin: [22,13,25,3,7],
        Hour: [6,12,17,4,15],
        Main: [11,5,26,18,2,30,19,8,24,10,29,20,16,21,28,1,23,14,27,9]
      });
      let clock = new Clock12Hour(30);
      for(var i = 0; i < 325; i++){
        clock.tick();
      }
      let result = clock.getTime();
      assert.equal(result, expected);
    });
  });
  
  describe('Test daysUntilRepeat', () => {
    it('Test 1', () => {
      assert.equal(new Clock12Hour(30).daysTillRepeat(), 15);
    });

    it('Test 2', () => {
      assert.equal(new Clock12Hour(45).daysTillRepeat(), 378);
    });

  });

});
