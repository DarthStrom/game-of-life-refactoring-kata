var game = require('./game');

describe('game', function () {

  describe('Any live cell with fewer than two live neighbors dies, as if caused by under-population.', function () {

    it('single cell does not survive', function () {
      var before = [[0, 0, 0],
                    [0, 1, 0],
                    [0, 0, 0]];

      var after = [[0, 0, 0],
                   [0, 0, 0],
                   [0, 0, 0]];

      expect(game.iterate(before)).toEqual(after);
    });

    it('cells with only one neighbor do not survive', function () {
      var before = [[0, 0, 0, 0],
                    [0, 1, 1, 0],
                    [0, 0, 0, 0]];

      var after = [[0, 0, 0, 0],
                   [0, 0, 0, 0],
                   [0, 0, 0, 0]];

      expect(game.iterate(before)).toEqual(after);
    });

    it('lonely cells in a grid', function () {
      var before = [[0, 0, 0, 1],
                    [0, 0, 0, 0],
                    [0, 1, 0, 0]];

      var after = [[0, 0, 0, 0],
                   [0, 0, 0, 0],
                   [0, 0, 0, 0]];

      expect(game.iterate(before)).toEqual(after);
    });
  });

  describe('Any live cell with two or three live neighbors lives on to the next generation.', function () {

    it('two neighbors', function () {
      var before = [[0, 0, 0, 0, 0],
                    [0, 1, 1, 1, 0],
                    [0, 0, 0, 0, 0]];

      var after = [[0, 0, 0, 0, 0],
                   [0, 0, 1, 0, 0],
                   [0, 0, 0, 0, 0]];

      expect(game.iterate(before)).toEqual(after);
    });

    it('three neighbors', function () {
      var before = [[0, 0, 0, 0, 0],
                    [0, 1, 1, 1, 0],
                    [0, 0, 1, 0, 0],
                    [0, 0, 0, 0, 0]];

      var after = [[0, 0, 0, 0, 0],
                   [0, 0, 1, 0, 0],
                   [0, 0, 0, 0, 0],
                   [0, 0, 0, 0, 0]];

      expect(game.iterate(before)).toEqual(after);
    });
  });

  describe('Any live cell with more than three live neighbors dies, as if by over-population.', function () {

    it('four neighbors', function () {
      var before = [[0, 0, 0, 0, 0],
                    [0, 0, 1, 0, 0],
                    [0, 1, 1, 1, 0],
                    [0, 0, 1, 0, 0],
                    [0, 0, 0, 0, 0]];

      var after = [[0, 0, 0, 0, 0],
                   [0, 0, 0, 0, 0],
                   [0, 0, 0, 0, 0],
                   [0, 0, 0, 0, 0],
                   [0, 0, 0, 0, 0]];

      expect(game.iterate(before)).toEqual(after);
    });
  });

  describe('Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.', function () {

    it('cell birth', function () {
      var before = [[0, 0, 0, 0, 0],
                    [0, 0, 1, 0, 0],
                    [0, 1, 0, 1, 0],
                    [0, 0, 0, 0, 0]];

      var after = [[0, 0, 0, 0, 0],
                   [0, 0, 0, 0, 0],
                   [0, 0, 1, 0, 0],
                   [0, 0, 0, 0, 0]];

      expect(game.iterate(before)).toEqual(after);
    });
  });
});
