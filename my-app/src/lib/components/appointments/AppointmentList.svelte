<script>
  import AppointmentCard from "$lib/components/appointments/AppointmentCard.svelte";

  let { bookings = [] } = $props();
</script>

{#if bookings.length > 0}
  <div class="row">
    {#each bookings as booking}
      <div class="col-12 col-sm-6 col-lg-3 mb-4">
        <AppointmentCard {booking} />
      </div>
    {/each}
  </div>
{:else}
  <div class="alert alert-info">
    Sie haben noch keine Termine gebucht.
  </div>
{/if}