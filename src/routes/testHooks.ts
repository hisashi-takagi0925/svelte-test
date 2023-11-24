import { onMount } from 'svelte';

export const mountTest = () => {
	onMount(() => {
		console.log('mounted');
	});
};
