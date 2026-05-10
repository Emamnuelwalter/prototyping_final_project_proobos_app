<script>
  import BookingConfirmation from "$lib/components/booking/BookingConfirmation.svelte";

  let { data } = $props();

  let booking = $derived(data.booking);
</script>

<div class="container py-5">
  <BookingConfirmation {booking} />
</div>