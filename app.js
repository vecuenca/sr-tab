var self = require('sdk/self');
var tabs = require("sdk/tabs");

// Listen for tab openings.
tabs.on('open', function onOpen(tab) {
  console.log(tab.url);  
  if (tab.url === "about:newtab") {
    var worker = tab.attach({
      contentScriptFile: self.data.url('newtab.js')
    });

    worker.port.on("html", function(message) {
      console.log(message);
    });
  }  
});