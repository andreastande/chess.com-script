// Load the saved state when the page is loaded
function loadState() {
    chrome.storage.sync.get("isCentered", function(data) {
        const boardDiv = document.getElementById("board-layout-main");

        if (boardDiv) {
            const isCentered = data.isCentered || false;
            boardDiv.style.justifyContent = isCentered ? "center" : "";
            boardDiv.style.paddingBottom = centerBoard ? "12rem" : "";
        }
    });
}

// Toggle centering
chrome.runtime.onMessage.addListener(function(request, _sender, _sendResponse) {
    if (request.action === "toggleCenter") {
        const boardDiv = document.getElementById("board-layout-main");
        if (boardDiv) {
            const centerBoard = request.isChecked;
            boardDiv.style.justifyContent = centerBoard ? "center" : "";
            boardDiv.style.paddingBottom = centerBoard ? "12rem" : "";
        }
    }
});

loadState();