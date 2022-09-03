<script lang="ts">
	import { setContext, onMount } from 'svelte';
	import { signInWithPopup } from 'firebase/auth';
	import { authState } from 'rxfire/auth';
	import { browser } from '$app/environment';
	import '$lib/app.css';
	import { auth, googleProvider } from '$lib/firebase';
	import { Navbar, Sidebar, LoadingSpin } from '$lib/components';

	let sidebar = false;
	let user = authState(auth);
	$: {
		if ($user) {
			setContext('user', $user);
		}
	}
</script>

{#if $user === undefined}
	<LoadingSpin />
{:else if $user !== null}
	<Navbar bind:sidebar />
	<Sidebar bind:sidebar />
	<slot />
{:else}
	<!-- login and register -->
	<div class="center bg-cyan-200">
		<button on:click={() => signInWithPopup(auth, googleProvider)} class="rounded-md bg-white drop-shadow-2xl px-5">
			<div class="flex items-center pr-2">
			<img src="images/btn_google_light_normal_ios.svg" alt="google logo"/>SignIn
			</div>
		</button>
	</div>
{/if}
