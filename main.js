score = 0;

function clicker(){
    score = score + 1;
    document.getElementById("score").innerHTML = "Score:" + score;
}
function updateScore(){
    localStorage.setItem("score", score);
}