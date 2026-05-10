<script>
  let { offer } = $props();

  let location = $derived(offer.location);
</script>

<div class="offer-detail">
  <img
    src="/img/offers_placeholder.png"
    alt="Trainingsangebot"
    class="detail-img"
  />

  <div class="mt-4">
    <h2>{offer.title}</h2>

    <p class="price">
      {offer.pricePerHour} {offer.currency} / Stunde
    </p>

    <p class="text-muted">
        📍{location?.name}, {location?.address?.municipality}
    </p>
  </div>

  <hr />

  <h4>Beschreibung</h4>
  <p>{offer.description}</p>

  <h4 class="mt-4">Anforderungen</h4>
  <ul>
    {#each offer.requirements as requirement}
      <li>{requirement}</li>
    {/each}
  </ul>

  <h4 class="mt-4">Standort</h4>
  <p>
    {location?.name}<br />
    {location?.address?.street}<br />
    {location?.address?.postalCode} {location?.address?.municipality},
    {location?.address?.canton}
  </p>

  <h4 class="mt-4">Bewertung</h4>
  <p>
    ⭐ {offer.averageRating} / 5
    ({offer.reviewCount} Bewertungen)
  </p>
</div>

<style>
  .offer-detail {
    background-color: white;
  }

  .detail-img {
    width: 100%;
    height: 320px;
    object-fit: cover;
    border-radius: 20px;
  }

  .price {
    font-weight: 600;
    font-size: 18px;
  }
</style>