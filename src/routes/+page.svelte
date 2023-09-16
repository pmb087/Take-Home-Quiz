<script>
  import { goto } from '$app/navigation';
  import { browser } from '$app/environment';

  $: if (browser) {
    goto('/ko/categories',{replaceState:true});
  }
</script>

<svelte:head>
  <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">
</svelte:head>