<script>
  let { times = [], selectedTime = $bindable("") } = $props();
</script>

<div class="mb-4">
  <h4>Uhrzeit auswählen</h4>

  {#if times.length > 0}
    <div class="d-flex flex-wrap gap-2">
      {#each times as time}
        <button
          type="button"
          class="btn"
          class:btn-primary={selectedTime ===
            time.startTime + "-" + time.endTime}
          class:btn-outline-secondary={selectedTime !==
            time.startTime + "-" + time.endTime}
          onclick={() => (selectedTime = time.startTime + "-" + time.endTime)}
        >
          {time.startTime} - {time.endTime}
        </button>
      {/each}
    </div>
  {:else}
    <p>Bitte wählen Sie zuerst ein Datum aus.</p>
  {/if}
</div>
