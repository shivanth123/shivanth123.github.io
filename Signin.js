let form = document.querySelector("form");
	form.addEventListener('submit', (e) => {
		e.preventDefault();
		document.querySelector("#sub").value = "Submiting..";
		let data = new FormData(form);
		fetch('https://script.google.com/macros/s/AKfycbyVKCiXxzkVaqdX2qfv9_Dx6tyAD43TUT4LIY64Y2Uy672_tNKaDllhOs7zhimPjsPw/exec', {
				method: "POST",
				body: data
			})
			.then(res => res.text())
			.then(data => {
				document.querySelector("#msg").innerHTML = data;
				document.querySelector("#sub").value = "Submit"
			});
	})
