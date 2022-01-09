document.addEventListener('DOMContentLoaded', function (){
    alert('Grr.')

    // when page loads get what is local storage to populate page
    const cat = localStorage.getItem('jobTitle');
    var table = document.getElementById("myTable");
    //or add to an array first son all the jobs get saved
        
        var row = table.insertRow(0);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = cat;
        cell2.innerHTML = "cat test";
}, false)