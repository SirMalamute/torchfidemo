// send the page title as a chrome message
// just a demo that any script can be run on
chrome.runtime.sendMessage(document.title);
