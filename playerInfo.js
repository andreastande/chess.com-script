// Load the saved state when the page is loaded
function loadState() {
    const intervalRating = setInterval(() => {
        const rating = document.getElementById("board-layout-player-top").getElementsByClassName("user-tagline-rating");
        if (rating[0]) {
            chrome.storage.sync.set({ opponentsRating: rating[0].textContent });
            chrome.storage.sync.get("hideRating", function(data) {
                if (data.hideRating) {
                    rating[0].textContent = "(???)"
                }
            });
            clearInterval(intervalRating);
        }
    }, 100);

    const intervalChat = setInterval(() => {
        const chat = document.getElementById("board-layout-sidebar").getElementsByClassName("resizable-chat-area-legacy-component");
        if (chat[0]) {
            chrome.storage.sync.get("hideChat", function(data) {
                chat[0].style.display = data.hideChat ? "none" : "block";
            });
            clearInterval(intervalChat);
        }
    }, 100);
}

// Toggle rating
chrome.runtime.onMessage.addListener(function(request, _sender, _sendResponse) {
    if (request.action === "toggleHideRating") {
        const rating = document.getElementById("board-layout-player-top").getElementsByClassName("user-tagline-rating");
        if (rating[0]) {
            const hideRating = request.isChecked;
            if (!hideRating) {
                chrome.storage.sync.get("opponentsRating", function(data) {
                    rating[0].textContent = data.opponentsRating
                })
            } else {
                rating[0].textContent = "(???)"
            }
        }
    } else if (request.action === "toggleHideChat") {
        const chat = document.getElementById("board-layout-sidebar").getElementsByClassName("resizable-chat-area-legacy-component");
        if (chat[0]) {
            const hideChat = request.isChecked;
            chat[0].style.display = hideChat ? "none" : "block"
        }
    }
});

loadState();