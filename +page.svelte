<script lang="ts">
	import { prefetch } from '$app/navigation';
	import { getContext, onMount } from 'svelte';

	let user = getContext('user');
</script>

<div>Hi {user.displayName}, welcome to the home page!</div>
