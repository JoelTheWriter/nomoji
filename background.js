// default to active
var isActive = true;

// toggle active and browser action badge
function toggleActive() {
	if (isActive === true) {
		isActive = false;
		chrome.browserAction.setIcon({path: "icons/icon-16-2.png"});
		chrome.browserAction.setTitle({title: "Click then refresh to hide emojis."});
	} else {
		isActive = true;
		chrome.browserAction.setIcon({path: "icons/icon-16.png"});
		chrome.browserAction.setTitle({title: "Click then refresh to show emojis."});
	}
}

// toggle on/off with browser action
chrome.browserAction.onClicked.addListener(toggleActive);


// Listen for message from content.js
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.msg == "getState")
      sendResponse({state: isActive});
  });