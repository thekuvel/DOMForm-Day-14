let form = document.querySelector("#form");
let tableBody = document.querySelector("#tableBody");

function getValues(form){
    let firstName = form.querySelector("#first-name").value;
    let lastName = form.querySelector("#last-name").value;
    let emailID = form.querySelector("#emailId").value;
    let food1 = form.querySelector("#food1").value;
    let food2 = form.querySelector("#food2").value;
    let genderArray = document.getElementsByName("gender");
    let gender = ""
    for(i=0;i<genderArray.length;i++){
        if(genderArray[i].checked){
            gender= genderArray[i].value;
        }
    }
    let pincode = form.querySelector("#pincode").value;
    let address = form.querySelector("#address").value;
    let state = form.querySelector("#state").value;
    let country = form.querySelector("#country").value;
    return [firstName,lastName,emailID,food1,food2,gender,pincode,address,state,country];
}

function addTableRow(values){
    // console.log(tableBody,values)
    let row = tableBody.insertRow();
    
    let cell0 = row.insertCell(0);
    let cell1 = row.insertCell(1);
    let cell2 = row.insertCell(2);
    let cell3 = row.insertCell(3);
    let cell4 = row.insertCell(4);
    let cell5 = row.insertCell(5);
    let cell6 = row.insertCell(6);
    let cell7 = row.insertCell(7);
    let cell8 = row.insertCell(8);
    let cell9 = row.insertCell(9);

    cell0.innerHTML = values[0];
    cell1.innerHTML = values[1];
    cell2.innerHTML = values[2];
    cell3.innerHTML = values[3];
    cell4.innerHTML = values[4];
    cell5.innerHTML = values[5];
    cell6.innerHTML = values[6];
    cell7.innerHTML = values[7];
    cell8.innerHTML = values[8];
    cell9.innerHTML = values[9];
}

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    let values = getValues(form);
    addTableRow(values);
    form.reset();
})