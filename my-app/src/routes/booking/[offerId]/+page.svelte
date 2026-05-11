<script>
  import DateSelect from "$lib/components/booking/DateSelect.svelte";
  import TimeSlotSelect from "$lib/components/booking/TimeSlotSelect.svelte";
  import LocationSelect from "$lib/components/booking/LocationSelect.svelte";
  import BookingSummary from "$lib/components/booking/BookingSummary.svelte";

  let { data, form } = $props();

  let offer = $derived(data.offer);
  let bookings = $derived(data.bookings || []);

  let selectedDate = $state("");
  let selectedTime = $state("");

  function isBooked(time) {
    return bookings.some(
      (booking) =>
        booking.date === time.date &&
        booking.startTime === time.startTime &&
        booking.endTime === time.endTime,
    );
  }

  let freeTimes = $derived(
    offer ? offer.availableTimes.filter((time) => !isBooked(time)) : [],
  );

  let dates = $derived([...new Set(freeTimes.map((time) => time.date))]);

  let times = $derived(freeTimes.filter((time) => time.date === selectedDate));
</script>

<div class="container py-5">
  <h1 class="mb-4">Termin buchen</h1>

  {#if form?.message}
    <div class="alert alert-danger">
      {form.message}
    </div>
  {/if}

  {#if offer}
    <div class="mb-4">
      <h3>{offer.title}</h3>
      <p>
        {offer.pricePerHour}
        {offer.currency}/h
      </p>
    </div>

    <form method="POST" action="?/create">
      <input type="hidden" name="locationId" value={offer.locationId} />
      <input type="hidden" name="date" value={selectedDate} />
      <input
        type="hidden"
        name="startTime"
        value={selectedTime.split("-")[0]}
      />
      <input type="hidden" name="endTime" value={selectedTime.split("-")[1]} />

      <DateSelect {dates} bind:selectedDate />

      {#if selectedDate}
        <TimeSlotSelect {times} bind:selectedTime />
      {/if}

      <LocationSelect location={offer.location} />

      <BookingSummary {offer} {selectedDate} {selectedTime} />

      <div class="d-flex justify-content-between">
        <a href={"/offers/"+offer._id} class="btn btn-outline-primary">
          Zurück
        </a>

        <button
          type="submit"
          class="btn btn-primary"
          disabled={!selectedDate || !selectedTime}
        >
          Buchung abschliessen
        </button>
      </div>
    </form>
  {:else}
    <p>Dieses Angebot wurde nicht gefunden.</p>
  {/if}
</div>
