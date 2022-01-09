document.addEventListener('DOMContentLoaded', function (){
    document.querySelector('button').addEventListener('click', saveJob, false)
    
    // Storage.prototype.setObj = function(key, obj) {
    //     return this.setItem(key, JSON.stringify(obj))
    // }
    // Storage.prototype.getObj = function(key) {
    //     return JSON.parse(this.getItem(key))
    // }
    
 
    //alert(tab);

    chrome.windows.getCurrent(function (currentWindow) {
        chrome.tabs.query({ active: true, windowId: currentWindow.id }, function (activeTabs) {
            activeTabs.map(function (tab) {
                chrome.tabs.executeScript(tab.id, { file: 'content_script.js', allFrames: false });
            });
        });
    });

    console.log(tabs[0].url);
    
    function saveJob() {
        // save something to local storage
        //use array pop and push functions

       // var link = tab;
        //localStorage.setItem('Link', link);

        var title = document.getElementById("jobTitle").value;
        // var jobtitle = [];
        // jobtitle = localStorage.getItem('jobTitle');
        // jobtitle.push(title);
        localStorage.setItem('JobTitle', title);
        //alert('Grr.')

        var location = document.getElementById("jobLoc").value;
        // var jobloc = [];
        // jobloc = localStorage.getItem('jobLoc');
        //jobloc.push(location);
        localStorage.setItem('JobLoc', location);
        
        var location = document.getElementById("jobDescript").value;
        localStorage.setItem('JobDescript', location);

        var deadline = document.getElementById("deadline").value;
        localStorage.setItem('Deadline', deadline);


        var applied = document.getElementById("Applied").value;
        localStorage.setItem('App', applied);
    }
    
    

}, false)