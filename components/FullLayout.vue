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
    <nav>
      <ul class="navbar-nav main-categories flex-column">
        <li class="nav-item">
          <a
            class="nav-link"
            href="#"
          ><span>{{ $t('Incoming') }}</span></a>
        </li>
        <li class="nav-item">
          <a
            class="nav-link active"
            href="#"
          ><span>{{ $t('Groups') }}</span></a>
        </li>
        <li class="nav-item">
          <a
            class="nav-link"
            href="#"
          ><span>{{ $t('Products') }}</span></a>
        </li>
        <li class="nav-item">
          <a
            class="nav-link"
            href="#"
          ><span>{{ $t('Users') }}</span></a>
        </li>
        <li class="nav-item">
          <a
            class="nav-link"
            href="#"
          ><span>{{ $t('Settings') }}</span></a>
        </li>
      </ul>
    </nav>
  </aside>
  <main class="main-section">
    <div class="page-products mb-5">
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
    <div class="page-orders">
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
      <div class="incoming-orders d-flex flex-column flex-shrink-0 mt-3 pb-5">
        <div class="orders__item flex-grow-1 mb-2 border bg-white p-3 rounded">
          <div class="row">
            <div class="col-6 d-flex align-items-center">
              <span class="fs-5 lh-1 text-secondary bordered">Длинное длиннючее название прихода</span>
            </div>
            <div class="col-1">
              <div class="d-flex align-items-center">
                <div class="d-flex flex-column me-4">
                  <div
                    class="d-inline-flex task-icon align-items-center justify-content-center"
                  >
                    <i class="bi bi-list-task fs-3" />
                  </div>
                </div>
                <div class="d-flex flex-column calendar-item">
                  <span class="fs-4 text-secondary lh-1 mb-1">21</span>
                  <span class="small lh-1 text-light">{{
                    $t('productItem.one')
                  }}</span>
                </div>
              </div>
            </div>
            <div class="col-2">
              <div class="d-flex flex-column align-items-center">
                <span class="small lh-1 text-light">10 / 12</span>
                <span class="text-secondary">06 / May / 2023</span>
              </div>
            </div>
            <div class="col-2">
              <div class="d-flex flex-column">
                <span class="small lh-1 text-light">2 500 $</span>
                <span class="text-secondary">250 000. 50 UAH</span>
              </div>
            </div>
            <div class="col-1 d-flex align-items-center justify-content-center">
              <i class="bi bi-trash text-secondary cursor-pointer" />
            </div>
          </div>
        </div>
        <div class="orders__item flex-grow-1 mb-2 border bg-white p-3 rounded">
          <div class="row">
            <div class="col-6 d-flex align-items-center">
              <span class="fs-5 lh-1 text-secondary bordered">Длинное длиннючее название прихода</span>
            </div>
            <div class="col-1">
              <div class="d-flex align-items-center">
                <div class="d-flex flex-column me-4">
                  <div
                    class="d-inline-flex task-icon align-items-center justify-content-center"
                  >
                    <i class="bi bi-list-task fs-3" />
                  </div>
                </div>
                <div class="d-flex flex-column calendar-item">
                  <span class="fs-4 text-secondary lh-1 mb-1">23</span>
                  <span class="small lh-1 text-light">{{
                    $t('productItem.few')
                  }}</span>
                </div>
              </div>
            </div>
            <div class="col-2">
              <div class="d-flex flex-column align-items-center">
                <span class="small lh-1 text-light">10 / 12</span>
                <span class="text-secondary">06 / May / 2023</span>
              </div>
            </div>
            <div class="col-2">
              <div class="d-flex flex-column">
                <span class="small lh-1 text-light">2 500 $</span>
                <span class="text-secondary">250 000. 50 UAH</span>
              </div>
            </div>
            <div class="col-1 d-flex align-items-center justify-content-center">
              <i class="bi bi-trash text-secondary cursor-pointer" />
            </div>
          </div>
        </div>
        <div class="orders__item flex-grow-1 mb-2 border bg-white p-3 rounded">
          <div class="row">
            <div class="col-6 d-flex align-items-center">
              <span class="fs-5 lh-1 text-secondary bordered">Длинное длиннючее название прихода</span>
            </div>
            <div class="col-1">
              <div class="d-flex align-items-center">
                <div class="d-flex flex-column me-4">
                  <div
                    class="d-inline-flex task-icon align-items-center justify-content-center"
                  >
                    <i class="bi bi-list-task fs-3" />
                  </div>
                </div>
                <div class="d-flex flex-column calendar-item">
                  <span class="fs-4 text-secondary lh-1 mb-1">25</span>
                  <span class="small lh-1 text-light">{{
                    $t('productItem.many')
                  }}</span>
                </div>
              </div>
            </div>
            <div class="col-2">
              <div class="d-flex flex-column align-items-center">
                <span class="small lh-1 text-light">10 / 12</span>
                <span class="text-secondary">06 / May / 2023</span>
              </div>
            </div>
            <div class="col-2">
              <div class="d-flex flex-column">
                <span class="small lh-1 text-light">2 500 $</span>
                <span class="text-secondary">250 000. 50 UAH</span>
              </div>
            </div>
            <div class="col-1 d-flex align-items-center justify-content-center">
              <i class="bi bi-trash text-secondary cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </div>
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
  </main>
</template>

<script lang="ts" setup>
const localePath = useLocalePath()
</script>

<style scoped lang="scss">
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

.main-header {
  z-index: $zindex-popover;
  @include media-breakpoint-up(xxl) {
    padding-left: $sidebar-offset;
    padding-right: $sidebar-offset;
  }
}

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

.main-categories .nav-link {
  margin: 0 0 10px;
  text-align: center;

  span {
    color: $gray-900;
    font-weight: 500;
    text-transform: uppercase;
    border-bottom: 3px solid transparent;
    padding-bottom: 3px;
  }

  &.active span {
    border-bottom-color: $accent-dark;
  }
}
.main-section {
  overflow-x: auto;
  padding: 140px 30px 40px 0;
  margin: 0 0 0 calc($sidebar-offset + 30px);
  @include media-breakpoint-up(xxl) {
    padding: 160px calc($sidebar-offset * 0.5) 60px 0;
    margin: 0 0 0 calc($sidebar-offset * 1.5);
  }
}

.feature-add {
  border-radius: 50%;
  background: $accent;
  width: 40px;
  height: 40px;
  border: 5px solid $accent-dark;

  i {
    font-size: 16px;
    line-height: 1;
    color: $white;
  }
}

.task-icon {
  border-radius: 50%;
  border: 1px solid $gray-400;
  width: 45px;
  height: 45px;

  i {
    line-height: 1;
    color: $gray-700;
  }
}
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
.calendar-item {
  min-width: 80px;
}

.item-add-icon {
  background: $accent;
  width: 20px;
  height: 20px;

  i {
    font-size: 16px;
    line-height: 1;
    color: $white;
  }
}

.status-icon {
  font-size: 12px;
}

.btn-close-custom {
  position: absolute;
  top: 0;
  right: 0;
  left: auto;
  bottom: auto;
  font-size: 12px;
  opacity: 1;
  transform: translate(20px, -20px);
}
.btn-close-custom--modal {
  transform: translate(14px, -14px);
}

.incoming-orders {
  min-width: 1300px;
}
</style>
