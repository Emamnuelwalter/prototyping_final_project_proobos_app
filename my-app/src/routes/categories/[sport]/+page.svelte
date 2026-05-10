<script>
  import OfferList from "$lib/components/offers/OfferList.svelte";

  let { data } = $props();
</script>

<div class="container py-5">
  <a href="/categories" class="btn btn-outline-primary mb-4">
    Zurück zu Sportkategorien
  </a>

  <h1 class="mb-4">{data.sport}</h1>

  <OfferList
    title={`Angebote für ${data.sport}`}
    offers={data.offers}
  />
</div>