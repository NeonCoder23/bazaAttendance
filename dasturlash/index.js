function students() {
  document.getElementById("forma").addEventListener("submit", function (event) {
    event.preventDefault(); 
    allStudentSaveAttendance()
    document.getElementById("forma").reset();
  });
};

students()

function allStudentSaveAttendance(){
  document.querySelectorAll(".boxes").forEach((e, i) => {
    var sana = document.querySelector("#forma #sana").value;
    var davomat = document.querySelector(`#myForm${i+1} #davomat`).value;
    
    var data = {
        sana: sana,
        davomat: davomat,
    };

    var existingData = localStorage.getItem(`myData${i+1}`);
    
    if (existingData) {
        existingData = JSON.parse(existingData);
    } else {
        existingData = [];
    }
    
    existingData.push(data);
    
    localStorage.setItem(`myData${i+1}`, JSON.stringify(existingData));
  })
}