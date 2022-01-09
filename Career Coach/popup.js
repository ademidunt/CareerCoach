document.addEventListener('DOMContentLoaded', function (){
    document.querySelector('button').addEventListener('click', saveJob, false)

    Storage.prototype.setObj = function(key, obj) {
        return this.setItem(key, JSON.stringify(obj))
    }
    Storage.prototype.getObj = function(key) {
        return JSON.parse(this.getItem(key))
    }
    function saveJob() {
        // save something to local storage
        //use array pop and push functions
        var title = document.getElementById("jobTitle").value;
        var jobtitle = [];
        jobtitle = localStorage.getObj('jobTitle');
        jobtitle.push(title);
        localStorage.setObj('jobTitle', jobtitle);
        //alert('Grr.')
    }
}, false)