body = document.querySelector("body");
lightSwitch = document.querySelector(".light-switch");
lightSwitch.addEventListener("click", function(){
    body.classList.toggle("lights-off")

})
rightDoor = document.querySelector(".right-door");
rightDoor.addEventListener("click", function(){
    body.classList.toggle("door-open")
})

leftDoor = document.querySelector(".left-door");
leftDoor.addEventListener("click", function(){
    if (body.classList.contains("door-open")){
        body.classList.toggle("door-open2")
    }
})

const toilet = document.querySelector('.toilet-container');
toilet.addEventListener("click", function() {
    toilet.classList.toggle("open-toilet");
});
