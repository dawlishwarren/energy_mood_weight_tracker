'use client';

import { createClient } from '@/utils/supabase/client';

export default function Form() {
	const supabase = createClient();

	async function formSubmit(e: any) {
		e.preventDefault();
		const form = e.target;
		const formData = new FormData(form);
		const today = new Date().toISOString().split('T')[0];
		formData.append('date', today);
		const formJson = Object.fromEntries(formData.entries());
		console.log(formJson);
		const { error } = await supabase.from('data').insert({
			energy: formJson.energy,
			mood: formJson.mood,
			weight: formJson.weight,
			created_at: today,
			notes: formJson.notes,
		});
	}
	return (
		<form onSubmit={formSubmit} className='flex flex-col'>
			<div>
				<input type='number' name='energy' className='border mx-2' />
				<label htmlFor='energy'>Energy</label>
				<span> (1-10)</span>
			</div>
			<div>
				<input type='number' name='mood' className='border mx-2' />
				<label htmlFor='mood'>Mood</label>
				<span> (1-10)</span>
			</div>
			<div>
				<input type='text' name='weight' className='border mx-2' />
				<label htmlFor='weight'>Weight</label>
				<span> (kg)</span>
			</div>
			<div>
				<input type='text' name='notes' className='border mx-2' />
				<label htmlFor='notes'>Notes</label>
			</div>
			<button type='submit' className='border'>
				Submit
			</button>
		</form>
	);
}
