<template>
  <header class="header">
    <div class="topbar topbar-dark bg-dark">
      <div class="container d-md-flex align-items-center px-0 px-xl-3">
        <div class="d-none d-md-block text-nowrap me-3">
          <i class="ai-phone fs-base text-muted me-1 align-middle"></i><span class="text-muted me-2">Support</span
          ><a class="topbar-link me-1" href="tel:9107848015">910-784-8015</a>
        </div>
        <div class="d-flex text-md-end ms-md-auto">
          <div class="dropdown">
            <a class="topbar-link dropdown-toggle" href="#" data-bs-toggle="dropdown">$ Dollar (US)</a>
            <div class="dropdown-menu dropdown-menu-end"><a class="dropdown-item" href="#">€ Euro (EU)</a></div>
          </div>
        </div>
      </div>
    </div>
    <div class="navbar navbar-expand-lg navbar-light bg-light navbar-shadow navbar-sticky" data-scroll-header data-fixed-element>
      <div class="navbar-search bg-light">
        <div class="container d-flex flex-nowrap align-items-center">
          <i class="ai-search fs-xl"></i>
          <input class="form-control form-control-xl navbar-search-field" type="text" placeholder="Search site" />
          <div class="d-none d-sm-block flex-shrink-0 ps-2 me-4 border-start border-end" style="width: 10rem">
            <select class="form-select ps-2 pe-0">
              <option value="all">All categories</option>
              <option value="clothing">Clothing</option>
              <option value="shoes">Shoes</option>
              <option value="electronics">Electronics</option>
              <option value="accessoriies">Accessories</option>
              <option value="software">Software</option>
              <option value="automotive">Automotive</option>
            </select>
          </div>
          <div class="d-flex align-items-center">
            <span class="text-muted fs-xs d-none d-sm-inline">Close</span>
            <button class="btn-close p-2" type="button" data-bs-toggle="search"></button>
          </div>
        </div>
      </div>
      <div class="container px-0 px-xl-3">
        <button class="navbar-toggler ms-n2 me-4" type="button" data-bs-toggle="offcanvas" data-bs-target="#primaryMenu"><span class="navbar-toggler-icon"></span></button
        ><a class="navbar-brand flex-shrink-0 order-lg-1 mx-auto ms-lg-0 pe-lg-2 me-lg-4" href="index.html"
          ><img class="d-none d-lg-block" src="img/logo/logo-dark.png" alt="Around" width="153" /><img class="d-lg-none" src="img/logo/logo-icon.png" alt="Around" width="58"
        /></a>
        <div class="d-flex align-items-center order-lg-3 ms-lg-auto">
          <div class="navbar-tool">
            <a class="navbar-tool-icon-box me-2" href="#" data-bs-toggle="search"><i class="ai-search"></i></a>
          </div>
          <div class="navbar-tool d-none d-sm-flex">
            <a class="navbar-tool-icon-box me-2" href="#modal-signin" data-bs-toggle="modal" data-view="#modal-signin-view"><i class="ai-user"></i></a>
          </div>
          <div class="border-start me-2" style="height: 30px"></div>
          <div class="navbar-tool me-2">
            <a class="navbar-tool-icon-box" @click="goCart()"
              ><i class="fas fa-shopping-cart"></i><span class="navbar-tool-badge">{{ shoppingCart.length }}</span></a
            >
          </div>
        </div>
        <div class="offcanvas offcanvas-collapse order-lg-2" id="primaryMenu">
          <div class="offcanvas-header navbar-shadow">
            <h5 class="mt-1 mb-0">Menu</h5>
            <button class="btn-close lead" type="button" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div class="offcanvas-body"></div>
          <div class="offcanvas-footer border-top">
            <a class="btn btn-translucent-primary d-block w-100" href="#modal-signin" data-bs-toggle="modal" data-view="#modal-signin-view"
              ><i class="ai-user fs-lg me-2"></i>Sign in</a
            >
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Navbar',
  computed: {
    shoppingCart() {
      return this.$store.getters.shoppingCart;
    },
  },
  methods: {
    goCart() {
      this.$router.push('/cart');
    },
  },
};
</script>
<style lang="sass" scoped>
</style>