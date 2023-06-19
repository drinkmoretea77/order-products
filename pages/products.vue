<template>
  <div class="page-products">
    <div class="d-flex align-items-center mb-5 pb-3">
      <div
        class="feature-add me-3 d-flex align-items-center flex-shrink-0 justify-content-center cursor-pointer"
      >
        <i class="bi bi-plus" />
      </div>
      <h1 class="fs-3 fw-bold mb-0 me-5 flex-shrink-0">
        {{ $t('Products') }} / 25
      </h1>
      <div class="d-inline-flex align-items-center flex-shrink-0 me-5">
        <div class="me-2">
          {{ $t('Type') }}:
        </div>
        <div>
          <select class="form-select custom-input fw-semibold">
            <option selected>
              Choose...
            </option>
            <option value="1">
              One
            </option>
            <option value="2">
              Two
            </option>
            <option value="3">
              Three
            </option>
          </select>
        </div>
      </div>
      <div class="d-inline-flex align-items-center me-5">
        <div class="me-2">
          {{ $t('Specification') }}:
        </div>
        <div>
          <select class="form-select custom-input fw-semibold">
            <option selected>
              Choose...
            </option>
            <option value="1">
              One
            </option>
            <option value="2">
              Two
            </option>
            <option value="3">
              Three
            </option>
          </select>
        </div>
      </div>
    </div>
    <div class="mt-3 d-flex flex-wrap-nowrap">
      <div class="flex-shrink-0 flex-grow-1">
        <table class="custom-table w-100 table-separate">
          <tbody>
            <tr>
              <td
                class="text-center rounded-start bg-white border border-end-0"
              >
                <i class="bi bi-circle-fill text-warning status-icon" />
              </td>
              <td class="bg-white border border-start-0 border-end-0">
                <nuxt-img
                  src="/monitor.png"
                  :width="60"
                  :height="40"
                  loading="lazy"
                  fit="cover"
                />
              </td>
              <td class="bg-white border border-start-0 border-end-0">
                <div>
                  <NuxtLink class="bordered text-dark fw-semibold" to="">
                    Gigabyte Technology X58-USB3 (Socket 1366) 6 X58-USB3
                  </NuxtLink>
                </div>
                <div class="text-light text-uppercase">
                  SN-12.3456789
                </div>
              </td>
              <td class="bg-white border border-start-0 border-end-0">
                <span class="text-warning">{{
                  $t('stockStatus.available')
                }}</span>
              </td>
              <td class="bg-white border border-start-0 border-end-0">
                <div class="d-flex flex-wrap-nowrap align-items-center">
                  <div class="d-flex flex-column me-3">
                    <span class="small text-light">{{ $t('fromTo.from') }}:</span>
                    <span class="small text-light">{{ $t('fromTo.to') }}: </span>
                  </div>
                  <div class="d-flex flex-column">
                    <span class="text-secondary">06 / 04 / 2023</span>
                    <span class="text-secondary">06 / 08 / 2025</span>
                  </div>
                </div>
              </td>
              <td class="bg-white border border-start-0 border-end-0">
                <span class="text-secondary">{{ $t('condition.new') }}</span>
              </td>
              <td class="bg-white border border-start-0 border-end-0">
                <div class="d-flex flex-column">
                  <span class="small lh-1 text-light">2 500 $</span>
                  <span class="text-secondary">250 000. 50 UAH</span>
                </div>
              </td>
              <td class="bg-white border border-start-0 border-end-0">
                <div class="fixed-col">
                  <span class="bordered fs-5 text-secondary">Длинное предлинное длиннючее название группы</span>
                </div>
              </td>
              <td class="bg-white border border-start-0 border-end-0">
                <div class="fixed-col">
                  <span class="bordered fs-5 text-secondary">Христорождественский Александр</span>
                </div>
              </td>
              <td class="bg-white border border-start-0 border-end-0">
                <div class="fixed-col">
                  <span class="bordered fs-5 text-secondary">Длинное предлинное длиннючее название прихода</span>
                </div>
              </td>
              <td class="bg-white border border-start-0 border-end-0">
                <div class="d-flex flex-column align-items-center">
                  <span class="small lh-1 text-light">10 / 12</span>
                  <span class="text-secondary">06 / May / 2023</span>
                </div>
              </td>
              <td
                class="text-center bg-white rounded-end border border-start-0"
              >
                <i class="bi bi-trash text-secondary cursor-pointer" />
              </td>
            </tr>
            <tr>
              <td
                class="text-center rounded-start bg-white border border-end-0"
              >
                <i class="bi bi-circle-fill text-dark status-icon" />
              </td>
              <td class="bg-white border border-start-0 border-end-0">
                <nuxt-img
                  src="/monitor.png"
                  :width="60"
                  :height="40"
                  loading="lazy"
                  fit="cover"
                />
              </td>
              <td class="bg-white border border-start-0 border-end-0">
                <div>
                  <NuxtLink class="bordered text-dark fw-semibold" to="">
                    Gigabyte Technology X58-USB3 (Socket 1366) 6 X58-USB3
                  </NuxtLink>
                </div>
                <div class="text-light text-uppercase">
                  SN-12.3456789
                </div>
              </td>
              <td class="bg-white border border-start-0 border-end-0">
                <span class="text-dark">{{
                  $t('stockStatus.inRepair')
                }}</span>
              </td>
              <td class="bg-white border border-start-0 border-end-0">
                <div class="d-flex flex-wrap-nowrap align-items-center">
                  <div class="d-flex flex-column me-3">
                    <span class="small text-light">{{ $t('fromTo.from') }}:</span>
                    <span class="small text-light">{{ $t('fromTo.to') }}: </span>
                  </div>
                  <div class="d-flex flex-column">
                    <span class="text-secondary">06 / 04 / 2023</span>
                    <span class="text-secondary">06 / 08 / 2025</span>
                  </div>
                </div>
              </td>
              <td class="bg-white border border-start-0 border-end-0">
                <span class="text-secondary">{{ $t('condition.used') }}</span>
              </td>
              <td class="bg-white border border-start-0 border-end-0">
                <div class="d-flex flex-column">
                  <span class="small lh-1 text-light">2 500 $</span>
                  <span class="text-secondary">250 000. 50 UAH</span>
                </div>
              </td>
              <td class="bg-white border border-start-0 border-end-0">
                <div class="fixed-col">
                  <span class="bordered fs-5 text-secondary">Длинное предлинное длиннючее название группы</span>
                </div>
              </td>
              <td class="bg-white border border-start-0 border-end-0">
                <div class="fixed-col">
                  <span class="bordered fs-5 text-secondary">Христорождественский Александр</span>
                </div>
              </td>
              <td class="bg-white border border-start-0 border-end-0">
                <div class="fixed-col">
                  <span class="bordered fs-5 text-secondary">Длинное предлинное длиннючее название прихода</span>
                </div>
              </td>
              <td class="bg-white border border-start-0 border-end-0">
                <div class="d-flex flex-column align-items-center">
                  <span class="small lh-1 text-light">10 / 12</span>
                  <span class="text-secondary">06 / May / 2023</span>
                </div>
              </td>
              <td
                class="text-center bg-white rounded-end border border-start-0"
              >
                <i class="bi bi-trash text-secondary cursor-pointer" />
              </td>
            </tr>
            <tr>
              <td
                class="text-center rounded-start bg-white border border-end-0"
              >
                <i class="bi bi-circle-fill text-warning status-icon" />
              </td>
              <td class="bg-white border border-start-0 border-end-0">
                <nuxt-img
                  src="/monitor.png"
                  :width="60"
                  :height="40"
                  loading="lazy"
                  fit="cover"
                />
              </td>
              <td class="bg-white border border-start-0 border-end-0">
                <div>
                  <NuxtLink class="bordered text-dark fw-semibold" to="">
                    Gigabyte Technology X58-USB3 (Socket 1366) 6 X58-USB3
                  </NuxtLink>
                </div>
                <div class="text-light text-uppercase">
                  SN-12.3456789
                </div>
              </td>
              <td class="bg-white border border-start-0 border-end-0">
                <span class="text-warning">{{
                  $t('stockStatus.available')
                }}</span>
              </td>
              <td class="bg-white border border-start-0 border-end-0">
                <div class="d-flex flex-wrap-nowrap align-items-center">
                  <div class="d-flex flex-column me-3">
                    <span class="small text-light">{{ $t('fromTo.from') }}:</span>
                    <span class="small text-light">{{ $t('fromTo.to') }}: </span>
                  </div>
                  <div class="d-flex flex-column">
                    <span class="text-secondary">06 / 04 / 2023</span>
                    <span class="text-secondary">06 / 08 / 2025</span>
                  </div>
                </div>
              </td>
              <td class="bg-white border border-start-0 border-end-0">
                <span class="text-secondary">{{ $t('condition.new') }}</span>
              </td>
              <td class="bg-white border border-start-0 border-end-0">
                <div class="d-flex flex-column">
                  <span class="small lh-1 text-light">2 500 $</span>
                  <span class="text-secondary">250 000. 50 UAH</span>
                </div>
              </td>
              <td class="bg-white border border-start-0 border-end-0">
                <div class="fixed-col">
                  <span class="bordered fs-5 text-secondary">Длинное предлинное длиннючее название группы</span>
                </div>
              </td>
              <td class="bg-white border border-start-0 border-end-0">
                <div class="fixed-col">
                  <span class="bordered fs-5 text-secondary">Христорождественский Александр</span>
                </div>
              </td>
              <td class="bg-white border border-start-0 border-end-0">
                <div class="fixed-col">
                  <span class="bordered fs-5 text-secondary">Длинное предлинное длиннючее название прихода</span>
                </div>
              </td>
              <td class="bg-white border border-start-0 border-end-0">
                <div class="d-flex flex-column align-items-center">
                  <span class="small lh-1 text-light">10 / 12</span>
                  <span class="text-secondary">06 / May / 2023</span>
                </div>
              </td>
              <td
                class="text-center bg-white rounded-end border border-start-0"
              >
                <i class="bi bi-trash text-secondary cursor-pointer" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
