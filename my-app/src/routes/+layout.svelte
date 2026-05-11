<script>
  let { data, children } = $props();
</script>

<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">Proobos</a>

    {#if data.hasUser}
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <a class="nav-link active" aria-current="page" href="/offers">
            Durchsuchen
          </a>
          <a class="nav-link active" href="/categories">Sportkategorien</a>
          <a class="nav-link active" href="/appointments">Meine Termine</a>
          <a class="nav-link active" href="/profil">Mein Profil</a>
        </div>
      </div>
    {/if}
  </div>
</nav>

<div class="container mt-3">
  {@render children()}
</div>