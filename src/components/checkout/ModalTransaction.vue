<template>
  <!-- Coupon code modal-->
  <div class="modal fade" id="modal-coupon" tabindex="-1">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Coupon code</h4>
          <button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <form class="modal-body needs-validation" novalidate>
          <div class="input-group">
            <input class="form-control" type="text" placeholder="Your coupon code" required />
            <button class="btn btn-primary" type="submit">Apply code</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ModalTransaction',
};
</script>

<style>
</style>