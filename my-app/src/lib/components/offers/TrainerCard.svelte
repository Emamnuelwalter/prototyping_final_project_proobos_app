<script>
  let { offer } = $props();

  let trainer = $derived(offer.trainer);

  let trainerName = $derived(
    (trainer?.firstname || trainer?.firstName || "") +
      " " +
      (trainer?.lastname || trainer?.lastName || "")
  );
</script>

<div class="trainer-card">
  <img
    src="/img/placeholder_user.png"
    alt="Trainerbild"
    class="trainer-img"
  />

  <h4>{trainerName}</h4>

  <p class="text-muted">
    Trainer für {offer.sport}
  </p>

  {#if trainer?.trainerProfile?.experienceYears}
    <p>
      Erfahrung: {trainer.trainerProfile.experienceYears} Jahre
    </p>
  {/if}

  {#if trainer?.trainerProfile?.description}
    <p>
      {trainer.trainerProfile.description}
    </p>
  {/if}

  {#if trainer?.trainerProfile?.certifications}
    <p class="mb-1"><strong>Zertifikate:</strong></p>

    <ul class="text-start">
      {#each trainer.trainerProfile.certifications as certificate}
        <li>{certificate}</li>
      {/each}
    </ul>
  {/if}

  <p>
    Preis: <strong>{offer.pricePerHour} {offer.currency}/h</strong>
  </p>

  <a href={"/booking/"+offer._id} class="btn btn-primary w-100">
    Jetzt buchen
  </a>
</div>

<style>
  .trainer-card {
    border: 1px solid #ddd;
    border-radius: 20px;
    padding: 24px;
    text-align: center;
    background-color: white;
  }

  .trainer-img {
    width: 110px;
    height: 110px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 16px;
  }
</style>