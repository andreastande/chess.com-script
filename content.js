chrome.runtime.onMessage.addListener(function(request, _sender, _sendResponse) {
    if (request.action === "toggleCenter") {
        console.log("test")
        const boardDiv = document.getElementById('board-layout-main');
        if (boardDiv) {
            const isCentered = boardDiv.style.justifyContent === 'center';
            boardDiv.style.justifyContent = isCentered ? '' : 'center';
        }
    }
});