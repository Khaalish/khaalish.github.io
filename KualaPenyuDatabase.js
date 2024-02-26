function cariButton()
{
	let x = document.getElementById("nama").value;
	switch(x) {
		case "JOHN DOE":
			window.location.href = "data/JOHN DOE.html";
			break;
		
		case "JANE DOE":
			window.location.href = "data/JANE DOE.html";
			break;
		
		default:
			document.getElementById("noInBase").innerHTML = "Tidak Ada Dalam Database.";
			
			const myTimeout = setTimeout(noInBase, 2000);

			function noInBase() {
			document.getElementById("noInBase").innerHTML = "";
			}
	}
}