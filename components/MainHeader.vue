<template>
  <header
    class="navbar navbar-expand-lg fixed-top shadow rounded main-header bg-white"
  >
    <div class="container-fluid">
      <div class="row flex-grow-1">
        <div class="col-3 d-flex align-items-center">
          <div class="navbar-brand">
            <NuxtLink :to="localePath('/')">
              <div class="container d-flex align-items-center px-0">
                <div
                  class="position-relative d-inline-flex justify-content-center align-items-center"
                >
                  <i
                    class="bi bi-shield-fill bi-lg logo-icon-outer text-primary"
                  />
                  <i
                    class="bi bi-person-fill position-absolute top-50 start-50 translate-middle bi-sm logo-icon-inner pt-1 text-white"
                  />
                  <i
                    class="bi bi-circle-fill position-absolute top-50 start-50 translate-middle bi-sm logo-icon-middle pb-2 text-success"
                  />
                </div>
                <span
                  class="navbar-text ps-2 logo-text text-primary text-uppercase"
                >{{ $t('Inventory') }}</span>
              </div>
            </NuxtLink>
          </div>
        </div>
        <div class="col-6 gy-2 order-0 d-flex align-items-center">
          <form class="d-flex flex-grow-1">
            <div class="custom-input">
              <input
                class="form-control"
                type="search"
                :placeholder="$t('Search')"
                aria-label="Search"
              >
            </div>
          </form>
        </div>
        <div class="col-3 d-flex justify-content-end">
          <div class="d-flex align-items-start">
            <div class="ml-auto">
              <div class="navbar-text pt-0">
                Monday
              </div>
              <div class="d-flex">
                <div class="navbar-text pt-0 me-3">
                  06 July 2023
                </div>
                <div class="navbar-text pt-0">
                  <i class="bi bi-clock text-primary me-1" />17:20
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
const localePath = useLocalePath()
</script>

<style scoped lang="scss">
.main-header {
  z-index: $zindex-popover;
  @include media-breakpoint-up(xxl) {
    padding-left: $sidebar-offset;
    padding-right: $sidebar-offset;
  }
}
.logo-icon-outer {
  font-size: 48px;
  line-height: 1;
}
.logo-icon-middle {
  font-size: 24px;
}
.logo-icon-inner {
  font-size: 20px;
  z-index: 1;
}
</style>
```
