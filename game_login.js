p1=localStorage.getItem("player1_name")
p2=localStorage.getItem("player2_name")
p1score=0
p2score=0
document.getElementById("player1name").innerHTML=p1+ ":"
document.getElementById("player2name").innerHTML=p2+ ":"
document.getElementById("player1score").innerHTML=p1score+ ":"
document.getElementById("player2score").innerHTML=p2score+ ":"
document.getElementById("playerquestion").innerHTML="questionturn "+ p1;
document.getElementById("playeranswer").innerHTML="answerturn "+ p2;
function send()
{

}