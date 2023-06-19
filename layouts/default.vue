<template>
  <div>
    <MainHeader />
    <aside
      class="shadow rounded d-flex flex-column aside align-items-center bg-white"
    >
      <div class="avatar position-relative mb-5">
        <nuxt-img
          class="avatar-image rounded-circle"
          src="/avatar.webp"
          :alt="$t('Profile')"
          :width="100"
          :height="100"
          loading="lazy"
          fit="cover"
        />
        <div
          class="rounded-circle shadow position-absolute bg-white p-2 avatar-edit d-flex justify-content-center align-items-center"
        >
          <i class="bi bi-gear-fill" />
        </div>
      </div>
      <MainMenu />
    </aside>
    <main class="main-section">
      <NuxtPage />
    </main>
  </div>
</template>

<style scoped lang="scss">
.aside {
  z-index: $zindex-modal;
  position: fixed;
  top: 0;
  left: 0;
  width: $sidebar-offset;
  height: 100vh;
  padding: 140px 0;
}

.avatar-edit {
  width: 40px;
  height: 40px;
  top: auto;
  left: auto;
  right: 0;
  bottom: 0;
  cursor: pointer;

  i {
    color: $gray-600;
  }
}
.main-section {
  overflow-x: auto;
  padding: 140px 30px 0 0;
  margin: 0 0 0 calc($sidebar-offset + 30px);
  @include media-breakpoint-up(xxl) {
    padding: 160px calc($sidebar-offset * 0.5) 0 0;
    margin: 0 0 0 calc($sidebar-offset * 1.5);
  }
}
</style>
