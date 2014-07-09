chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('WebViewer.html', {
	'frame':"chrome",
    'bounds': {
		'width': 400,
		'height': 500
    }
  });
});