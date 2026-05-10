<script>
  import AppointmentList from "$lib/components/appointments/AppointmentList.svelte";

  let { data, form} = $props();

  let bookings = $derived(data.bookings);
</script>

<div class="container py-5">
  <h1 class="mb-4">Meine Termine</h1>

  <AppointmentList {bookings} />

  {#if form?.message}
  <div class="alert alert-success">
    {form.message}
  </div>
{/if}
</div>