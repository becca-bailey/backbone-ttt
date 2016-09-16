$ = require('jquery')
Backbone = require('backbone')

MockCompiler = Backbone.Model.extend(
  load: (templateName, onCompletion) ->
    html = @getHTMLForTemplateName(templateName)
    onCompletion(html)

  appendToContainer: (container, template) ->
    $(container).html(template)

  getHTMLForTemplateName: (templateName) ->
    if templateName == "game"
      """
      <div id="game">
        <div class="row">
          <div class="col s12 l6">
            <h1>Welcome to Tic Tac Toe!</h1>
            <section id="status-container"></section>
          </div>
          <section id="board-container"></section>
        </div>
        <div class="row">
          <div class="button-container col m4 offset-m4 s8 offset-s2">
            <a class="waves-effect waves-light btn-large center-align" id="play-again">Play Again</a>
          </div>
        </div>
      </div>
      """
    else if templateName == "board"
      """
      <div id="board" class="col s10 offset-s1 m6 offset-m3 l6">
        <div class="row">
          <div class="col s4 spot enabled left top valign-wrapper" id="0"></div>
          <div class="col s4 spot enabled top valign-wrapper" id="1"></div>
          <div class="col s4 spot enabled right top valign-wrapper" id="2"></div>
        </div>
        <div class="row">
          <div class="col s4 spot enabled left valign-wrapper" id="3"></div>
          <div class="col s4 spot enabled valign-wrapper" id="4"></div>
          <div class="col s4 spot enabled right valign-wrapper" id="5"></div>
        </div>
        <div class="row">
          <div class="col s4 spot enabled left bottom valign-wrapper" id="6"></div>
          <div class="col s4 spot enabled bottom valign-wrapper" id="7"></div>
          <div class="col s4 spot enabled right bottom valign-wrapper" id="8"></div>
        </div>
      </div>
      """
    else if templateName == "status"
      """
      <h3 id="status">Your turn!</h3>
      <p>Click any spot to play.</p>
      """
)

module.exports = MockCompiler
