document.addEventListener('DOMContentLoaded', function() {
    chrome.storage.sync.get('isCentered', function(data) {
        const checkbox = document.getElementById('applyStyle');
        checkbox.checked = data.isCentered || false;
    });

    chrome.storage.sync.get('hideRating', function(data) {
        const checkbox = document.getElementById('applyHideRating');
        checkbox.checked = data.hideRating || false;
    });

});

document.getElementById('applyStyle').addEventListener('change', function() {
    const isChecked = this.checked;

    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {action: "toggleCenter", isChecked: isChecked});
    });

    chrome.storage.sync.set({ isCentered: isChecked });
});

document.getElementById('applyHideRating').addEventListener('change', function() {
    const isChecked = this.checked;

    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {action: "toggleHideRating", isChecked: isChecked});
    });

    chrome.storage.sync.set({ hideRating: isChecked });
});