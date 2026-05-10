<script>
  import { sports, levels } from "$lib/data/sports.js";

  let { interestedSports = $bindable([]) } = $props();
</script>

<p>Interessierte Sportarten</p>
<hr />
{#each interestedSports as interest, index}
  <div class="row mb-3">
    <div class="col-6">
      <label class="form-label" for={"sport" + index}
        >Sportart {index + 1} <span class=required>*</span></label
      >
      <select
        id={"sport" + index}
        class="form-select"
        name={`sport${index + 1}`}
        bind:value={interest.sport}
        required
      >
        <option value="">Sportart auswählen </option>

        {#each sports as sport}
          <option value={sport}>{sport}</option>
        {/each}
      </select>
    </div>

    <div class="col-6">
      <label class="form-label" for={"level" + index}>Niveau <span class=required>*</span></label>
      <select
        id={"level" + index}
        class="form-select"
        name={`level${index + 1}`}
        bind:value={interest.level}
        required
      >
        <option value="">Niveau auswählen</option>

        {#each levels as level}
          <option value={level}>{level}</option>
        {/each}
      </select>
    </div>
  </div>
{/each}

<style>
  .required{
    color: red;
  }
</style>
