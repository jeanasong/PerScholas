var buttonArray = document.getElementsByClassName("timer-button");
var titleArray = document.getElementsByClassName("title");
// var time = 0;
// var intervals = -1;
for(let i = 0; i < buttonArray.length; i++) {
    let time = 0;
    let intervals = -1;
let button = buttonArray[i];
let title = titleArray[i];
button.addEventListener("click", function(event){
    if (intervals == -1) {
        intervals = setInterval(function(){
            time++;
            title.innerHTML = time;
        }, 1000);
    } else {
        clearInterval(intervals);
        intervals = -1;
    }
});
}