document.addEventListener('DOMContentLoaded', function() {
    // Retrieve the saved state and update the checkbox
    chrome.storage.sync.get('isCentered', function(data) {
        const checkbox = document.getElementById('applyStyle');
        checkbox.checked = data.isCentered || false;
    });
});

document.getElementById('applyStyle').addEventListener('change', function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {action: "toggleCenter"});
    });
});