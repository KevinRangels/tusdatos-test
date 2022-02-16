<template>
  <table class="table table-hover mb-0">
    <thead>
      <tr>
        <th>Nombre</th>
        <th>Precio</th>
        <th>Cantidad</th>
        <th>Total</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="py-3 align-middle">
          <div class="d-flex align-items-center">
            <img class="me-2" src="img/account/cards/card-visa.png" alt="Visa" width="39" />
            <div><span class="fw-medium text-heading me-1">Visa</span>ending in 4999<span class="align-middle badge bg-info ms-2">Primary</span></div>
          </div>
        </td>
        <td class="py-3 align-middle">Amanda Wilson</td>
        <td class="py-3 align-middle">08 / 2023</td>
        <td class="py-3 align-middle">08 / 2023</td>
        <td class="py-3 align-middle">
          <a class="nav-link-style text-danger" href="#" data-bs-toggle="tooltip" title="" data-bs-original-title="Remove"> <div class="fas fa-trash"></div></a>
        </td>
      </tr>
      <tr>
        <td class="py-3 align-middle">
          <div class="d-flex align-items-center">
            <img class="me-2" src="img/account/cards/card-master.png" alt="MasterCard" width="39" />
            <div><span class="fw-medium text-heading me-1">MasterCard</span>ending in 0015</div>
          </div>
        </td>
        <td class="py-3 align-middle">Amanda Wilson</td>
        <td class="py-3 align-middle">11 / 2024</td>
        <td class="py-3 align-middle">
          <a class="nav-link-style me-2" href="#" data-bs-toggle="tooltip" title="" data-bs-original-title="Edit" aria-label="Edit"><i class="ai-edit"></i></a
          ><a class="nav-link-style text-danger" href="#" data-bs-toggle="tooltip" title="" data-bs-original-title="Remove"> <div class="ai-trash-2"></div></a>
        </td>
      </tr>
      <tr>
        <td class="py-3 align-middle">
          <div class="d-flex align-items-center">
            <img class="me-2" src="img/account/cards/card-paypal.png" alt="PayPal" width="39" />
            <div><span class="fw-medium text-heading me-1">PayPal</span>a.wilson@example.com</div>
          </div>
        </td>
        <td class="py-3 align-middle">—</td>
        <td class="py-3 align-middle">—</td>
        <td class="py-3 align-middle">
          <a class="nav-link-style me-2" href="#" data-bs-toggle="tooltip" title="" data-bs-original-title="Edit" aria-label="Edit"><i class="ai-edit"></i></a
          ><a class="nav-link-style text-danger" href="#" data-bs-toggle="tooltip" title="" data-bs-original-title="Remove"> <div class="ai-trash-2"></div></a>
        </td>
      </tr>
      <tr>
        <td class="py-3 align-middle">
          <div class="d-flex align-items-center">
            <img class="me-2" src="img/account/cards/card-visa.png" alt="Visa" width="39" />
            <div><span class="fw-medium text-heading me-1">Visa</span>ending in 6073</div>
          </div>
        </td>
        <td class="py-3 align-middle">Amanda Wilson</td>
        <td class="py-3 align-middle">09 / 2025</td>
        <td class="py-3 align-middle">
          <a class="nav-link-style me-2" href="#" data-bs-toggle="tooltip" title="" data-bs-original-title="Edit" aria-label="Edit"><i class="ai-edit"></i></a
          ><a class="nav-link-style text-danger" href="#" data-bs-toggle="tooltip" title="" data-bs-original-title="Remove"> <div class="ai-trash-2"></div></a>
        </td>
      </tr>
      <tr>
        <td class="py-3 align-middle">
          <div class="d-flex align-items-center">
            <img class="me-2" src="img/account/cards/card-visa.png" alt="Visa" width="39" />
            <div><span class="fw-medium text-heading me-1">Visa</span>ending in 9791</div>
          </div>
        </td>
        <td class="py-3 align-middle">Amanda Wilson</td>
        <td class="py-3 align-middle">05 / 2025</td>
        <td class="py-3 align-middle">
          <a class="nav-link-style me-2" href="#" data-bs-toggle="tooltip" title="" data-bs-original-title="Edit" aria-label="Edit"><i class="ai-edit"></i></a
          ><a class="nav-link-style text-danger" href="#" data-bs-toggle="tooltip" title="" data-bs-original-title="Remove"> <div class="ai-trash-2"></div></a>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'TableCart',
  computed: {
    shoppingCart() {
      return this.$store.getters.shoppingCart;
    },
  },
};
</script>

<style>
</style>