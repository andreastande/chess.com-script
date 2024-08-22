chrome.webNavigation.onHistoryStateUpdated.addListener(function (details) {
    // Check if the URL matches the pattern and inject the appropriate script
    if (details.url.startsWith("https://www.chess.com/game/live/")) {
        chrome.scripting.executeScript({
            target: { tabId: details.tabId },
            files: ['playerInfo.js']
        });
    }
});