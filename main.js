document.addEventListener("polymer-ready", function(event) {
  var fs = chrome.fileSystem;

  // var toastGroupTemplate = document.querySelector('#toastGroup');
  // toastGroupTemplate.showToast = function(event) {
  //   document.querySelector('#toast').show();
  // };

  var inputTemplate = document.querySelector("#file-input");

  inputTemplate.openFileSelector = function() {
    document.querySelector("#select-or-save").disabled = true;
    fs.chooseEntry({
      accepts: [{
        mimeTypes: optimizer.ACCEPTED_MIME_TYPES
      }]
    }, function(entry) {
      document.querySelector("#select-or-save").disabled = false;
      if (!entry) {
        // TODO show error message
        return;
      }
      entry.file(function(file) {
        var reader = new FileReader();

        // TODO reader.onerror = errorHandler;
        reader.onloadend = function(e) {
          inputTemplate.svg = optimizer.parse(e.target.result, e.total);
        };

        reader.readAsText(file);
      });
    });
  };

  inputTemplate.startOptimizing = function () {
    inputTemplate.svg.optimize();
  };
});
