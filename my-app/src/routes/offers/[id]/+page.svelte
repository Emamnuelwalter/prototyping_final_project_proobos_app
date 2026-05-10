<script>
  import OfferDetail from "$lib/components/offers/OfferDetail.svelte";
  import TrainerCard from "$lib/components/offers/TrainerCard.svelte";

  let { data } = $props();

  let offer = $derived(data.offer);
</script>

<div class="container py-5">
  {#if offer}
    <div class="row">
      <div class="col-lg-8 mb-4">
        <OfferDetail {offer} />
      </div>

      <div class="col-lg-4">
        <TrainerCard {offer} />
      </div>
    </div>
  {:else}
    <p>Dieses Angebot wurde nicht gefunden.</p>
  {/if}
</div>
