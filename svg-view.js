Polymer('svg-view', {
  svgChanged: function() {
  	// TODO check if it's an svg or not.
    this.innerHTML = this.svg;
  }
});

