let simbol = "X";

var q1 = "";
var q2 = "";
var q3 = "";
var q4 = "";
var q5 = "";
var q6 = "";
var q7 = "";
var q8 = "";
var q9 = "";

function cube1(){
	if (document.getElementById('c1').innerHTML == ""){
		document.getElementById('c1').innerHTML = simbol;
		q1 = simbol;
		if (simbol=="X"){simbol="O"}else{simbol="X"};
	}
	//verifica se um jogador venceu a partida
	if (q1 == q2 && q2 == q3){
		alert(q1 + " GANHOU !!!")
	}
	if (q1 == q5 && q5 == q9){
		alert(q1 + " GANHOU !!!")
	}
	if (q1 == q4 && q4 == q7) {
		alert(q1 + " GANHOU !!!")
	}

}
function cube2(){
	if (document.getElementById('c2').innerHTML == ""){
		document.getElementById('c2').innerHTML = simbol;	
		q2 = simbol;
		if (simbol=="X"){simbol="O"}else{simbol="X"};
	}
	//verifica se um jogador venceu a partida
	if (q1 == q2 && q2 == q3){
		alert(q1 + " GANHOU !!!")
	}
	if (q2 == q5 && q5 == q8) {
		alert(q2 + " GANHOU !!!")
	}
}
function cube3(){
	if (document.getElementById('c3').innerHTML == ""){
		document.getElementById('c3').innerHTML = simbol;
		q3 = simbol;
		if (simbol=="X"){simbol="O"}else{simbol="X"};
	}
	//verifica se um jogador venceu a partida
	if (q1 == q2 && q2 == q3){
		alert(q1 + " GANHOU !!!")
	}
	if (q3 == q5 && q5 == q7){
		alert(q3 + " GANHOU !!!")
	}
	if (q3 == q6 && q6 == q9) {
		alert(q3 + " GANHOU !!!")
	}
}
function cube4(){
	if (document.getElementById('c4').innerHTML == ""){
		document.getElementById('c4').innerHTML = simbol;
		q4 = simbol;
		if (simbol=="X"){simbol="O"}else{simbol="X"};
	}
	//verifica se um jogador venceu a partida
	if (q4 == q5 && q5 == q6){
		alert(q4 + " GANHOU !!!")
	}
	if (q1 == q4 && q4 == q7) {
		alert(q1 + " GANHOU !!!")
	}
}
function cube5(){
	if (document.getElementById('c5').innerHTML == ""){
		document.getElementById('c5').innerHTML = simbol;
		q5 = simbol;
		if (simbol=="X"){simbol="O"}else{simbol="X"};	
	}
	//verifica se um jogador venceu a partida
	if (q4 == q5 && q5 == q6){
		alert(q4 + " GANHOU !!!")
	}
	if (q3 == q5 && q5 == q7){
		alert(q3 + " GANHOU !!!")
	}
	if (q1 == q5 && q5 == q9){
		alert(q1 + " GANHOU !!!")
	}
	if (q2 == q5 && q5 == q8) {
		alert(q2 + " GANHOU !!!")
	}
}
function cube6(){
	if (document.getElementById('c6').innerHTML == ""){
		document.getElementById('c6').innerHTML = simbol;
		q6 = simbol;
		if (simbol=="X"){simbol="O"}else{simbol="X"};
	}
	//verifica se um jogador venceu a partida
	if (q4 == q5 && q5 == q6){
		alert(q4 + " GANHOU !!!")
	}
	if (q3 == q6 && q6 == q9) {
		alert(q3 + " GANHOU !!!")
	}
}
function cube7(){
	if (document.getElementById('c7').innerHTML == ""){
		document.getElementById('c7').innerHTML = simbol;
		q7 = simbol;
		if (simbol=="X"){simbol="O"}else{simbol="X"};
	}
	//verifica se um jogador venceu a partida
	if (q7 == q8 && q8 == q9){
		alert(q7 + " GANHOU !!!")
	}
	if (q3 == q5 && q5 == q7){
		alert(q3 + " GANHOU !!!")
	}
	if (q1 == q4 && q4 == q7) {
		alert(q1 + " GANHOU !!!")
	}
}
function cube8(){
	if (document.getElementById('c8').innerHTML == ""){
		document.getElementById('c8').innerHTML = simbol;
		q8 = simbol;
		if (simbol=="X"){simbol="O"}else{simbol="X"};
	}
	//verifica se um jogador venceu a partida
	if (q7 == q8 && q8 == q9){
		alert(q7 + " GANHOU !!!")
	}
	if (q2 == q5 && q5 == q8) {
		alert(q2 + " GANHOU !!!")
	}
}
function cube9(){
	if (document.getElementById('c9').innerHTML == ""){
		document.getElementById('c9').innerHTML = simbol;
		q9 = simbol;
		if (simbol=="X"){simbol="O"}else{simbol="X"};
	}
	//verifica se um jogador venceu a partida
	if (q7 == q8 && q8 == q9){
		alert(q7 + " GANHOU !!!")
	}
	if (q1 == q5 && q5 == q9){
		alert(q1 + " GANHOU !!!")
	}
	if (q3 == q6 && q6 == q9) {
		alert(q3 + " GANHOU !!!")
	}
}



