function Confirm(){
	var txt1 = document.getElementById("txt1").innerHTML;
	var txt2 = document.getElementById("txt2").value;
	if (txt1 == txt2) {

		document.getElementById("result").innerHTML = "<h2 style='color:green;'>Its right</h2>";
	}else{
		document.getElementById("result").innerHTML = "<h2 style='color:red;'>not right</h2>";
	}
	Generate();
}
function Generate(){
	document.getElementById("txt2").value = "";
	 var word = ['world','Hello','names','say','facundo','cellphone','Luis','black','lives','matter','how','are',90,12,43,2,'paralax','random','computer','robot','selfie',];
	 document.getElementById("txt1").innerHTML = word[Math.floor(Math.random()*word.length)];
}