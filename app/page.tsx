import Image from 'next/image';
import Form from './components/Form';
import { createClient } from '@/utils/supabase/server';

export default async function Home() {
	const supabase = await createClient();
	const { data, error } = await supabase.from('data').select();
	console.log(data, error);

	return (
		<div className='font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20'>
			<main className='flex flex-col gap-[32px] row-start-2 items-center sm:items-start'>
				<Image
					className='dark:invert'
					src='/next.svg'
					alt='Next.js logo'
					width={180}
					height={38}
					priority
				/>
				<Form />
			</main>
			<footer className='row-start-3 flex gap-[24px] flex-wrap items-center justify-center'>
				<p>Footer</p>
			</footer>
		</div>
	);
}
