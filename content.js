// Load the saved state when the page is loaded
function loadState() {
    chrome.storage.sync.get('isCentered', function(data) {
        const boardDiv = document.getElementById('board-layout-main');

        if (boardDiv) {
            const isCentered = data.isCentered || false;
            boardDiv.style.justifyContent = isCentered ? 'center' : '';
        }
    });
}

// Toggle centering and save the state
chrome.runtime.onMessage.addListener(function(request, _sender, _sendResponse) {
    if (request.action === "toggleCenter") {
        const boardDiv = document.getElementById('board-layout-main');
        if (boardDiv) {
            const isCentered = boardDiv.style.justifyContent === 'center';
            const newCenterState = !isCentered;
            boardDiv.style.justifyContent = isCentered ? '' : 'center';

            // Save the new state
            chrome.storage.sync.set({ isCentered: newCenterState });
        }
    }
});

loadState();