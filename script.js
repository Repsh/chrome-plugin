const qoutes = [
    "Jāsāk strādāt pietiek skatīties!",
    "Izbeidz",
    "Tagad!"

];

const places = [
    "ytd-rich-grid-renderer"
];

let count = 0;
chrome.runtime.onMessage.addListeners(function (request, sender, sendResponse) {
    const page = document.documentElement;

    const text = "<h1>" + qoutes[count] + "</h1>";
    count = count + 1;
    if (qoutes.length <= count ) {
        count = 0;
    }
    for ( const place of places) {
        page.querySelector(place).innerHTML = html; 
    }
    
});