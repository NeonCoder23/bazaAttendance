function allStudentFunction(){
  document.querySelectorAll(".box").forEach((e, i) => {
    let storedData = localStorage.getItem(`myData${i+1}`);

// If there is stored data, parse it from JSON
if (storedData) {
  storedData = JSON.parse(storedData);

  // Get the table body element
  let tableBody = document.getElementById(`myTable${i}`).getElementsByTagName("tbody")[0];

  // Loop through the stored data and create a table row for each entry
  let row = tableBody.insertRow(-1);
  let row1 = tableBody.insertRow(-1);
  let row2 = tableBody.insertRow(-1);
  row1.parentElement = row;
  row2.parentElement = row;
  for (let i = 0; i < storedData.length; i++) {
    let sanaCell = row1.insertCell(0);
    let davomatCell = row2.insertCell(0);





    sanaCell.innerHTML = storedData[i].sana;
    davomatCell.innerHTML = storedData[i].davomat;

    if (storedData[i].davomat === "+") {
      davomatCell.style.backgroundColor = "lime"
    } else if(storedData[i].davomat === "-"){
      davomatCell.style.backgroundColor = "red"
    } else {
      davomatCell.style.backgroundColor = "azure"      
    }

  }

  }
  })
    
}

allStudentFunction()