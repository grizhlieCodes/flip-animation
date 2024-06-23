<script lang="ts">
	import { images } from '$lib/imagesData.ts';
	console.log(images);
	import { gsap, Flip, ScrollTrigger } from '$lib/gsap';
	import { onMount } from 'svelte';

	let timeline, h, screen;

	let flipAnimation;

	onMount(() => {
		const initialState = Flip.getState('.grid-image');

		const imgContainer = document.querySelector('#img-container');
		imgContainer.classList.remove('images-initial-grid');
		imgContainer.classList.add('images-after-grid');

		flipAnimation = Flip.from(initialState, {
			duration: 2,
			ease: 'power1.inOut'
		});

		timeline = gsap.timeline({
			scrollTrigger: {
				trigger: '#section-2',
				start: 'top top',
				end: '+=500%',
				scrub: true,
				pin: true
			}
		});

		timeline
			.set('.grid-image', {opacity: 0})
			.from('#section-2-heading', { opacity: 0, duration: 1 })
			.from('#image-10', { y: window.innerHeight, opacity: 0 }, '>')
			.from('#image-11', { y: window.innerHeight, opacity: 0 }, '>')
			.from('#image-12', { y: window.innerHeight, opacity: 0 }, '>')
			.set('.grid-image', {opacity: 1}, '>')
			.add(flipAnimation, '>');
	});
</script>

<section class="h-[100vh] w-full grid place-items-center bg-slate-950"></section>

<section
	id="section-2"
	class="min-h-[110vh] w-full grid place-items-center bg-slate-900 py-20"
	aria-labelledby="section-2-heading"
>
	<div
		class="share-grid gap-8 w-full h-full justify-center images-grid
	images-initial-grid overflow-hidden mx-auto"
		id="img-container"
	>
		{#each images as image}
			<a
				data-column={image.column}
				id="image-{image.number}"
				href="https://www.google.com"
				class="grid-image block w-[290px] aspect-square h-[360px]"
			>
				<img src="{image.imageUrl}/m/" alt="" class="w-full h-full object-cover" />
			</a>
		{/each}
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

<style>
	:global {
		.share-grid {
			grid-row: 1/2;
			grid-column: 1/2;
		}
		.images-grid {
			display: grid;
			place-items: center;
			grid-auto-rows: 164px;

			&.images-initial-grid {
				grid: 1fr / 1fr;

				& > * {
					grid-column: 1/2;
					grid-row: 1/2;
				}
			}
			&.images-after-grid {

				grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
				& > * {
					opacity: 100;
				}

				& > *:not([data-row]) {
					grid-row: span 2;
				}

				& > *[data-column='1'] {
					grid-column: 1;
				}
				& > *[data-column='2'] {
					grid-column: 2;
				}
				& > *[data-column='3'] {
					grid-column: 3;
				}
				& > *[data-column='4'] {
					grid-column: 4;
				}
				& > *[data-column='5'] {
					grid-column: 5;
				}
				& > *[data-column='6'] {
					grid-column: 6;
				}
				& > *[data-column='7'] {
					grid-column: 7;
				}

				& > *:nth-child(6n - 5) {
					/* 1st and then every 6th */
					grid-row: 2 / span 2;
				}

				& > *:nth-child(6n - 4) {
					/* 2nd and then every 6th */
					grid-row: 4 / span 2;
				}
				& > *:nth-child(6n - 3) {
					/* 3rd and then every 6th */
					grid-row: 6 / span 2;
				}

				& > *:nth-child(6n - 2) {
					/* 4th and then every 6th */
					grid-row: 1 / span 2;
				}

				& > *:nth-child(6n - 1) {
					/* 5th and then every 6th */
					grid-row: 3 / span 2;
				}
				& > *:nth-child(6n) {
					/* every 6th */
					grid-row: 5 / span 2;
				}
			}
		}
	}
</style>
