<template>
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
</template>

<style lang="scss" scoped>
.incoming-orders {
  min-width: 1300px;
}
</style>
