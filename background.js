chrome.app.runtime.onLaunched.addListener(function(launchData) {
  chrome.app.window.create(
    "index.html",
    {
      id: "main",
      resizable: false, 
      bounds: {
        width: 800,
        height: 654
      },
      frame: {
        type: "chrome",
        color: "#00ff88"
      }
    }
  );
});
