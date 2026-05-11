<script>
  import SearchBar from "$lib/components/SearchBar.svelte";
  import OfferList from "$lib/components/offers/OfferList.svelte";

  let { data } = $props();
</script>

<div class="container py-5">
  <div class="offers-page mx-auto">
    {#if data.profileCreated}
      <div
        class="alert alert-success d-flex justify-content-between align-items-center"
      >
        <span>Ihr Profil wurde erfolgreich erstellt.</span>
        <a href="/profil" class="btn btn-outline-primary">Mein Profil ansehen</a
        >
      </div>
    {/if}

    <div class="page-intro mb-5">
      <h1>Trainingsangebote entdecken</h1>
      <p>
        Finden Sie passende Trainer und Kurse basierend auf Ihrem Profil.
      </p>

      <SearchBar offers={data.offers} />
    </div>

    <OfferList
      title="Kurse und Trainer in der Nähe basierend auf Ihrem Profil"
      offers={data.matchingOffers}
    />

    <OfferList
      title="Empfohlene Kurse und Trainer in der Nähe"
      offers={data.recommendedOffers}
    />
  </div>
</div>

<style>
  .offers-page {
    max-width: 1200px;
  }

  .page-intro {
    max-width: 720px;
  }

  .page-intro h1 {
    font-size: 42px;
    font-weight: 600;
  }
</style>
