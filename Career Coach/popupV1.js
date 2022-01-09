// document.getElementById("button").onclick = function() {saveJob()};

// function saveJob() {
//     var table = document.getElementById("myTable");
//     var row = table.insertRow();
//     var cell1 = row.insertCell();
//     var cell2 = row.insertCell();
//     cell1.innerHTML = "NEW CELL1";
//     cell2.innerHTML = "NEW CELL2";
// }

//the table does not exist
document.addEventListener('DOMContentLoaded', function (){
    document.querySelector('button').addEventListener('click', saveJob, false)

    function saveJob() {
        var table = document.getElementById("myTable");
        
        var row = table.insertRow(0);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = "NEW CELL1";
        cell2.innerHTML = "NEW CELL2";

        // var cell = document.getElementById("r1c1");
        // cell.innerHTML = "12345!!";

        alert('Grr.')
    }
}, false)


// <!-- <button type="button" onclick="myFunction()">Try it</button> -->
// <!-- <script src="Content.js">
// function myFunction() {
//   var table = document.getElementById("myTable");
//   var row = table.insertRow(0);
//   var cell1 = row.insertCell(0);
//   var cell2 = row.insertCell(1);
//   cell1.innerHTML = "NEW CELL1";
//   cell2.innerHTML = "NEW CELL2";
// }
// </script> -->