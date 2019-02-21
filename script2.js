var num_1 = Number(prompt("Quel chiffre souhaitez vous factoriser?"));
var finalResult = 1;
var i = num_1;

while(i >= 1){
	var result = num_1 * i;
	var finalResult = finalResult * result;
	i--;
}

console.log(finalResult);
