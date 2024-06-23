<script lang="ts">
	import '../app.css';
	import { ScrollSmoother, gsap, ScrollTrigger } from '$lib/gsap';
	import { onMount } from 'svelte';



	let smoother;

	onMount(() => {
		smoother = ScrollSmoother.create({
			smooth: 2,
			normalizeScroll: false
			// ignoreMobileResize: true
		});

		gsap.from('#logo', {
			duration: 3,
			scale: 10,
			y: '80vh',
			scrollTrigger: {
				trigger: '#logo',
				start: 'top 70%',
				end: 'bottom 25%',
				markers: true,
				scrub: true
			}
		});

	});


</script>

<header
class="flex flex-row w-full py-8 justify-center items-center fixed top-0
left-0 bg-slate-950 z-10"
>
<div class="flex items-center justify-center max-w-6xl w-full">
	<a href="/" class="text-3xl text-slate-50" id="logo">Logo</a>
</div>
</header>

<div class="w-full" id="smooth-wrapper">
	<main id="smooth-content">
		<slot />
	</main>
</div>
