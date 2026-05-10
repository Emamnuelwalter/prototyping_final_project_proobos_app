<script>
  let { dates = [], selectedDate = $bindable("") } = $props();
</script>

<div class="mb-4">
  <h4>Datum auswählen</h4>

  {#if dates.length > 0}
    <div class="d-flex flex-wrap gap-2">
      {#each dates as date}
        <button
          type="button"
          class="btn"
          class:btn-primary={selectedDate === date}
          class:btn-outline-primary={selectedDate !== date}
          onclick={() => selectedDate = date}
        >
          {date}
        </button>
      {/each}
    </div>
  {:else}
    <p class="text-muted">Keine freien Daten verfügbar.</p>
  {/if}
</div>