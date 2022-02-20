let count_el = document.getElementById("count-el")
let record= document.getElementById("record-el")

function increment(){
    let count = count_el.innerText
    count ++
    console.log("increment btn clicked : " + count)
    count_el.innerText = count
}

function save(){
    console.log("save btn clicked")
    record.textContent += count_el.innerText + " - "
    count_el.innerText = 0
}
