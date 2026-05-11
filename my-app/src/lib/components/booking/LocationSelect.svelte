<script>
  let { location } = $props();
</script>

<div class="mb-4">
  <h4>Standort</h4>

  {#if location}
    <div class="border rounded p-3">
      <p class="mb-1"><strong>{location.name}</strong></p>
      <p class="mb-1">{location.address?.street}</p>
      <p class="mb-0">
        {location.address?.postalCode} {location.address?.municipality},
        {location.address?.canton}
      </p>
    </div>
  {:else}
    <p>Kein Standort vorhanden.</p>
  {/if}
</div>