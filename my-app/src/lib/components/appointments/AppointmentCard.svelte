<script>
  import AppointmentStatusBadge from "$lib/components/appointments/AppointmentStatusBadge.svelte";

  let { booking } = $props();

  let trainerName = $derived(
    (booking.trainer?.firstname || booking.trainer?.firstName || "") +
      " " +
      (booking.trainer?.lastname || booking.trainer?.lastName || ""),
  );
</script>

<div class="card appointment-card">
  <img src="/img/offers_placeholder.png" class="card-img-top" alt="Training" />

  <div class="card-body">
    <div class="mb-2">
      <AppointmentStatusBadge status={booking.status} />
    </div>

    <h5 class="card-title">{booking.offer?.title}</h5>

    <p class="mb-1">{trainerName}</p>

    <p class="mb-1">
      {booking.date} · {booking.startTime} - {booking.endTime}
    </p>

    <p class="mb-3 text-muted">
      {booking.location?.name}
    </p>

    <a
      href={`/offers/${booking.offerId}`}
      class="btn btn-outline-primary w-100"
    >
      Angebot ansehen
    </a>
    <form
      method="POST"
      action="?/cancel"
      onsubmit={() => confirm("Möchten Sie diesen Termin wirklich stornieren?")}
    >
      <input type="hidden" name="bookingId" value={booking._id} />

      <button class="btn btn-outline-danger w-100 mt-2" type="submit">
        Termin stornieren
      </button>
    </form>
  </div>
</div>

<style>
  .appointment-card {
    height: 100%;
    border-radius: 16px;
    overflow: hidden;
  }

  .card-img-top {
    height: 140px;
    object-fit: cover;
  }
</style>
