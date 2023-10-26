let namesList = []
const nameEl = document.getElementById("name-el")
let ageList = []
const ageEl = document.getElementById("age-el")
let aadharNo = []
const aadharEl = document.getElementById("aadhar-el")
let fcodeList = []
const fcodeEl = document.getElementById("fcode-el")
let icardList = []
const idEl= document.getElementById("id-el")
const errMsg=document.getElementById("err-msg")
const searchText = document.getElementById("search-text")
let tableEl= document.getElementById("table-el")

const nameFromLocalStorage = JSON.parse( localStorage.getItem("namesList"))
const ageFromLocalStorage = JSON.parse( localStorage.getItem("ageList"))
const aadharFromLocalStorage = JSON.parse( localStorage.getItem("aadharNo"))
const fcodeFromLocalStorage = JSON.parse( localStorage.getItem("fcodeList"))
const icardFromLocalStorage = JSON.parse( localStorage.getItem("icardList"))

if (nameFromLocalStorage) {
    namesList = nameFromLocalStorage
    renderTable()
}

if (ageFromLocalStorage) {
    ageList = ageFromLocalStorage
    renderTable()
}

if (aadharFromLocalStorage) {
    aadharNo = aadharFromLocalStorage
    renderTable()
}

if (fcodeFromLocalStorage) {
    fcodeList = fcodeFromLocalStorage
    renderTable()
}

if (icardFromLocalStorage) {
    icardList = icardFromLocalStorage
    renderTable()
}

function addBtn(){
    if (nameEl.value === " " || ageEl.value === " " || aadharEl.value === " " || fcodeEl.value === " " || idEl.value === " "){
        errMsg.innerHTML= `<p> Please fill in all the fields <p>`
    }
    else{
        namesList.push(nameEl.value)
        nameEl.value= " "
        localStorage.setItem("namesList", JSON.stringify(namesList))
        ageList.push(ageEl.value)
        ageEl.value = " "
        localStorage.setItem("ageList", JSON.stringify(ageList))
        aadharNo.push(aadharEl.value)
        aadharEl.value = " "
        localStorage.setItem("aadharNo", JSON.stringify(aadharNo))
        fcodeList.push(fcodeEl.value)
        fcodeEl.value = " "
        localStorage.setItem("fcodeList", JSON.stringify(fcodeList))
        icardList.push(idEl.value)
        idEl.value = " "
        localStorage.setItem("icardList", JSON.stringify(icardList))
        errMsg.innerHTML= " "
        renderTable()
    }

}

function renderTable() {
    let tableItemsTemp = " "
    for ( let i=0 ; i < namesList.length  ; i++){
        tableItemsTemp += `
        <tr>
            <td> ${namesList[i]}</td>
            <td> ${ageList[i]}</td>
            <td> ${aadharNo[i]} </td>
            <td> ${fcodeList[i]} </td>
            <td> ${icardList[i]} </td>
            <td>
                <button id="location"> Get Location </button>
                <button value="${i}" onclick="deleteSingle()" id="delete-row"> Delete </button>
            </td>
        </tr>
        `
    }
    tableEl.innerHTML =`        
    <tr>
        <th>NAME</th>
        <th>AGE</th>
        <th>AADHAR NO</th>
        <th>FAMILY CODE</th>
        <th>ID CARD NO</th>
        <th>ACTIONS</th>
    </tr>` + tableItemsTemp
}

function deleteAll(){
    namesList = []
    ageList = []
    aadharNo = []
    fcodeList = []
    icardList = []
    localStorage.clear()
    renderTable()
}

function searchName(){
    for ( let i=0 ; i < namesList.length ; i++){
        if (searchText.value === namesList[i]){
            tableEl.innerHTML =`        
            <tr>
                <th>NAME</th>
                <th>AGE</th>
                <th>AADHAR NO</th>
                <th>FAMILY CODE</th>
                <th>ID CARD NO</th>
                <th>ACTIONS</th>
            </tr>
            <tr>
                <td> ${namesList[i]}</td>
                <td> ${ageList[i]}</td>
                <td> ${aadharNo[i]} </td>
                <td> ${fcodeList[i]} </td>
                <td> ${icardList[i]} </td>
                <td>
                    <button> Get Location </button>
                    <button> Delete </button>
                </td>
            </tr>
            `
        }
    }
}

function deleteSingle(value){
    namesList.splice(value,1)
    localStorage.setItem("namesList", JSON.stringify(namesList))
    ageList.splice(value,1)
    localStorage.setItem("ageList", JSON.stringify(ageList))
    aadharNo.splice(value,1)
    localStorage.setItem("aadharNo", JSON.stringify(aadharNo))
    fcodeList.splice(value,1)
    localStorage.setItem("fcodeList", JSON.stringify(fcodeList))
    icardList.splice(value,1)
    localStorage.setItem("icardList", JSON.stringify(icardList))
    renderTable()
}