<script>
  import ProfileCard from "$lib/components/profile/ProfileCard.svelte";

  let { data } = $props();
  let user = $derived(data.user);
</script>

<ProfileCard {user} />
