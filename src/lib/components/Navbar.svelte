<script lang="ts">
	import { getContext } from 'svelte';
	import { goto } from '$app/navigation';
	import Hamburger from './Hamburger.svelte';

	export let sidebar = false;
	let user = getContext('user');
</script>

<nav class:sidebar>
	<Hamburger bind:open={sidebar} />
	<img
		class="rounded-lg"
		on:click={() => {
			goto('/profile');
		}}
		src={user.photoURL}
		width="40"
		alt="user avatar"
	/>
</nav>

<style>
	nav {
		@apply
		w-full
		flex
		justify-between
		p-2
		bg-gray-200
		text-gray-600;
	}
</style>
