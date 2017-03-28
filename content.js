// get isActive value from background.js
chrome.runtime.sendMessage({msg: "getState"}, function(response) {
	if (response.state === true) {
		// get text nodes
		const treeWalker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
		
		// loop through nodes and replace
		while (treeWalker.nextNode()) {
			const original = treeWalker.currentNode.nodeValue;
			treeWalker.currentNode.nodeValue = original.replace(/[\uD83C-\uDBFF\uDC00-\uDFFF]+/g, '[no]');
		}
	}
});