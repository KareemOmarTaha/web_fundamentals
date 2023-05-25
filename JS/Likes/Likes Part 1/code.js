var count = 1;
var extralikes = document.querySelector(".morelikes")
function addlike() {
    count++;
    extralikes.innerText = count + " Like(s)";
    console.log(extralikes);
}