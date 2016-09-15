var MenuView = require('../app/views/MenuView');
var $ = require('jquery');
var Backbone = require('backbone');

describe("MenuView", function() {
  beforeEach(function() {
    menuView = new MenuView();
    jasmine.getFixtures().fixturesPath = '../partials';
    jasmine.getFixtures().load('menu.html');
  });

  it("exists", function() {
    expect(menuView).toBeDefined()
  });

  it("renders the menu when it is initialized", function() {
    expect($("#menu")).toBeDefined()
  });

  describe("navigateToHVH", function() {
    it("navigates to the human vs. human route", function() {
      spyOn(Backbone.history, "navigate");
      menuView.navigateToHVH();
      expect(Backbone.history.navigate).toHaveBeenCalled();
    });

    it("hides the menu", function() {
      menuView.navigateToHVH();
      expect(menuView.$el).not.toBeVisible();
    });
  });

  describe("navigateToHVC", function() {
    it("navigates to the human vs. computer route", function() {
      spyOn(Backbone.history, "navigate");
      menuView.navigateToHVH();
      expect(Backbone.history.navigate).toHaveBeenCalled();
    });

    it("hides the menu", function() {
      menuView.navigateToHVH();
      expect(menuView.$el).not.toBeVisible();
    });
  });
});
