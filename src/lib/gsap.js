import { gsap } from 'gsap/dist/gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin';
import { ScrollSmoother } from 'gsap/dist/ScrollSmoother';
import { Flip } from 'gsap/dist/Flip';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, ScrollSmoother, Flip);

export { gsap, ScrollTrigger, ScrollToPlugin, ScrollSmoother, Flip };
