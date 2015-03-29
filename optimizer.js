this.optimizer = (function() {
  var TYPE_SVG = "image/svg+xml";
  var NAMESPACE_REGEX = /^xmlns:(\w+)$/;
  var KB = 1024, MB = KB * 1024, GB = MB * 1024;

  function Optimizer (svg, length) {
    this._html = svg;
    this._size = length;
    
    this.options = {
      whitespace: false
    };
    this.optimized = {};
  }

  function round(num) {
    return Math.round(num * 100) / 100;
  }

  // read-only property html
  Object.defineProperty(Optimizer.prototype, "html", {
    get: function() {
      return this._html;
    }
  });
  
  function humanizedSize(size) {
    if (size < KB) {
      return size + " bytes";
    } else if (size >= KB && size < MB) {
      return round(size / KB) + " KB";
    } else if (size >= MB && size < GB) {
      return round(size / MB) + " MB";
    } else {
      return round(size / GB) + " GB";
    }
  }
  // the read-only property size; it gives out the human readable size of the file
  // TODO i18n
  Object.defineProperty(Optimizer.prototype, "size", {
    get: function() {
      return humanizedSize(this._size);
    }
  });

  Optimizer.prototype.optimize = function() {
    console.log(this.options);
    var optimized = this._html;
    if (this.options.whitespace) {
      optimized = optimized.replace(/>\s+</gm, "><");
    }
    this.optimized.html = optimized;
    this.optimized.size = humanizedSize(optimized.length);
    console.log(this.size, this.optimized.size);
  };

  return {
    ACCEPTED_MIME_TYPES: [TYPE_SVG],
    parse: function(svg, length) { 
      return new Optimizer(svg, length);
    }
  };
}());

