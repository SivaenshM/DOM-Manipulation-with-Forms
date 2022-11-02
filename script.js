// Required fields selected by using Element Id , tag name and field name and assigned to Variables
let firstName = document.getElementById('first-name');
let lastName = document.getElementById('last-name');
let address = document.getElementById('address');
let pincode = document.getElementById('pincode');
let Gender = document.getElementById('gender');
let ChoiceofFood = document.getElementsByName('food');
let state = document.getElementById('state');
let country = document.getElementById('country');
let button = document.getElementById('button');
let data = document.querySelector('table tbody');
let tableRowLength = document.querySelectorAll('table tbody tr');
console.log(tableRowLength)

// Created a Function to collect a user choice food items and return as a array
const foodie = (ChoiceofFood) => {
    let fav = [];
    for(let i=0;i<ChoiceofFood.length;i++)  {
        if(ChoiceofFood[i].checked) {
            fav.push(ChoiceofFood[i].value);
            ChoiceofFood[i].checked = false;
        }
    }
    let items = fav.map((f,i) => `${i+1}-${f}.<br>`);
    return items.join(" ");
}

// Function Created to stop user selecting more the two choice of food items
const validateChoiceOfFood = () =>{  
    let numberOfCheckedItems = 0;  
    for(var i = 0; i < ChoiceofFood.length; i++)  {
        if(numberOfCheckedItems > 2)   {  
            //alert it user choosen more than two items
            alert("You can't select more than two favorite food items!");
            return ChoiceofFood[i].not("checked");
        } 
        if(ChoiceofFood[i].checked){
            numberOfCheckedItems++; 
        } 
    } 
}  

let count = 1;

//Function Created get a input values and dispaly inside a table body on button submit
function tableUpdate() {
    
    data.innerHTML +=`<tr>
    <td>${count}</td>
    <td>${firstName.value}</td>
    <td>${lastName.value}</td>
    <td>${address.value}</td>
    <td>${pincode.value}</td>
    <td>${Gender.value}</td>
    <td>${foodie(ChoiceofFood)}</td>
    <td>${state.value}</td>
    <td>India</td>
    </tr>`;
    count++;    
    //clear the filed values after submission
    firstName.value ="";
    lastName.value = "";
    address.value = "";
    pincode.value = "";
    Gender.checked = false;
    ChoiceofFood.checked= false;
    state.value = "Andhra Pradesh"
};
