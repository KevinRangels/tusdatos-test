<template>
  <header class="header">
    <div class="topbar topbar-dark bg-dark">
      <div class="container d-md-flex align-items-center px-0 px-xl-3">
        <div class="d-none d-md-block text-nowrap me-3">
          <i class="fas fa-phone fs-base text-muted me-1 align-middle"></i><span class="text-muted me-2">Soporte</span
          ><a class="topbar-link me-1" href="tel:3228329136">322-832-9136</a>
        </div>
      </div>
    </div>
    <div class="navbar navbar-expand-lg navbar-light bg-light navbar-shadow navbar-sticky">
      <div class="container px-0 px-xl-3">
        <button class="navbar-toggler ms-n2 me-4" type="button" data-bs-toggle="offcanvas" data-bs-target="#primaryMenu"><span class="navbar-toggler-icon"></span></button
        ><a class="navbar-brand flex-shrink-0 order-lg-1 mx-auto ms-lg-0 pe-lg-2 me-lg-4 d-flex align-items-center" @click="goView('/')"
          ><img
            class="d-none d-lg-block mx-2"
            src="https://media-exp1.licdn.com/dms/image/C560BAQGuky-4kcFjeg/company-logo_100_100/0/1574703502136?e=1652918400&v=beta&t=FrHrfeoFFuxANnM2oUqUg6997pTQOdbIzyk6nh6QT1s"
            alt="Around"
            width="40"
          /><img
            class="d-lg-none"
            src="https://uploads-ssl.webflow.com/5e63c64451beef5b51c27896/6032cd75f5de0c556fc708b5_logo-td-small%20(1).png"
            alt="Around"
            width="58"
          />TusDatos
        </a>
        <div class="d-flex align-items-center order-lg-3 ms-lg-auto">
          <div class="border-start me-2" style="height: 30px"></div>
          <div class="navbar-tool me-2">
            <a class="navbar-tool-icon-box" @click="goView('/cart')"
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
    goView(route) {
      if (route === '/cart' && this.shoppingCart.length === 0) {
        this.$notify({
          group: 'app',
          type: 'warn',
          title: 'Agregar productos',
          text: 'No tienes productos en tu carrito',
        });
        return;
      }
      this.$router.push(route);
    },
  },
};
</script>
<style lang="sass" scoped>
.header
  position: sticky
  top: 0
.navbar-brand
  cursor: pointer
.fa-shopping-cart
  cursor: pointer
.dropdown-toggle:not(.dropdown-toggle-split)::after
  display: none
</style>