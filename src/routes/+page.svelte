<script lang="ts">
	import { prefetch } from '$app/navigation';
	import { getContext, onMount } from 'svelte';

	let user = getContext('user');
</script>

<div> Bonjour {user.displayName}! Bienvenu sur la home page. </div>
