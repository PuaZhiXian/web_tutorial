let myLeads = []
const input_el = document.getElementById("input-el")  // constant variable
const inputBtn = document.getElementById("input-btn")
const deleteBtn =document.getElementById("delete-btn")
const ulEl = document.getElementById("ul-el")
let localStorage_array = JSON.parse(localStorage.getItem("array"))
const tab_btn = document.getElementById("tab-btn")
if(localStorage_array){
    myLeads = localStorage_array;
    render(myLeads)
}
inputBtn.addEventListener("click", function () {
    myLeads.push(input_el.value)
    input_el.value = ""
    localStorage.setItem("array", JSON.stringify(myLeads))
    render(myLeads)
})
deleteBtn.addEventListener("dblclick",function () {
    myLeads = [];
    localStorage.clear();
    render(myLeads);
})
tab_btn.addEventListener("click",function () {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("array",myLeads)
        render(myLeads)
    })
})

function render(list) {
    let listItem = ""
    for (let i = 0; i < list.length; i++) {
        listItem += `
                  <li>
                       <a href=\"${list[i]}\" target=\"_blank\">${list[i]}</a>
                  </li>
                   `
        /*     //another alternative
             const li_el = document.createElement("li");
             li_el.textContent = myLeads[i];
             ulEl.append();*/
    }
    ulEl.innerHTML = listItem;

}




