// let color = '#3aa757';


// });

// chrome.browserAction.onClicked.addListener(function(tab) {
//   // No tabs or host permissions needed!
//   console.log('Turning ' + tab.url + ' red!');
// });

// chrome.browserAction.onClicked.addListener((tab) => {
//   console.log('hello');
// });

async function getCurrentTab() {
  let queryOptions = { active: true, currentWindow: true };
  let [tab] = await chrome.tabs.query(queryOptions);
  return tab;
}

async function getAllTabs() {
  let queryOptions = {currentWindow: true };
  let tabs = await chrome.tabs.query(queryOptions);
  return tabs;
}

// let color = '#3aa757';

// chrome.browserAction.onClicked.addListener((tab) => {
//   console.log('Default background color set to %cgreen', `color: ${color}`);
// });

chrome.runtime.onInstalled.addListener(() => {
  getAllTabs().then(tabs => {
    tabs.forEach(tab => {console.log(tab.title, tab.url)});
  });

});

