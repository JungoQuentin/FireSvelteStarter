<script lang="ts">
	export let sidebar = false;
	import { auth } from '$lib/firebase';
	import clickOutside from '$lib/clickOutside';
	function clicked() {
		sidebar = false;
	}
</script>

<nav
	class:sidebar
	use:clickOutside
	on:click_outside={() => {
		sidebar = false;
	}}
>
	<div>
		<a class="block" on:click={clicked} href="/">Home</a>
		<a class="block" on:click={clicked} href="/">Autre...</a>
	</div>
	<a
		class="block"
		href="/"
		on:click={() => {
			auth.signOut();
			clicked();
		}}>Logout</a
	>
</nav>

<style>
	.sidebar {
		left: 0;
	}
	nav a {
		@apply bg-gray-300
		p-3
		m-3;
	}
	nav {
		left: -100%;
		transition: left 0.3s ease-in-out;
		@apply absolute
		bottom-0

		w-10/12
		sm:w-9/12
		md:w-7/12
		lg:w-1/4
		xl:w-1/5
		2xl:w-1/5
		
		h-full

		bg-gray-400
		shadow-lg

		flex
		flex-col
		justify-between;
	}
</style>
