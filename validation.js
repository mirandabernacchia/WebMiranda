const form = document.querySelector("#info")
const email = document.querySelector("#email")
const emailHelp = document.querySelector("#emailHelp")
const password = document.querySelector("#password")
const passwordHelp = document.querySelector("#passwordHelp")


form.addEventListener("submit", (event) => { 
	event.preventDefault()
	if (email.value === "" || password.value === "") { 
		if (email.value === "") {
			emailHelp.innerText = "Ingresar Información"
		}
		if (password.value === ""){
			passwordHelp.innerText = "Ingresar Información"
		}
}
	else {form.submit();
	}


})