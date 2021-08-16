// TODO: add code here
window.addEventListener("load", function() {
    let url = "https://handlers.education.launchcode.org/static/astronauts.json";
    fetch(url).then( function(response) {
        response.json().then(function(json) {
           
            json.sort((a, b) => {
                return -(a.hoursInSpace - b.hoursInSpace)
            });
    
            const container = document.getElementById("container");

for (let i = 0; i < json.length; i++) {
    container.innerHTML += `
    <div class="astronaut">
    <div class="bio">
    <h3>${json[i].firstName} ${json[i].lastName}</h3>
<ul>
 <li class=>Hours in Space: ${json[i].hoursInSpace}</li>
 <li class="activeStatus">Active: ${json[i].active}</li>
 <li>Skills: ${json[i].skills}</li>
</ul>
</div>
<img class="avatar" src=${json[i].picture}>
</div> 
`
let activeStatus = document.getElementsByClassName("activeStatus")
if (json[i].active) {
    activeStatus[i].style.color = "green"
                }
            };
        });
    });
});