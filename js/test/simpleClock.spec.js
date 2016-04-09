import assert from 'assert';
import {daysUntilRepeat, calcClockState} from './../src/tools/simpleClock';

describe('Ball Clock Simple', () => {
  describe('Test calcClockState', () => {
    it('Simple Test 1', () => {
      let expected = JSON.stringify({
        Min: [1],
        FiveMin: [],
        Hour: [],
        Main: [2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27]
      });
      let result = calcClockState(27, 1);
      assert.equal(result, expected);
    });

    it('Simple Test 2', () => {
      let expected = JSON.stringify({
        Min: [1,2],
        FiveMin: [],
        Hour: [],
        Main: [3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27]
      });
      let result = calcClockState(27, 2);
      assert.equal(result, expected);
    });

    it('Simple Test 3', () => {
      let expected = JSON.stringify({
        Min: [],
        FiveMin: [5],
        Hour: [],
        Main: [6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,4,3,2,1]
      });
      let result = calcClockState(27, 5);
      assert.equal(result, expected);
    });

    it('Complex Test 1', () => {
      let expected = JSON.stringify({
        Min: [],
        FiveMin: [22,13,25,3,7],
        Hour: [6,12,17,4,15],
        Main: [11,5,26,18,2,30,19,8,24,10,29,20,16,21,28,1,23,14,27,9]
      });
      let result = calcClockState(30, 325);
      assert.equal(result, expected);
    });
  });

  describe('Test daysUntilRepeat', () => {
    it('Test 1', () => {
      assert.equal(daysUntilRepeat(30), 15);
    });

    it('Test 2', () => {
      assert.equal(daysUntilRepeat(45), 378);
    });

  });

});
