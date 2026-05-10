<script>
  let { offer, selectedDate = "", selectedTime = "" } = $props();
</script>

<div class="border rounded p-3 mb-4">
  <h4>Zusammenfassung</h4>

  <p class="mb-1">
    <strong>Angebot:</strong> {offer.title}
  </p>

  <p class="mb-1">
    <strong>Datum:</strong> {selectedDate || "Noch nicht ausgewählt"}
  </p>

  <p class="mb-1">
    <strong>Uhrzeit:</strong> {selectedTime || "Noch nicht ausgewählt"}
  </p>

  <p class="mb-0">
    <strong>Preis:</strong> {offer.pricePerHour} {offer.currency}/h
  </p>
</div>