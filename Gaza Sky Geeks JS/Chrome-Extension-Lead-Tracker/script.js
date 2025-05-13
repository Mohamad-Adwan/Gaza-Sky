let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
const deleteBtn = document.getElementById("delete-btn");
const tabBtn = document.getElementById("tab-btn");

inputBtn.addEventListener("click", () => {
  if (inputEl.value) {
    myLeads.push(inputEl.value);
    inputEl.value = "";
    renderLeads();
  }
});

deleteBtn.addEventListener("dblclick", () => {
  myLeads = [];
  renderLeads();
});

tabBtn.addEventListener("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
    myLeads.push(tabs[0].url);
    renderLeads();
  });
});

function renderLeads() {
  ulEl.innerHTML = "";
  myLeads.forEach(lead => {
    ulEl.innerHTML += `<li><a href="${lead}" target="_blank">${lead}</a></li>`;
  });
}