<script>
  let { offers = [] } = $props();

  let search = $state("");

  function trainerName(offer) {
    return (
      (offer.trainer?.firstname || offer.trainer?.firstName || "") +
      " " +
      (offer.trainer?.lastname || offer.trainer?.lastName || "")
    );
  }

  function matchesSearch(offer) {
    let text = "";
    text += offer.title + " ";
    text += offer.sport + " ";
    text += trainerName(offer) + " ";
    text += offer.location?.name + " ";
    text += offer.location?.address?.municipality + " ";
    text += offer.location?.address?.canton;

    return text.toLowerCase().includes(search.toLowerCase());
  }

  let results = $derived(
    search.length > 1 ? offers.filter(matchesSearch).slice(0, 5) : [],
  );
</script>

<div class="search-box">
  <input
    class="form-control search-input"
    type="text"
    placeholder="Suche nach Sportart, Trainer oder Standort"
    bind:value={search}
  />

  {#if search.length > 1}
    <div class="search-results">
      {#if results.length > 0}
        {#each results as offer}
          <a href={`/offers/${offer._id}`} class="search-result">
            <strong>{offer.title}</strong>
            <br />
            <small>{trainerName(offer)} · {offer.location?.name}</small>
          </a>
        {/each}
      {:else}
        <div class="search-result text-muted">
          Keine passenden Angebote gefunden.
        </div>
      {/if}
    </div>
  {/if}
</div>

<style>
  .search-box {
    position: relative;
    max-width: 650px;
  }

  .search-input {
    height: 52px;
    border-radius: 12px;
    font-size: 18px;
    padding-left: 18px;
  }

  .search-results {
    position: absolute;
    width: 100%;
    background: white;
    border: 1px solid #ddd;
    border-radius: 10px;
    margin-top: 6px;
    z-index: 20;
    overflow: hidden;
  }

  .search-result {
    display: block;
    padding: 12px 16px;
    color: black;
    text-decoration: none;
    border-bottom: 1px solid #eee;
  }

  .search-result:hover {
    background: #f5f5f5;
  }
</style>
