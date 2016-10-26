var _ = require('lodash');

function mod(n, m) {
  return ((n % m) + m) % m;
}

class Cell {
  constructor(row, column) {
    this.row = row;
    this.column = column;
  }

  getNeighborCount(grid) {
    var rows = grid.length;
    var columns = grid[0].length;
    var above = grid[mod(this.row - 1, rows)][this.column];
    var below = grid[mod(this.row + 1, rows)][this.column];
    var left = grid[this.row][mod(this.column - 1, columns)];
    var right = grid[this.row][mod(this.column + 1, columns)];

    return _.sum([above, below, left, right]);
  }
};

class Critter extends Cell {
  willStayAlive(grid) {
    var neighbors = this.getNeighborCount(grid);
    return 1 < neighbors && neighbors < 4 ? 1 : 0;
  }
}

class Space extends Cell {
  willBeBorn(grid) {
    return this.getNeighborCount(grid) === 3 ? 1 : 0;
  }
}

exports.iterate = function (grid) {
  return _.map(grid, function (row, rowNum) {
    return _.map(row, function (column, columnNum) {
      var cell = grid[rowNum][columnNum] ? new Critter(rowNum, columnNum) : new Space(rowNum, columnNum);
      if (cell instanceof Critter) {
        return cell.willStayAlive(grid);
      } else if (cell instanceof Space) {
        return cell.willBeBorn(grid);
      }
    });
  });
};
