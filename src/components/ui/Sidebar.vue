<template>
  <div class="col-lg-3 pt-lg-5">
    <div class="" id="shop-sidebar">
      <div class="offcanvas-header navbar-shadow px-4 mb-3">
        <h5 class="mt-1 mb-0">Refine your selection</h5>
        <button class="btn-close lead" type="button" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body px-4 pt-3 pt-lg-0 ps-lg-0 pe-lg-2 pe-xl-4" data-simplebar>
        <!-- Price range-->
        <div class="widget mt-n1 mb-5">
          <h3 class="widget-title">Price</h3>
          <div class="px-2">
            <div class="range-slider" data-start-min="250" data-start-max="680" data-min="0" data-max="1000" data-step="1">
              <div class="range-slider-ui"></div>
              <div class="d-flex">
                <div class="w-50 pe-2 me-2">
                  <div class="input-group input-group-sm">
                    <span class="input-group-text">$</span>
                    <input class="form-control range-slider-value-min" type="text" />
                  </div>
                </div>
                <div class="w-50 ps-2">
                  <div class="input-group input-group-sm">
                    <span class="input-group-text">$</span>
                    <input class="form-control range-slider-value-max" type="text" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Brand (checkboxes)-->
        <div class="widget mb-5">
          <h3 class="widget-title">Brand</h3>
          <div class="form-check mb-2">
            <input class="form-check-input" type="checkbox" id="adidas" checked />
            <label class="form-check-label text-nav" for="adidas">Adidas<span class="fs-xs text-muted ms-2">425</span></label>
          </div>
          <div class="form-check mb-2">
            <input class="form-check-input" type="checkbox" id="bilabong" />
            <label class="form-check-label text-nav" for="bilabong">Bilabong<span class="fs-xs text-muted ms-2">27</span></label>
          </div>
          <div class="form-check mb-2">
            <input class="form-check-input" type="checkbox" id="klein" />
            <label class="form-check-label text-nav" for="klein">Calvin Klein<span class="fs-xs text-muted ms-2">365</span></label>
          </div>
          <div class="form-check mb-2">
            <input class="form-check-input" type="checkbox" id="electrolux" />
            <label class="form-check-label text-nav" for="electrolux">Electrolux<span class="fs-xs text-muted ms-2">56</span></label>
          </div>
          <div class="form-check mb-2">
            <input class="form-check-input" type="checkbox" id="motorolla" />
            <label class="form-check-label text-nav" for="motorolla">Motorolla<span class="fs-xs text-muted ms-2">104</span></label>
          </div>
          <div class="form-check mb-2">
            <input class="form-check-input" type="checkbox" id="nb" />
            <label class="form-check-label text-nav" for="nb">New Balance<span class="fs-xs text-muted ms-2">197</span></label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
};
</script>
<style lang="sass" scoped>
</style>