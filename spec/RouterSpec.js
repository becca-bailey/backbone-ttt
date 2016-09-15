Backbone = require('backbone');
Router = require('../app/Router');
sinon = require('sinon');
MenuView = require('../app/views/MenuView');
GameView = require('../app/views/GameView');
HumanVsComputerGame = require('../app/models/HumanVsComputerGame');
HumanVsHumanGame = require('../app/models/HumanVsHumanGame');

describe('Router', function() {
  beforeEach(function() {
    this.router = new Router();
    this.routeSpy = sinon.spy();
    try {
      Backbone.history.start({silent: true})
    } catch(e) {}
    this.router.navigate("test");
  });

  it('routes to main for the index route', function() {
    this.router.bind("route:main", this.routeSpy);
    this.router.navigate("", true);
    expect(this.routeSpy).toHaveBeenCalledOnce();
    expect(this.routeSpy).toHaveBeenCalledWith();
  });

  it('routes to humanVsComputer for humanvscomputer route', function() {
    this.router.bind("route:humanVsComputer", this.routeSpy);
    this.router.navigate("humanvscomputer", true);
    expect(this.routeSpy).toHaveBeenCalledOnce();
  });

  it('routes to humanVsHuman for humanvshuman route', function() {
    this.router.bind("route:humanVsHuman", this.routeSpy);
    this.router.navigate("humanvshuman", true);
    expect(this.routeSpy).toHaveBeenCalledOnce();
  });

  describe("main", function() {
    beforeEach(function() {
      this.router = new Router();
      this.menuViewStub = sinon.stub(window, "MenuView")
        .returns(new MenuView());
      this.router.main();
    });

    afterEach(function() {
      window.MenuView.restore();
    });

    it("creates a menu view", function() {
      expect(this.menuViewStub).toHaveBeenCalledOnce();
    });
  });

  describe("humanVsComputer", function() {
    beforeEach(function() {
      this.hvcgame = new HumanVsComputerGame();
      this.humanVsComputerGameStub = sinon.stub(window, "HumanVsComputerGame")
        .returns(this.hvcgame);
      this.gameViewStub = sinon.stub(window, "GameView")
        .returns(new GameView());
      this.router.humanVsComputer();
    });

    afterEach(function() {
      window.GameView.restore();
    });

    it("creates a game view", function() {
      expect(this.gameViewStub).toHaveBeenCalledOnce();
    });
  });

  describe("humanVsHuman", function() {
    beforeEach(function() {
      this.hvhgame = new HumanVsHumanGame();
      this.humanVsComputerGameStub = sinon.stub(window, "HumanVsHumanGame")
        .returns(this.hvhgame);
      this.gameViewStub = sinon.stub(window, "GameView")
        .returns(new GameView());
      this.router.humanVsHuman();
    });

    afterEach(function() {
      window.GameView.restore();
    });

    it("creates a game view", function() {
      expect(this.gameViewStub).toHaveBeenCalledOnce();
    });
  });
});
