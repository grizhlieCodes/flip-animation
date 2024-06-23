<script>
	// import { gsap, Flip, ScrollTrigger } from '$lib/gsap';
	// import { onMount } from 'svelte';

	// let timeline, h, screen;

	// let flipAnimation;

	// onMount(() => {
	// 	h = window.innerHeight / 2;
	// 	screen = window.innerHeight;

	// 	// Register ScrollTrigger and Flip plugins
	// 	gsap.registerPlugin(ScrollTrigger, Flip);

	// 	// Initial state of the images
	// 	const initialState = Flip.getState('.grid-image');

	// 	// Modify the layout
	// 	const imgContainer = document.querySelector('#img-container');
	// 	imgContainer.classList.remove('images-initial-grid');
	// 	imgContainer.classList.add('images-after-grid');

	// 	// Create the Flip animation
	// 	flipAnimation = Flip.from(initialState, {
	// 		duration: 2,
	// 		ease: 'power1.inOut'
	// 	});

	// 	// Create the timeline with ScrollTrigger
	// 	timeline = gsap.timeline({
	// 		scrollTrigger: {
	// 			trigger: '#section-2',
	// 			start: 'top top',
	// 			end: '+=200%',
	// 			scrub: true,
	// 			pin: true
	// 		}
	// 	});

	// 	// Add animations to the timeline
	// 	timeline
	// 		.from('#section-2-heading', { opacity: 0, duration: 1 })
	// 		.from('#image-1', { y: innerHeight, opacity: 1 }, '>')
	// 		.from('#image-2', { y: innerHeight, opacity: 1 }, '>')
	// 		.from('#image-3', { y: innerHeight, opacity: 1 }, '>')
	// 		.add(flipAnimation, '>');
	// });
</script>

<section class="h-[100vh] w-full grid place-items-center bg-slate-950"></section>

<section
	id="section-2"
	class="h-[100vh] w-full grid place-items-center bg-slate-900"
	aria-labelledby="section-2-heading"
>
	<div
		class="share-grid gap-4 w-full h-full
			   justify-center images-grid images-after-grid"
		id="img-container"
	>
		<a
			id="image-1"
			href="https://www.google.com"
			class="grid-image block w-full aspect-square max-w-[290px] h-full max-h-[360px] col-start-2 col-span-1"
		>
			<img
				src="https://a.storyblok.com/f/187090/800x801/ac1f2976aa/package-starter.jpg/m/"
				alt=""
				class="w-full h-full object-cover"
			/>
		</a>
		<a
			id="image-2"
			href="https://www.google.com"
			class="grid-image block w-full aspect-square max-w-[290px] h-full max-h-[360px] col-start-2 col-span-1"
		>
			<img
				src="https://a.storyblok.com/f/187090/500x501/32480d7ad2/process-analysis.jpg/m/"
				alt=""
				class="w-full h-full object-cover"
			/>
		</a>
		<a
			id="image-3"
			href="https://www.google.com"
			class="grid-image block w-full aspect-square max-w-[290px] h-full max-h-[360px] col-start-2 col-span-1"
		>
			<img
				src="https://a.storyblok.com/f/187090/501x501/44fb6f9a2f/process-development.jpg/m/"
				alt=""
				class="w-full h-full object-cover"
			/>
		</a>
	</div>

	<h1
		id="section-2-heading"
		class="text-5xl font-sans font-bold text-slate-50
	    max-w-[32rem] text-center share-grid"
	>
		How do we know we are who we say we are?
	</h1>
</section>

<section class="h-screen w-full grid place-items-center bg-yellow-100">
	<h1 class="text-5xl font-sans font-bold">Eh? World</h1>
</section>

<!-- 

    	const imageLinks = [
		{
			imageUrl: 'https://a.storyblok.com/f/187090/800x801/ac1f2976aa/package-starter.jpg',
			url: 'https://www.google.com',
			class: ''
		},
		{
			imageUrl: 'https://a.storyblok.com/f/187090/500x501/32480d7ad2/process-analysis.jpg',
			url: 'https://www.google.com',
			class: ''
		},
		{
			imageUrl: 'https://a.storyblok.com/f/187090/501x501/44fb6f9a2f/process-development.jpg',
			url: 'https://www.google.com',
			class: ''
		},
		{
			imageUrl: 'https://a.storyblok.com/f/187090/801x801/ba2e985100/package-supreme.jpg',
			url: 'https://www.google.com',
			class: ''
		},
		{
			imageUrl: 'https://a.storyblok.com/f/187090/801x801/ee9146ee57/package-super.jpg',
			url: 'https://www.google.com',
			class: ''
		},
		{
			imageUrl: 'https://a.storyblok.com/f/187090/401x401/c89bdd41d8/form-5plusyears.jpg',
			url: 'https://www.google.com',
			class: ''
		},
		{
			imageUrl:
				'https://a.storyblok.com/f/187090/900x901/dc866e19e3/benefits-credibility-desktop.jpg',
			url: 'https://www.google.com',
			class: ''
		},
		{
			imageUrl: 'https://a.storyblok.com/f/187090/501x501/cf414dd39d/process-support.jpg',
			url: 'https://www.google.com',
			class: ''
		},
		{
			imageUrl: 'https://a.storyblok.com/f/187090/501x501/7647861010/process-discovery.jpg',
			url: 'https://www.google.com',
			class: ''
		},
		{
			imageUrl:
				'https://a.storyblok.com/f/187090/501x500/948bdf2848/benefits-brand-awareness-tablet.jpg',
			url: 'https://www.google.com',
			class: ''
		}
	];

 -->

<style>
	:global {
		.share-grid {
			grid-row: 1/2;
			grid-column: 1/2;
		}
		.images-grid {
			display: grid;
			place-items: center;

			&.images-initial-grid {
				grid: 1fr / 1fr;

				& > * {
					grid-column: 1/2;
					grid-row: 1/2;
				}
			}
			&.images-after-grid {
				grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
			}
		}
	}
</style>
