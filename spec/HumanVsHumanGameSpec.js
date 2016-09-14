var HumanVsHumanGame = require("../app/models/HumanVsHumanGame");
var MockClient = require("./mocks/MockClient");

describe("HumanVsHumanGame", function() {
  var initialBoard = ["", "", "", "", "", "", "", "", ""];
  var player1Move = ["X", "", "", "", "", "", "", "", ""]

  beforeEach(function() {
    client = new MockClient();
    game = new HumanVsComputerGame({client: client});
  });
});
