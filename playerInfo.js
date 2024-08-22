// Load the saved state when the page is loaded
function loadState() {
    chrome.storage.sync.get('hideRating', function(data) {
        if (data.hideRating) {
            const rating = document.getElementById('board-layout-player-top').getElementsByClassName("user-tagline-rating");
            if (rating[0]) {
                chrome.storage.sync.set({ opponentsRating: rating[0].textContent });
                rating[0].textContent = "(???)"
            }
        }
    })
}

// Toggle rating
chrome.runtime.onMessage.addListener(function(request, _sender, _sendResponse) {
    if (request.action === "toggleHideRating") {
        chrome.storage.sync.get('opponentsRating', function(data) {
            const rating = document.getElementById('board-layout-player-top').getElementsByClassName("user-tagline-rating");
            if (rating[0]) {
                const hideRating = request.isChecked;
                if (!hideRating) {
                    rating[0].textContent = data.opponentsRating
                } else {
                    rating[0].textContent = "(???)"
                }
            }
        })
    }
});

loadState();