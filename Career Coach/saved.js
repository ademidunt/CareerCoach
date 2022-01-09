document.addEventListener('DOMContentLoaded', function (){
    //alert('Grr.')
    //localStorage.clear();
    // Storage.prototype.setObj = function(key, obj) {
    //     return this.setItem(key, JSON.stringify(obj))
    // }
    // Storage.prototype.getObj = function(key) {
    //     return JSON.parse(this.getItem(key))
    // }
    // when page loads get what is local storage to populate page
    const link = localStorage.getItem('Link');
    const cat = localStorage.getItem('JobTitle');
    const loc = localStorage.getItem('JobLoc');
    const des = localStorage.getItem('JobDescript');
    const deadline = localStorage.getItem('Deadline');
    const app = localStorage.getItem('App');

    var table = document.getElementById("myTable");
    //or add to an array first son all the jobs get saved
        var index = 1;
        // var row;
        //var cell2;

        var row = table.insertRow(1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        var cell6 = row.insertCell(5);
        cell1.innerHTML = link;
        cell2.innerHTML = cat;
        cell3.innerHTML = loc;
        cell4.innerHTML = des;
        cell5.innerHTML = deadline;
        cell6.innerHTML = app;


        // for (let i = 0; i < cat.length; i++) {
        //     var row = table.insertRow(index);
        //     //var cell1 = row.insertCell(i);
        //     //var cell1.innerHTML = cat[i];
        //     var cell1 = row.insertCell(0);
        //     cell2 = row.insertCell(1);
        //     var cell3 = row.insertCell(2);
        //     var cell4 = row.insertCell(3);
        //     var cell5 = row.insertCell(4);
        //     var cell6 = row.insertCell(5);
        //     cell1.innerHTML = cat[i];
        //     cell2.innerHTML = "loc[i]";
        //     cell3.innerHTML = "cat test";
        //     cell4.innerHTML = "cat test";
        //     cell5.innerHTML = "cat test";
        //     cell6.innerHTML = "cat test";
        //     index += 1;
        // }
        // for (let x = 0; x < loc.length; x++) {
        //     cell2.innerHTML = loc[x];
        // }
        //Storage.clear();
}, false)