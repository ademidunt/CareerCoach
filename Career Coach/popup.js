document.addEventListener('DOMContentLoaded', function (){
    document.querySelector('button').addEventListener('click', saveJob, false)

    function saveJob() {
        // save something to local storage
        var jobtitle = document.getElementById("jobTitle").value;
        localStorage.setItem('jobTitle', jobtitle);
        alert('Grr.')
    }
}, false)