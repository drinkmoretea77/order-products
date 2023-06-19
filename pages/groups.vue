<template>
  <div class="page-groups">
    <div class="d-flex align-items-center mb-5 pb-3">
      <div
        class="feature-add me-3 d-flex align-items-center justify-content-center cursor-pointer"
      >
        <i class="bi bi-plus" />
      </div>
      <h1 class="fs-3 fw-bold mb-0">
        {{ $t('Incoming') }} / 25
      </h1>
    </div>
    <div class="d-flex flex-wrap-nowrap">
      <div
        class="incoming-archive d-flex flex-wrap-nowrap flex-shrink-0 me-3"
      >
        <div class="d-flex flex-column">
          <div
            class="d-inline-flex align-items-center bg-white border rounded py-2 px-5 mb-2 archive-item"
          >
            <div class="d-flex flex-column me-4">
              <div
                class="d-inline-flex task-icon align-items-center justify-content-center"
              >
                <i class="bi bi-list-task fs-3" />
              </div>
            </div>
            <div class="d-flex flex-column calendar-item me-3">
              <span class="fs-4 text-secondary lh-1 mb-1">21</span>
              <span class="small lh-1 text-light">{{
                $t('productItem.one')
              }}</span>
            </div>
            <div class="d-flex flex-column pe-5">
              <span class="small lh-1 text-light">10 / 12</span>
              <span class="text-secondary">06 / May / 2023</span>
            </div>
          </div>
          <div
            class="d-inline-flex align-items-center bg-white border rounded py-2 px-5 mb-2 archive-item"
          >
            <div class="d-flex flex-column me-4">
              <div
                class="d-inline-flex task-icon align-items-center justify-content-center"
              >
                <i class="bi bi-list-task fs-3" />
              </div>
            </div>
            <div class="d-flex flex-column calendar-item me-3">
              <span class="fs-4 text-secondary lh-1 mb-1">25</span>
              <span class="small lh-1 text-light">{{
                $t('productItem.many')
              }}</span>
            </div>
            <div class="d-flex flex-column pe-5">
              <span class="small lh-1 text-light">10 / 12</span>
              <span class="text-secondary">06 / May / 2023</span>
            </div>
          </div>
          <div
            class="d-inline-flex align-items-center bg-white border rounded py-2 px-5 mb-2 archive-item"
          >
            <div class="d-flex flex-column me-4">
              <div
                class="d-inline-flex task-icon align-items-center justify-content-center"
              >
                <i class="bi bi-list-task fs-3" />
              </div>
            </div>
            <div class="d-flex flex-column calendar-item me-3">
              <span class="fs-4 text-secondary lh-1 mb-1">23</span>
              <span class="small lh-1 text-light">{{
                $t('productItem.few')
              }}</span>
            </div>
            <div class="d-flex flex-column pe-5">
              <span class="small lh-1 text-light">10 / 12</span>
              <span class="text-secondary">06 / May / 2023</span>
            </div>
          </div>
        </div>
      </div>
      <div
        class="bg-white border rounded flex-grow-1 flex-shrink-0 position-relative"
      >
        <div class="p-4">
          <button
            type="button"
            class="btn-close rounded-circle shadow bg-white p-3 btn-close-custom"
            aria-label="Close"
          />
          <h2 class="fs-4 mb-4">
            Длинное предлинное длиннючее длиннючее название прихода
          </h2>
          <div class="d-inline-flex align-items-center cursor-pointer">
            <div
              class="item-add-icon d-flex align-items-center justify-content-center rounded-circle me-2"
            >
              <i class="bi bi-plus" />
            </div>
            <span class="text-primary">{{ $t('Add product') }}</span>
          </div>
        </div>
        <div class="mt-3">
          <table class="custom-table w-100">
            <tbody>
              <tr class="border border-start-0 border-end-0 border-bottom-0">
                <td class="text-center">
                  <i class="bi bi-circle-fill text-warning status-icon" />
                </td>
                <td>
                  <nuxt-img
                    src="/monitor.png"
                    :width="60"
                    :height="40"
                    loading="lazy"
                    fit="cover"
                  />
                </td>
                <td>
                  <div>
                    <NuxtLink class="bordered text-dark fw-semibold" to="">
                      Gigabyte Technology X58-USB3 (Socket 1366) 6 X58-USB3
                    </NuxtLink>
                  </div>
                  <div class="text-light text-uppercase">
                    SN-12.3456789
                  </div>
                </td>
                <td>
                  <span class="text-warning">{{
                    $t('stockStatus.available')
                  }}</span>
                </td>
                <td class="text-center">
                  <i class="bi bi-trash text-secondary cursor-pointer" />
                </td>
              </tr>
              <tr class="border border-start-0 border-end-0 border-bottom-0">
                <td class="text-center">
                  <i class="bi bi-circle-fill text-warning status-icon" />
                </td>
                <td>
                  <nuxt-img
                    src="/monitor.png"
                    :width="60"
                    :height="40"
                    loading="lazy"
                    fit="cover"
                  />
                </td>
                <td>
                  <div>
                    <NuxtLink class="bordered text-dark fw-semibold" to="">
                      Gigabyte Technology X58-USB3 (Socket 1366) 6 X58-USB3
                    </NuxtLink>
                  </div>
                  <div class="text-light text-uppercase">
                    SN-12.3456789
                  </div>
                </td>
                <td>
                  <span class="text-warning">{{
                    $t('stockStatus.available')
                  }}</span>
                </td>
                <td class="text-center">
                  <i class="bi bi-trash text-secondary cursor-pointer" />
                </td>
              </tr>
              <tr class="border border-start-0 border-end-0 border-bottom-0">
                <td class="text-center">
                  <i class="bi bi-circle-fill text-warning status-icon" />
                </td>
                <td>
                  <nuxt-img
                    src="/monitor.png"
                    :width="60"
                    :height="40"
                    loading="lazy"
                    fit="cover"
                  />
                </td>
                <td>
                  <div>
                    <NuxtLink class="bordered text-dark fw-semibold" to="">
                      Gigabyte Technology X58-USB3 (Socket 1366) 6 X58-USB3
                    </NuxtLink>
                  </div>
                  <div class="text-light text-uppercase">
                    SN-12.3456789
                  </div>
                </td>
                <td>
                  <span class="text-warning">{{
                    $t('stockStatus.available')
                  }}</span>
                </td>
                <td class="text-center">
                  <i class="bi bi-trash text-secondary cursor-pointer" />
                </td>
              </tr>
              <tr class="border border-start-0 border-end-0 border-bottom-0">
                <td class="text-center">
                  <i class="bi bi-circle-fill text-warning status-icon" />
                </td>
                <td>
                  <nuxt-img
                    src="/monitor.png"
                    :width="60"
                    :height="40"
                    loading="lazy"
                    fit="cover"
                  />
                </td>
                <td>
                  <div>
                    <NuxtLink class="bordered text-dark fw-semibold" to="">
                      Gigabyte Technology X58-USB3 (Socket 1366) 6 X58-USB3
                    </NuxtLink>
                  </div>
                  <div class="text-light text-uppercase">
                    SN-12.3456789
                  </div>
                </td>
                <td>
                  <span class="text-warning">{{
                    $t('stockStatus.available')
                  }}</span>
                </td>
                <td class="text-center">
                  <i class="bi bi-trash text-secondary cursor-pointer" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <button
      type="button"
      class="btn btn-primary"
      data-bs-toggle="modal"
      data-bs-target="#deleteIncoming"
    >
      Launch delete income
    </button>

    <div id="deleteIncoming" class="modal modal-lg" tabindex="-1">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content border-0">
          <div class="modal-header">
            <h5 class="modal-title p-3 fw-bold">
              {{ $t('dialog.incomingDeleteTitle') }}
            </h5>
            <button
              type="button"
              class="btn-close rounded-circle shadow bg-white p-3 btn-close-custom btn-close-custom--modal"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div class="modal-body">
            <table class="custom-table w-100">
              <tbody>
                <tr>
                  <td class="text-center">
                    <i class="bi bi-circle-fill text-warning status-icon" />
                  </td>
                  <td>
                    <nuxt-img
                      src="/monitor.png"
                      :width="60"
                      :height="40"
                      loading="lazy"
                      fit="cover"
                    />
                  </td>
                  <td>
                    <div>
                      <NuxtLink class="bordered text-dark fw-semibold" to="">
                        Gigabyte Technology X58-USB3 (Socket 1366) 6 X58-USB3
                      </NuxtLink>
                    </div>
                    <div class="text-light text-uppercase">
                      SN-12.3456789
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="modal-footer bg-primary px-3 py-4">
            <button
              type="button"
              class="btn bg-primary text-white text-uppercase fw-semibold letter-spacing me-3"
              data-bs-dismiss="modal"
            >
              {{ $t('dialog.cancel') }}
            </button>
            <button
              type="button"
              class="btn bg-white shadow rounded-pill text-danger text-uppercase fw-semibold py-3 px-5"
            >
              <span class="d-flex-inline">
                <i class="bi bi-trash text-danger me-2" />
                {{ $t('dialog.delete') }}
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.archive-item {
  cursor: pointer;
  position: relative;

  &::before {
    content: '\F285';
    font-family: 'bootstrap-icons';
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    left: auto;
    width: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: $white;
    background: $bg-secondary;
    font-weight: bold;
    border-radius: 0 $border-width $border-width 0;
    opacity: 0;
    transition: $transition;
  }

  &:hover::before,
  &.active::before {
    opacity: 1;
  }
}
</style>
