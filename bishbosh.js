// console.log("test");

// for (let i = 1; i <= 100; i++) {
// 	if (i % 4 == 0 && i % 3 == 0) {
// 		console.log("Bish-Bosh");
// 	} else if (i % 3 == 0) {
// 		console.log("Bish");
// 	} else if (i % 4 == 0) {
// 		console.log("Bosh");
// 	} else {
// 		console.log(i);
// 	}
// }
const element = document.getElementById("myBtn");
element.addEventListener("click", function (e) {
	e.preventDefault();
	const firstNumber = document.getElementById("fnumber").value;
	console.log(firstNumber);
	const secondNumber = document.getElementById("snumber").value;
	const range = document.getElementById("range").value;
	const result = document.getElementById("bishbashresult");

	result.innerHTML = "";

	if (firstNumber < 1) {
		alert("Wrong first number");
	}
	if (secondNumber < 1) {
		alert("Wrong second number");
	}
	if (range < 1) {
		alert("Wrong range");
	}

	for (let i = 1; i <= range; i++) {
		let text;
		if (i % firstNumber == 0 && i % secondNumber == 0) {
			text =
				"Bish-Bosh" + " is div by: " + firstNumber + " and by: " + secondNumber;
		} else if (i % firstNumber == 0) {
			text = "Bish";
		} else if (i % secondNumber == 0) {
			text = "Bosh";
		} else {
			text = i;
		}
		const newdiv = document.createElement("div");
		newdiv.textContent = text;
		result.appendChild(newdiv);
	}
});
