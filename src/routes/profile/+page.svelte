<script lang="ts">
	import { getContext } from 'svelte';

	let user = getContext('user');
</script>

<img src={user.photoURL} width="100" alt="user avatar" />
