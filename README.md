# Game of Life Refactoring Kata
This kata currently includes working code and tests.  Your mission is to refactor the code with the Liskov Substitution Principle in mind.  While the first thing on your mind should be LSP, don't be afraid to use other design principles to make this happen.

This kata is based on the Game of Life kata at [codingdojo.org](http://codingdojo.org/cgi-bin/index.pl?KataGameOfLife).

## More info on the Single Responsibility Principle:
- [Wikipedia](https://en.wikipedia.org/wiki/Liskov_substitution_principle)
- [LSP Clean Coders video 1](https://cleancoders.com/episode/clean-code-episode-11-p1/show)
- [LSP Clean Coders video 2](https://cleancoders.com/episode/clean-code-episode-11-p2/show)

## Getting started
You should have [Node.js](https://nodejs.org), [npm](https://www.npmjs.com), and [jasmine-node](https://github.com/mhevery/jasmine-node).  You can install jasmine-node globally with `npm install -g jasmine-node`.

Once you have jasmine-node, you can run the tests with `jasmine-node game-spec.js`.  They should pass the first time before you make any changes.  Any time you make a change, you'll want to run the tests again to make sure you didn't break anything.

## Here are some questions to ask as you refactor
- One smell that can indicate a Liskov Substitution Principle violation is the presence of `instanceof`
- Once this has been recognized, try organizing the code so that LSP is not violated.
- Remember that we still don't want unnecessarily duplicated code.
