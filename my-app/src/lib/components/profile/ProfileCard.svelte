<script>
  let { user } = $props();

  function formatDate(date) {
    if (!date) return "";

    let parts = date.split("-");
    return parts[2] + "." + parts[1] + "." + parts[0];
  }
</script>

<div class="container py-5">
  <div class="profile-wrapper mx-auto">
    <h2 class="mb-4">Mein Profil</h2>

    {#if user}
      <div class="profile-header mb-4">
        <div class="avatar">
          <img
            src="/img/placeholder_user.png"
            alt=""
            height="auto"
            width="130px"
            class="rounded-circle"
          />
        </div>
        <div class="mt-2">
          <button class="btn btn-primary btn-sm">Profilbild ändern</button>
        </div>
      </div>

      <div class="row">
        <div class="col-md-6 mb-3">
          <label for="firstname" class="form-label">Vorname</label>
          <input
            id="firstname"
            class="form-control"
            value={user.firstname}
            readonly
          />
        </div>

        <div class="col-md-6 mb-3">
          <label for="lastname" class="form-label">Nachname</label>
          <input
            id="lastname"
            class="form-control"
            value={user.lastname}
            readonly
          />
        </div>

        <div class="col-md-6 mb-3">
          <label for="birthday" class="form-label">Geburtsdatum</label>
          <input
            id="birthday"
            class="form-control"
            value={formatDate(user.birthday)}
            readonly
          />
        </div>

        <div class="col-md-6 mb-3">
          <label for="email" class="form-label">E-Mail</label>
          <input id="email" class="form-control" value={user.email} readonly />
        </div>

        <div class="col-md-6 mb-3">
          <label for="phone" class="form-label">Telefonnummer</label>
          <input id="phone" class="form-control" value={user.phone} readonly />
        </div>

        <div class="col-md-6 mb-3">
          <label for="role" class="form-label">Rolle</label>
          <input
            id="role"
            class="form-control"
            value={user.roles?.join(", ")}
            readonly
          />
        </div>

        <div class="col-md-6 mb-3">
          <label for="canton" class="form-label">Kanton</label>
          <input
            id="canton"
            class="form-control"
            value={user.canton}
            readonly
          />
        </div>

        <div class="col-md-6 mb-3">
          <label for="municipality" class="form-label">Gemeinde</label>
          <input
            id="municipality"
            class="form-control"
            value={user.municipality}
            readonly
          />
        </div>
      </div>

      <h4 class="mt-4">Interessierte Sportarten</h4>
      <hr />

      <div class="row">
        {#each user.interestedSports as interest}
          <div class="col-md-4 mb-3">
            <div class="sport-card">
              <p class="mb-1"><strong>{interest.sport}</strong></p>
              <p class="mb-0 text-muted">{interest.level}</p>
            </div>
          </div>
        {/each}
      </div>
      <div class="d-flex justify-content-between align-items-center mt-4">
        <form method="POST" action="?/delete">
          <button class="btn btn-outline-danger" type="submit">
            Konto löschen
          </button>
        </form>

        <a href="/offers" class="btn btn-primary"> Speichern </a>
      </div>
    {:else}
      <p>Kein Profil gefunden.</p>
      <a href="/create-profil" class="btn btn-primary">Profil erstellen</a>
    {/if}
  </div>
</div>

<style>
  .profile-wrapper {
    max-width: 900px;
  }

  .profile-header {
    background-color: #3399ff;
    border-radius: 24px;
    height: 220px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .avatar {
    width: 110px;
    height: 110px;
    border-radius: 50%;
    background-color: white;
    border: 3px solid #d1d5db;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 42px;
    margin-bottom: 12px;
  }

  .sport-card {
    border: 1px solid #ddd;
    border-radius: 12px;
    padding: 16px;
  }
</style>
