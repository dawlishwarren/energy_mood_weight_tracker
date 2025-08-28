"use client";

export default function Form() {
	function formSubmit(e) {
		e.preventDefault();
		// Mood
		const form = e.target;
		const formData = new FormData(form);
		const today = new Date().toISOString().split("T")[0];
		formData.append("date", today);

		const formJson = Object.fromEntries(formData.entries());
		console.log(formJson);
	}
	return (
		<form onSubmit={formSubmit} className="flex flex-col">
			<div>
				<input type="number" name="Energy" className="border mx-2" />
				<label htmlFor="Energy">Energy</label>
				<span> (1-10)</span>
			</div>
			<div>
				<input type="number" name="Mood" className="border mx-2" />
				<label htmlFor="Mood">Mood</label>
				<span> (1-10)</span>
			</div>
			<div>
				<input type="text" name="Weight" className="border mx-2" />
				<label htmlFor="Weight">Weight</label>
				<span> (kg)</span>
			</div>
			<button type="submit" className="border">
				Submit
			</button>
		</form>
	);
}
