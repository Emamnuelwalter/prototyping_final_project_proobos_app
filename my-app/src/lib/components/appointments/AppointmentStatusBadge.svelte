<script>
  let { status } = $props();

  let label = $derived(
    status === "confirmed" ? "Bestätigt" :
    status === "cancelled" ? "Storniert" :
    status === "completed" ? "Abgeschlossen" :
    "Offen"
  );
</script>

<span class="badge bg-primary">
  {label}
</span>