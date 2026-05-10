<script>
  import { cantonMunicipalities } from "$lib/data/locations.js";
  import SportInterestSelect from "$lib/components/profile/SportInterestSelect.svelte";

  let selectedCanton = $state("");
  let selectedMunicipality = $state("");

  let municipalities = $derived(
    selectedCanton ? (cantonMunicipalities[selectedCanton] ?? []) : [],
  );

  function handleCantonChange() {
    selectedMunicipality = "";
  }

  let interestedSports = $state([
    { sport: "", level: "" },
    { sport: "", level: "" },
    { sport: "", level: "" },
  ]);

  let { form } = $props();
</script>

<div class="create-profil-form mx-auto">
  <h3>Profil erstellen</h3>
  <p>Hinweis: Dies ist ein Prototyp. Bitte verwenden Sie keine echten Personendaten. Die eingegebenen Daten werden nur zur Simulation des Buchungsprozesses gespeichert.</p>
  <hr />
  {#if form?.message}
    <div class="alert alert-danger">
      {form.message}
    </div>
  {/if}
  <form method="POST" action="?/create">
    <div class="row">
      <div class="mb-3 col-md-6">
        <label for="name" class="form-label">Vorname <span class=required>*</span></label>
        <input name="firstname" class="form-control" type="text" required />
      </div>
      <div class="mb-3 col-md-6">
        <label for="lastname" class="form-label">Nachname <span class=required>*</span> </label>
        <input name="lastname" class="form-control" type="text" required />
      </div>
    </div>
    <div class="row">
      <div class="mb-3 col-md-6">
        <label for="birthday" class="form-label">Geburtsdatum <span class=required>*</span></label>
        <input
          id="birthday"
          name="birthday"
          class="form-control"
          type="date"
          required
        />
      </div>
      <div class="mb-3 col-md-6">
        <label for="phone" class="form-label">Telefonnummer <span class=required>*</span></label>
        <input name="phone" class="form-control" type="tel" required />
      </div>
    </div>
    <div class="mb-3 col-md-6">
      <label for="email" class="form-label">E-Mail <span class=required>*</span></label>
      <input name="email" class="form-control" type="email" required />
    </div>
    <div class="row">
      <div class="mb-3 col-md-6">
        <label for="canton" class="form-label">Kanton <span class=required>*</span></label>
        <select
          id="canton"
          name="canton"
          class="form-select"
          bind:value={selectedCanton}
          onchange={handleCantonChange}
          required
        >
          <option value="">Kanton auswählen</option>

          {#each Object.keys(cantonMunicipalities) as canton}
            <option value={canton}>{canton}</option>
          {/each}
        </select>
      </div>

      <div class="mb-3 col-md-6">
        <label for="municipality" class="form-label">Gemeinde <span class=required>*</span></label>
        <select
          id="municipality"
          name="municipality"
          class="form-select"
          bind:value={selectedMunicipality}
          disabled={!selectedCanton}
          required
        >
          <option value="">Gemeinde auswählen</option>

          {#each municipalities as municipality}
            <option value={municipality}>{municipality}</option>
          {/each}
        </select>
      </div>
    </div>
    <div class="mb-4">
      <SportInterestSelect bind:interestedSports />
    </div>
    <div class="d-flex justify-content-end mt-4">
      <button type="submit" class="btn btn-primary px-4">
        Profil erstellen
      </button>
    </div>
  </form>
</div>

<style>
 .required {
    color: red;
  }

  .create-profil-form {
    max-width: 1000px;
  }
</style>
