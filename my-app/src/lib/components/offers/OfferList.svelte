<script>
  import OfferCard from "$lib/components/offers/OfferCard.svelte";

  let { title, offers = [] } = $props();

  let showAll = $state(false);

  function toggleOffers() {
    showAll = !showAll;
  }
</script>

<section class="mb-5">
  <h3 class="mb-4">{title}</h3>

  <div class="row g-4">
    {#each showAll ? offers : offers.slice(0, 4) as offer}
      <div class="col-12 col-md-6 col-xl-3">
        <OfferCard {offer} />
      </div>
    {/each}
  </div>

  {#if offers.length > 4}
    <div class="text-center mt-4">
      <button class="btn btn-outline-primary" onclick={toggleOffers}>
        {showAll ? "Weniger anzeigen" : "Mehr anzeigen"}
      </button>
    </div>
  {/if}
</section>
